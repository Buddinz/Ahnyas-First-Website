/* Pasta Palace Crew - Multi-Page Kid-Friendly Website
   =====================================================
   Features:
   - Page detection and routing
   - Random drill/tip generators for sports
   - Pasta mood randomizer
   - Practice counter with badges (localStorage)
   - 60-second breathing timer with audio guidance
   - Sleep routine checklist (localStorage)
   =====================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page || 'home';
  
  // Initialize page-specific features
  if (currentPage === 'sports') {
    initSportsPage();
  } else if (currentPage === 'pasta') {
    initPastaPage();
  } else if (currentPage === 'chill') {
    initChillPage();
  }

  // Initialize shared features (all pages)
  initPracticeCounterDisplay();
  highlightCurrentNav();
});

/* =====================================================
   SHARED UTILITIES
   ===================================================== */

function highlightCurrentNav() {
  const currentPage = document.body.dataset.page;
  const navButtons = document.querySelectorAll('.nav-btn');
  
  navButtons.forEach(btn => {
    const btnPage = btn.dataset.page || btn.getAttribute('href').replace('.html', '').replace('/', '');
    if (btnPage === currentPage) {
      btn.style.borderColor = 'var(--accent)';
      btn.style.backgroundColor = 'rgba(246, 201, 77, 0.2)';
    }
  });
}

function initPracticeCounterDisplay() {
  // Update practice count on all pages that display it
  const practiceCountElements = document.querySelectorAll('[id^="practice-count"]');
  const STORAGE_KEY = 'pasta_practice_count_v1';
  
  function updateBadgeDisplay() {
    const count = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
    let badgeText = 'No badges yet — keep practicing!';
    
    if (count >= 7) {
      badgeText = '🏆 Pirate Captain Badge (7+ practices)';
    } else if (count >= 3) {
      badgeText = '🎖️ First Mate Badge (3+ practices)';
    } else if (count >= 1) {
      badgeText = '⭐ Apprentice Badge (1 practice)';
    }
    
    // Update all badge display areas
    const badgeAreas = document.querySelectorAll('.badge-area');
    badgeAreas.forEach(area => {
      area.textContent = badgeText;
    });
  }
  
  // Update count display on all pages
  practiceCountElements.forEach(el => {
    const count = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
    el.textContent = count;
  });
  
  updateBadgeDisplay();
}

/* =====================================================
   SPORTS PAGE
   ===================================================== */

function initSportsPage() {
  const STORAGE_KEY = 'pasta_practice_count_v1';
  
  // Drill arrays for each sport
  const drills = {
    volleyball: [
      '🏐 Wall 3-pass: Bump to yourself 10 times without dropping it',
      '🏐 Underhand serve: Practice 5 safe serves into a target area',
      '🏐 Partner toss & bump: 2 minutes of back-and-forth bumps',
      '🏐 Footwork drill: Move your feet 10 times to reach the ball',
      '🏐 High catch: Catch tosses above your head 8 times',
      '🏐 Wrist flick: Practice quick wrist snaps 15 times'
    ],
    basketball: [
      '🏀 Figure-8 dribble: Around cones or objects for 30 seconds',
      '🏀 Spot shot: Attempt 5 shots from the same spot (3-foot distance)',
      '🏀 Bounce-pass practice: Pass against a wall or with a partner for 2 minutes',
      '🏀 Dribble stops: Practice controlled stops while dribbling 10 times',
      '🏀 Layup approach: Walk through layup footwork 5 times on each side',
      '🏀 Around-the-world: Shoot from multiple spots around the key'
    ],
    swimming: [
      '🏊 Kickboard kicks: Down and back, focusing on hip motion (2 minutes)',
      '🏊 Floating practice: Work on body position and breathing (30 seconds)',
      '🏊 Side-kick length: One length on each side, keeping body straight',
      '🏊 Flutter-kick drill: 25 meters focusing on smooth, steady kicks',
      '🏊 Treading water: Practice staying afloat with movement (1 minute)',
      '🏊 Breathe-and-glide: Push off wall, glide, take a breath, repeat'
    ]
  };
  
  // Try this buttons - random drill generator
  const tryButtons = document.querySelectorAll('.try-btn');
  tryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sport = btn.dataset.sport;
      const drillList = drills[sport] || ['Try some fun movement!'];
      const randomDrill = drillList[Math.floor(Math.random() * drillList.length)];
      
      const reveal = btn.parentElement.querySelector('.drill-reveal');
      if (reveal) {
        reveal.textContent = randomDrill;
        reveal.setAttribute('aria-hidden', 'false');
        reveal.setAttribute('role', 'status');
      }
    });
  });
  
  // Practice button
  const practiceBtn = document.getElementById('practice-btn');
  if (practiceBtn) {
    practiceBtn.addEventListener('click', () => {
      let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
      count++;
      localStorage.setItem(STORAGE_KEY, String(count));
      
      // Update all displays
      document.querySelectorAll('[id^="practice-count"]').forEach(el => {
        el.textContent = count;
      });
      
      initPracticeCounterDisplay(); // Update badges
      
      // Feedback animation
      const originalText = practiceBtn.textContent;
      practiceBtn.textContent = '✅ Great job!';
      setTimeout(() => {
        practiceBtn.textContent = originalText;
      }, 1500);
    });
  }
}

/* =====================================================
   PASTA PAGE
   ===================================================== */

function initPastaPage() {
  const PASTA_POINTS_KEY = 'pasta_points_v1';
  const PASTA_MOOD_KEY = 'pasta_mood_v1';
  
  const moods = [
    '🧀 Cheesy Champion',
    '🍅 Tomato Sunny',
    '🌿 Pesto Pirate',
    '🧈 Bubbly Butter',
    '🧄 Garlic Glow',
    '🍚 Creamy Dreams',
    '🌶️ Spicy Spirit',
    '🍋 Lemon Lightning'
  ];
  
  // Pasta mood randomizer
  const pastaBtn = document.getElementById('pasta-btn');
  const pastaMood = document.getElementById('pasta-mood');
  
  if (pastaBtn && pastaMood) {
    pastaBtn.addEventListener('click', () => {
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      pastaMood.textContent = randomMood;
      localStorage.setItem(PASTA_MOOD_KEY, randomMood);
    });
    
    // Load saved mood
    const savedMood = localStorage.getItem(PASTA_MOOD_KEY);
    if (savedMood) {
      pastaMood.textContent = savedMood;
    }
  }
  
  // Pasta points tracker
  const addPointBtn = document.getElementById('add-pasta-point');
  const resetPointBtn = document.getElementById('reset-pasta-points');
  const pointsDisplay = document.getElementById('pasta-points');
  const badgesDisplay = document.querySelector('.pasta-badges');
  
  function updatePointsDisplay() {
    const points = parseInt(localStorage.getItem(PASTA_POINTS_KEY) || '0');
    pointsDisplay.textContent = points;
    
    let badgesHtml = '';
    if (points >= 5) badgesHtml += '🍝 ';
    if (points >= 10) badgesHtml += '🍝🍝 ';
    if (points >= 20) badgesHtml += '🍝🍝🍝 ';
    
    if (badgesHtml) {
      badgesDisplay.innerHTML = `<p><strong>Your Badges:</strong> ${badgesHtml}</p>`;
    } else {
      badgesDisplay.innerHTML = '<p class="badge-hint">Reach 5, 10, and 20 points to unlock badges!</p>';
    }
  }
  
  if (addPointBtn) {
    addPointBtn.addEventListener('click', () => {
      let points = parseInt(localStorage.getItem(PASTA_POINTS_KEY) || '0');
      points++;
      localStorage.setItem(PASTA_POINTS_KEY, String(points));
      updatePointsDisplay();
      
      // Feedback
      const originalText = addPointBtn.textContent;
      addPointBtn.textContent = '🎉 +1 Point!';
      setTimeout(() => {
        addPointBtn.textContent = originalText;
      }, 1200);
    });
  }
  
  if (resetPointBtn) {
    resetPointBtn.addEventListener('click', () => {
      localStorage.setItem(PASTA_POINTS_KEY, '0');
      updatePointsDisplay();
      resetPointBtn.textContent = 'Reset! ✓';
      setTimeout(() => {
        resetPointBtn.textContent = 'Reset Points';
      }, 800);
    });
  }
  
  // Load initial points
  updatePointsDisplay();
}

/* =====================================================
   CHILL ZONE PAGE
   ===================================================== */

function initChillPage() {
  const CHECKLIST_KEY = 'sleep_checklist_v1';
  let timerInterval = null;
  let timerRunning = false;
  let timeLeft = 60;
  
  // Breathing timer setup
  const startBtn = document.getElementById('start-timer');
  const pauseBtn = document.getElementById('pause-timer');
  const resetBtn = document.getElementById('reset-timer');
  const countdownDisplay = document.getElementById('countdown');
  const breathStatus = document.getElementById('breath-status');
  const breathVisual = document.getElementById('breath-visual');
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  function updateBreathStatus() {
    const cycle = timeLeft % 8;
    if (cycle >= 6) {
      breathStatus.textContent = '✨ Exhale slowly...';
    } else if (cycle >= 4) {
      breathStatus.textContent = '⏸️ Hold your breath...';
    } else if (cycle >= 2) {
      breathStatus.textContent = '🌬️ Inhale slowly...';
    } else {
      breathStatus.textContent = '✨ Ready to breathe?';
    }
  }
  
  function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = true;
    
    if (breathVisual) {
      breathVisual.classList.add('breathing');
    }
    
    timerInterval = setInterval(() => {
      timeLeft--;
      countdownDisplay.textContent = formatTime(timeLeft);
      updateBreathStatus();
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = false;
        if (breathVisual) {
          breathVisual.classList.remove('breathing');
        }
        breathStatus.textContent = '✨ Great job! You completed the breathing exercise!';
        countdownDisplay.textContent = '00:00';
      }
    }, 1000);
  }
  
  function pauseTimer() {
    if (!timerRunning) return;
    
    clearInterval(timerInterval);
    timerRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
    
    if (breathVisual) {
      breathVisual.classList.remove('breathing');
    }
    
    breathStatus.textContent = '⏸️ Paused. Press Start to continue.';
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timeLeft = 60;
    countdownDisplay.textContent = formatTime(60);
    breathStatus.textContent = 'Ready?';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
    
    if (breathVisual) {
      breathVisual.classList.remove('breathing');
    }
  }
  
  // Event listeners for timer
  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);
  
  // Sleep routine checklist with localStorage
  const checklistInputs = document.querySelectorAll('.checklist-input');
  const resetChecklistBtn = document.getElementById('reset-checklist');
  
  function loadChecklistState() {
    checklistInputs.forEach(input => {
      const key = input.dataset.key;
      const saved = localStorage.getItem(`${CHECKLIST_KEY}_${key}`);
      if (saved === 'true') {
        input.checked = true;
      }
    });
  }
  
  function saveChecklistItem(key, checked) {
    localStorage.setItem(`${CHECKLIST_KEY}_${key}`, checked ? 'true' : 'false');
  }
  
  checklistInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const key = e.target.dataset.key;
      saveChecklistItem(key, e.target.checked);
    });
  });
  
  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      checklistInputs.forEach(input => {
        input.checked = false;
        saveChecklistItem(input.dataset.key, false);
      });
      resetChecklistBtn.textContent = 'Cleared! ✓';
      setTimeout(() => {
        resetChecklistBtn.textContent = 'Clear Checklist';
      }, 1000);
    });
  }
  
  // Load checklist on page load
  loadChecklistState();
}


  // 60s breathing timer
  const startBtn = document.getElementById('start-timer');
  const stopBtn = document.getElementById('stop-timer');
  const countdownEl = document.getElementById('countdown');
  let timer = null; let timeLeft = 60;

  function updateCountdown(){ countdownEl.textContent = String(timeLeft); }

  startBtn.addEventListener('click', ()=>{
    if(timer) return; // already running
    timeLeft = 60; updateCountdown();
    // start breathing visual
    const breath = document.getElementById('breath-visual');
    if(breath) breath.classList.add('breathing');
    timer = setInterval(()=>{
      timeLeft -= 1; updateCountdown();
      if(timeLeft<=0){ clearInterval(timer); timer=null; countdownEl.textContent='Done!'; setTimeout(()=>{countdownEl.textContent='60'},1500)}
    },1000);
  });
  stopBtn.addEventListener('click', ()=>{ if(timer){clearInterval(timer); timer=null; countdownEl.textContent='Stopped'}});

  // Stop breathing visual when timer stops or ends
  const originalStop = stopBtn.onclick;
  const stopBreathing = ()=>{ const breath = document.getElementById('breath-visual'); if(breath){breath.classList.remove('breathing')} };
  stopBtn.addEventListener('click', ()=> stopBreathing());
  // ensure breathing stops when countdown finishes
  const originalIntervalWrapper = setInterval; // noop placeholder

  // Keyboard support: allow number keys 1-4 to jump to panels
  document.addEventListener('keydown', (e)=>{
    if(e.key>='1' && e.key<='4'){
      const idx = Number(e.key)-1;
      if(navButtons[idx]) navButtons[idx].click();
    }
  });
});
