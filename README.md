# Pasta Palace Crew - Multi-Page Tablet-First Website

A kid-friendly, adventure-themed website featuring sports tips, pasta fun, and a chill zone for relaxation. Designed with kindness-first values and built entirely with vanilla HTML, CSS, and JavaScript—no external libraries or CDNs.

## 🌊 Features

### Pages
- **Home (index.html)** – Welcome hero with kindness code and adventure overview
- **Sports (sports.html)** – Volleyball, basketball, and swimming with tips, drills, and random drill generator
- **Pasta Palace (pasta.html)** – Pasta facts, mood randomizer, and points tracker
- **Chill Zone (chill.html)** – 60-second breathing timer and sleep routine checklist

### Key Functionality
✅ **Practice Badges** – Track sports practice sessions with 3 achievement levels (localStorage)  
✅ **Random Drill Generator** – Each sport has 6 unique beginner drills  
✅ **Pasta Mood Randomizer** – Fun mood selector for the day  
✅ **Pasta Points Counter** – Earn badges at 5, 10, and 20 points (localStorage)  
✅ **Breathing Timer** – 60-second guided breathing exercise with visual animation  
✅ **Sleep Checklist** – 6-item checklist that saves progress (localStorage)  
✅ **Responsive Design** – Tablet-first, scales beautifully to desktop  
✅ **Accessibility** – Semantic HTML, ARIA labels, large tap targets (48px+), high contrast

### Safety & Privacy
🔒 **No data collection** – No forms, login, chat, or personal info storage  
🔒 **Offline-friendly** – Static site, works without internet  
🔒 **Kid-safe** – No ads, tracking, or external resources  

---

## 📁 File Structure

```
ahnya-first-website/
├── index.html         # Home page
├── sports.html        # Sports tips and drills
├── pasta.html         # Pasta facts and points tracker
├── chill.html         # Breathing timer and sleep checklist
├── styles.css         # Shared responsive styling (100% custom)
├── script.js          # Page-aware JavaScript (localStorage, timers, etc.)
└── README.md          # This file
```

**No external files, fonts, or images** – Everything uses system fonts and CSS/emoji only.

---

## 🚀 How to Run Locally

### Quick Start
1. Open `index.html` in a web browser (double-click or drag & drop)
2. Click navigation buttons to explore each page
3. All data is saved automatically to your browser

### Via Local Server (Recommended for Testing)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Node.js http-server
npx http-server
```
Then visit `http://localhost:8000` in your browser.

---

## 🎨 Design & Theme

**Color Palette:**
- Deep Blue: `#0b3d91` (primary)
- Ocean Blue: `#2a77d0` (secondary)
- Sky Blue: `#8fc7ff` (background)
- Gold: `#f6c94d` (accents & badges)
- Coral: `#ff7b6b` (highlights)
- White: backgrounds & contrast

**Design Philosophy:**
- Ocean/adventure vibe (waves, compass, treasure map feel)
- Anime-inspired but no copyrighted characters
- Kind-first, playful tone
- Large, tappable buttons (48px minimum)
- High contrast for readability

---

## 💾 LocalStorage Keys

The site saves user progress locally with these keys:

| Key | Purpose | Value |
|-----|---------|-------|
| `pasta_practice_count_v1` | Sports practice count | Number (0+) |
| `pasta_points_v1` | Pasta points | Number (0+) |
| `pasta_mood_v1` | Today's pasta mood | String (mood name) |
| `sleep_checklist_v1_*` | Sleep checklist items | 'true' or 'false' per item |

**To reset all data:** Open DevTools (F12) → Console → `localStorage.clear()` → Refresh

---

## 📝 How to Add New Drills/Tips

### Adding Sports Drills
Edit `script.js`, find the `drills` object in `initSportsPage()`:

```javascript
const drills = {
  volleyball: [
    '🏐 Wall 3-pass: Bump to yourself 10 times without dropping it',
    '🏐 YOUR NEW DRILL HERE', // ← Add new drills as strings
    // ...
  ],
  // basketball & swimming arrays follow same pattern
};
```

Each sport can have unlimited drills. The random generator picks one each time the "Try this!" button is clicked.

### Adding Pasta Moods
Edit `script.js`, find the `moods` array in `initPastaPage()`:

```javascript
const moods = [
  '🧀 Cheesy Champion',
  '🍅 Tomato Sunny',
  '🌿 YOUR NEW MOOD HERE', // ← Add new moods
  // ...
];
```

### Adding Sleep Checklist Items
Edit `chill.html`, add a new checklist-item in the `.checklist` div:

```html
<div class="checklist-item">
  <input type="checkbox" id="check-NEWITEM" class="checklist-input" data-key="newitem">
  <label for="check-NEWITEM">Your new sleep tip here</label>
</div>
```
That's it! The JavaScript automatically saves progress for new items.

---

## 🎯 Key JavaScript Concepts

### Page Detection
Each page has `data-page="pagename"` on the `<body>` tag. Script detects it:
```javascript
const currentPage = document.body.dataset.page; // 'home', 'sports', 'pasta', or 'chill'
```

### LocalStorage Usage
```javascript
// Save
localStorage.setItem('myKey', 'myValue');

// Load
const value = localStorage.getItem('myKey') || 'default';

// Clear all
localStorage.clear();
```

### Page-Specific Initialization
Functions only run on relevant pages:
- `initSportsPage()` – Sports drills & practice counter
- `initPastaPage()` – Pasta mood & points
- `initChillPage()` – Breathing timer & checklist

### Breathing Timer Logic
- 60-second countdown
- Visual scale animation via CSS `@keyframes breath`
- Status text guides: "Inhale… Hold… Exhale…"
- Start/Pause/Reset controls

---

## ♿ Accessibility Features

✅ **Semantic HTML** – `<main>`, `<header>`, `<nav>`, `<footer>`, `<article>`  
✅ **ARIA Labels** – `aria-live`, `aria-atomic`, `role="status"` for dynamic content  
✅ **Focus Management** – All buttons have clear focus outlines  
✅ **Large Touch Targets** – 48px minimum for mobile/tablet  
✅ **Color Contrast** – WCAG AA compliant (4.5:1+ ratio)  
✅ **Keyboard Navigation** – All features work with Tab + Enter  
✅ **Reduced Motion** – Respects `prefers-reduced-motion` preference  

---

## 🔧 Browser Compatibility

Works on:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, etc.)

**Minimum requirements:** ES6 JavaScript, CSS Grid, CSS Custom Properties

---

## 🎓 Learning Resources

This site demonstrates:
- Multi-page HTML5 structure
- Responsive CSS Grid layouts
- Vanilla JavaScript (no frameworks)
- LocalStorage API for persistence
- ARIA for accessibility
- CSS animations & transitions
- Mobile-first design approach

Perfect for students learning web development!

---

## 🤝 Contributing Ideas

Want to enhance the site? Consider:
- ✨ More sports (tennis, soccer, gymnastics)
- ✨ Additional breathing exercises (5, 10, 15 minute options)
- ✨ More pasta facts or pasta culture sections
- ✨ Daily challenges or achievement streaks
- ✨ Multiplayer practice challenges (local leaderboard)

---

## 📋 Credits

Created for the **Pasta Palace Crew** – a kid-friendly, kind-first digital space built to inspire sports practice, creativity, and relaxation.

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Hosted as:** Static site (offline-compatible)  
**License:** Free to use and modify

---

## 🎉 Have Fun!

Explore, practice, earn badges, and enjoy the Pasta Palace Crew adventure! 🌊⚓️🍝

For bugs or questions, ask a trusted adult or teacher.

**Be kind. Stay safe online. Have fun! 💙**
