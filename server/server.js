/**
 * Faker / IYKYK Party Game - Secure REST API Backend Server
 * Production-ready Express server for word bank security & comeback validation
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (Capacitor apps, localhost, web domains)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Load category database
const dataFilePath = path.join(__dirname, 'data', 'categories.json');
let categoriesData = [];

try {
  const raw = fs.readFileSync(dataFilePath, 'utf8');
  categoriesData = JSON.parse(raw);
  console.log(`[INFO] Loaded ${categoriesData.length} categories successfully.`);
} catch (err) {
  console.error('[ERROR] Failed to load categories.json:', err.message);
  process.exit(1);
}

// In-memory active match sessions store
// Key: matchToken -> Value: { secretWord, imposterWord, categoryId, createdAt }
const activeMatches = new Map();

// Periodic sweep to clean up expired sessions (older than 2 hours)
setInterval(() => {
  const now = Date.now();
  const maxAgeMs = 2 * 60 * 60 * 1000;
  for (const [token, match] of activeMatches.entries()) {
    if (now - match.createdAt > maxAgeMs) {
      activeMatches.delete(token);
    }
  }
}, 10 * 60 * 1000);

// Helper: Normalize Vietnamese strings for robust guess comparison
function normalizeVietnamese(str) {
  if (!str) return '';
  let res = str.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '');
  
  // Strip common Vietnamese classifiers/articles
  res = res.replace(/^(con|cay|cai|chiec|mon|qua|bo|chu)\s*/i, '').trim();
  return res;
}

// ========================================================
// API ROUTES
// ========================================================

// Health check
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    categoriesCount: categoriesData.length,
    activeMatchesCount: activeMatches.size,
    version: '1.0.0'
  });
});

// Root fallback / health
app.get('/', (req, res) => {
  res.json({
    name: 'Faker / IYKYK Game Secure API',
    status: 'running',
    docs: '/api/v1/health'
  });
});

// 1. GET /api/v1/categories - Returns category metadata WITHOUT leaking words
app.get('/api/v1/categories', (req, res) => {
  const safeCategories = categoriesData.map(cat => ({
    id: cat.id,
    name_vi: cat.name_vi,
    icon: cat.icon,
    wordCount: Array.isArray(cat.words) ? cat.words.length : 0
  }));
  res.json({ success: true, categories: safeCategories });
});

// 2. POST /api/v1/match/start - Start a match and distribute ONLY the needed word pair
app.post('/api/v1/match/start', (req, res) => {
  try {
    const { categoryId } = req.body || {};

    let targetCategory = null;
    if (categoryId && categoryId !== 'all') {
      targetCategory = categoriesData.find(c => c.id === categoryId);
    }

    if (!targetCategory) {
      // Pick random category if not specified or 'all'
      const randomIndex = Math.floor(Math.random() * categoriesData.length);
      targetCategory = categoriesData[randomIndex];
    }

    if (!targetCategory || !targetCategory.words || targetCategory.words.length === 0) {
      return res.status(404).json({ success: false, message: 'Category not found or empty' });
    }

    // Pick random word pair from chosen category
    const wordIndex = Math.floor(Math.random() * targetCategory.words.length);
    const pair = targetCategory.words[wordIndex];

    const civilianWord = pair.civilian || pair.vi || pair;
    const imposterWord = pair.imposter || '';

    // Generate secure match token
    const matchToken = 'mtk_' + crypto.randomBytes(16).toString('hex');

    // Store active match state on server
    activeMatches.set(matchToken, {
      secretWord: civilianWord,
      imposterWord: imposterWord,
      categoryId: targetCategory.id,
      categoryName: targetCategory.name_vi,
      createdAt: Date.now()
    });

    res.json({
      success: true,
      matchToken,
      category: {
        id: targetCategory.id,
        name_vi: targetCategory.name_vi,
        icon: targetCategory.icon
      },
      words: {
        civilian: civilianWord,
        imposter: imposterWord
      }
    });
  } catch (err) {
    console.error('[ERROR] /api/v1/match/start:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// 3. POST /api/v1/match/verify-guess - Validate Comeback guess without leaking target word
app.post('/api/v1/match/verify-guess', (req, res) => {
  try {
    const { matchToken, guessText } = req.body || {};

    if (!matchToken || !activeMatches.has(matchToken)) {
      return res.status(404).json({
        success: false,
        message: 'Match session not found or expired',
        isCorrect: false
      });
    }

    const session = activeMatches.get(matchToken);
    const targetWord = session.secretWord || '';
    const cleanGuess = (guessText || '').trim();

    const normTarget = normalizeVietnamese(targetWord);
    const normGuess = normalizeVietnamese(cleanGuess);

    const isMatch = normGuess.length > 0 && (
      normTarget === normGuess ||
      normTarget.includes(normGuess) && normGuess.length >= 3 ||
      normGuess.includes(normTarget)
    );

    // After guess verification, match session can be closed or preserved
    res.json({
      success: true,
      isCorrect: isMatch,
      penalty: isMatch ? 0 : 10
      // CRITICAL: We NEVER return the secretWord here!
    });
  } catch (err) {
    console.error('[ERROR] /api/v1/match/verify-guess:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`[FAKER-BACKEND] Server listening on http://localhost:${PORT}`);
  console.log(`[FAKER-BACKEND] Health endpoint: http://localhost:${PORT}/api/v1/health`);
});
