// ==========================================
// GUESS THE IMPOSTER - WEB AUDIO SYNTHESIZER
// Zero external network lag, 100% offline & haptic
// ==========================================

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('gti_sound_muted') === 'true';
    this.volume = parseFloat(localStorage.getItem('gti_sound_volume') || '1.0');
    this.hapticEnabled = localStorage.getItem('gti_haptic') !== 'false';
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  get outputNode() {
    return this.masterGain || (this.ctx ? this.ctx.destination : null);
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    localStorage.setItem('gti_sound_volume', this.volume.toString());
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  setMuted(isMuted) {
    this.muted = !!isMuted;
    localStorage.setItem('gti_sound_muted', this.muted ? 'true' : 'false');
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  vibrate(pattern = 25) {
    if (!this.hapticEnabled) return;
    // 1. Capacitor Native Android Haptic Engine
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) {
      try {
        if (typeof pattern === 'number') {
          if (pattern <= 20) {
            window.Capacitor.Plugins.Haptics.impact({ style: 'LIGHT' });
          } else if (pattern <= 50) {
            window.Capacitor.Plugins.Haptics.impact({ style: 'MEDIUM' });
          } else {
            window.Capacitor.Plugins.Haptics.vibrate({ duration: pattern });
          }
        } else {
          window.Capacitor.Plugins.Haptics.vibrate({ duration: 40 });
        }
        return;
      } catch (e) {}
    }
    // 2. Standard Web Navigator Vibrate Fallback
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(15);

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    osc.connect(gain);
    gain.connect(this.outputNode);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  playToggle() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(20);

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.outputNode);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playFlipCard() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(40);

    const now = this.ctx.currentTime;
    // Whoosh / sweep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

    osc.connect(gain);
    gain.connect(this.outputNode);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(20);

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

    osc.connect(gain);
    gain.connect(this.outputNode);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  playEmergencyTick() {
    this.playTick();
  }

  playGavel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([60, 40, 90]);

    const now = this.ctx.currentTime;
    [180, 120].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.frequency.exponentialRampToValueAtTime(40, startTime + 0.18);

      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);

      osc.connect(gain);
      gain.connect(this.outputNode);

      osc.start(startTime);
      osc.stop(startTime + 0.18);
    });
  }

  playGong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([100, 50, 150]);

    const now = this.ctx.currentTime;
    [160, 240, 360].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.outputNode);

      osc.start(now);
      osc.stop(now + 1.2);
    });
  }

  playDramaticReveal() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([80, 50, 120]);

    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);

      osc.connect(gain);
      gain.connect(this.outputNode);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  playVote() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(30);

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(587.33, now + 0.1);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    osc.connect(gain);
    gain.connect(this.outputNode);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  playWinFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([60, 40, 60, 40, 150]);

    const now = this.ctx.currentTime;
    const melody = [
      { f: 392, d: 0.12 }, // G4
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.15 }, // E5
      { f: 783.99, d: 0.35 }  // G5
    ];

    let t = now;
    melody.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + note.d);

      osc.connect(gain);
      gain.connect(this.outputNode);

      osc.start(t);
      osc.stop(t + note.d);

      t += note.d * 0.9;
    });
  }
}

window.sound = new SoundManager();
const sound = window.sound;
