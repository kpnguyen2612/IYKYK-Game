/**
 * Faker / IYKYK Party Game - Backend API Client Module
 * Provides seamless connection to the Secure REST API Server with automatic Offline Fallback.
 */

class FakerAPIClient {
  constructor() {
    // Priority order for API Base URL:
    // 1. Saved custom URL in localStorage (e.g. deployed Railway/Render URL)
    // 2. Same origin if running on http/https
    // 3. Default local server
    this.storageKey = 'faker_api_url';
    this.customUrl = localStorage.getItem(this.storageKey) || '';

    this.defaultLocalUrl = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http'))
      ? `${window.location.origin}/api/v1`
      : 'http://localhost:8080/api/v1';

    this.isOnline = false;
    this.lastChecked = 0;
    this.activeMatchToken = null;
    this.serverCategories = null;

    // Auto check server health on init
    this.checkHealth();
  }

  get baseUrl() {
    return (this.customUrl || this.defaultLocalUrl).replace(/\/+$/, '');
  }

  setBaseUrl(url) {
    const clean = (url || '').trim().replace(/\/+$/, '');
    this.customUrl = clean;
    if (clean) {
      localStorage.setItem(this.storageKey, clean);
    } else {
      localStorage.removeItem(this.storageKey);
    }
    this.checkHealth(true);
  }

  /**
   * Check connection status to the backend server
   * @param {boolean} force - Force refresh without cache
   */
  async checkHealth(force = false) {
    const now = Date.now();
    if (!force && now - this.lastChecked < 15000) {
      return this.isOnline;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        this.isOnline = (data.status === 'ok');
      } else {
        this.isOnline = false;
      }
    } catch (err) {
      this.isOnline = false;
    }

    this.lastChecked = now;
    this.dispatchStatusEvent();
    return this.isOnline;
  }

  dispatchStatusEvent() {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('faker:server-status', {
        detail: {
          isOnline: this.isOnline,
          baseUrl: this.baseUrl,
          isCustomUrl: !!this.customUrl
        }
      });
      window.dispatchEvent(event);
    }
  }

  /**
   * Fetch categories from server without words
   */
  async getCategories() {
    const online = await this.checkHealth();
    if (online) {
      try {
        const res = await fetch(`${this.baseUrl}/categories`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.categories)) {
            this.serverCategories = data.categories;
            return data.categories;
          }
        }
      } catch (e) {
        console.warn('[FakerAPI] Failed to fetch remote categories, using local vault.');
      }
    }

    // Fallback to local categories
    return (window.CATEGORIES || []).map(cat => ({
      id: cat.id,
      name_vi: cat.name_vi,
      icon: cat.icon,
      wordCount: Array.isArray(cat.words) ? cat.words.length : 0
    }));
  }

  /**
   * Start a match and fetch a secure word pair for this session only
   * @param {string} categoryId 
   * @param {object} options 
   */
  async startMatch(categoryId, options = {}) {
    const online = await this.checkHealth();

    if (online) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(`${this.baseUrl}/match/start`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categoryId, ...options }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.words) {
            this.activeMatchToken = data.matchToken;
            return {
              isServerMode: true,
              matchToken: data.matchToken,
              category: data.category,
              pair: {
                civilian: data.words.civilian,
                imposter: data.words.imposter
              }
            };
          }
        }
      } catch (err) {
        console.warn('[FakerAPI] Server match/start request failed. Activating encrypted local fallback.', err);
      }
    }

    // Hybrid Offline Fallback using Encrypted Vault
    return this.getOfflineMatch(categoryId);
  }

  getOfflineMatch(categoryId) {
    this.activeMatchToken = null;
    const cats = window.CATEGORIES || [];
    let chosenCat = null;

    if (categoryId && categoryId !== 'all') {
      chosenCat = cats.find(c => c.id === categoryId);
    }
    if (!chosenCat && cats.length > 0) {
      chosenCat = cats[Math.floor(Math.random() * cats.length)];
    }

    const pair = (chosenCat && typeof chosenCat.getRandomPair === 'function')
      ? chosenCat.getRandomPair()
      : { civilian: 'Trà Sữa', imposter: 'Cà Phê' };

    return {
      isServerMode: false,
      matchToken: null,
      category: chosenCat ? { id: chosenCat.id, name_vi: chosenCat.name_vi, icon: chosenCat.icon } : { id: 'default', name_vi: 'Chung', icon: '✨' },
      pair
    };
  }

  /**
   * Validate Comeback Guess via Server API (Answer is never leaked)
   * @param {string} matchToken 
   * @param {string} guessText 
   * @param {string} localFallbackSecret - Used only if server is offline
   */
  async verifyGuess(matchToken, guessText, localFallbackSecret = '') {
    const token = matchToken || this.activeMatchToken;
    const online = await this.checkHealth();

    if (online && token) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(`${this.baseUrl}/match/verify-guess`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ matchToken: token, guessText }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            return {
              isServerVerified: true,
              isCorrect: Boolean(data.isCorrect),
              penalty: data.penalty || (data.isCorrect ? 0 : 10)
            };
          }
        }
      } catch (err) {
        console.warn('[FakerAPI] verify-guess server call failed. Falling back to local check.', err);
      }
    }

    // Local Fallback Comparison
    const norm = str => (str || '').toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]/g, '');

    const clean = s => s.replace(/^(con|cay|cai|chiec|mon|qua|bo|chu)\s*/i, '').trim();

    const normTarget = norm(clean(localFallbackSecret));
    const normGuess = norm(clean(guessText));

    const isMatch = normGuess.length > 0 && (
      normTarget === normGuess ||
      (normTarget.includes(normGuess) && normGuess.length >= 3) ||
      normGuess.includes(normTarget)
    );

    return {
      isServerVerified: false,
      isCorrect: isMatch,
      penalty: isMatch ? 0 : 10
    };
  }
}

// Global Singleton Instance
if (typeof window !== 'undefined') {
  window.FakerAPI = new FakerAPIClient();
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FakerAPIClient;
}
