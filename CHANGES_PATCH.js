// =====================================================
// NAVEED PORTFOLIO - AUTO PATCH SCRIPT
// Yeh script index.html mein paste karo </body> se pehle
// =====================================================

(function () {

  // ── 1. TITLE TAG ──────────────────────────────────
  document.title = "Naveed Abbas | BS Mathematician | Data Analyst";

  // ── 2. HERO SUBTITLE ──────────────────────────────
  // "BS Mathematics Student" ko dhundo aur badlo
  document.querySelectorAll('*').forEach(function (el) {
    if (el.childNodes) {
      el.childNodes.forEach(function (node) {
        if (node.nodeType === 3) { // text node
          if (node.textContent.includes('BS Mathematics Student')) {
            node.textContent = node.textContent.replace(
              'BS Mathematics Student',
              'BS Mathematician / Data Analyst'
            );
          }
        }
      });
    }
  });

  // ── 3. EDUCATION SECTION ──────────────────────────
  // Year update: 2022-2025 → 2022-2026
  document.querySelectorAll('*').forEach(function (el) {
    if (el.childNodes) {
      el.childNodes.forEach(function (node) {
        if (node.nodeType === 3) {
          // Update years
          if (node.textContent.match(/2022\s*[-–]\s*2025/)) {
            node.textContent = node.textContent.replace(
              /2022\s*[-–]\s*2025/g, '2022 - 2026'
            );
          }
          // Remove CGPA line
          if (node.textContent.match(/CGPA\s*:/i)) {
            node.textContent = '';
          }
        }
      });
    }
  });

  // Also handle elements that might contain CGPA
  document.querySelectorAll('p, span, li, td, div').forEach(function (el) {
    if (el.children.length === 0 && el.textContent.match(/^CGPA\s*:/i)) {
      el.style.display = 'none';
    }
  });

  // ── 4. IMAGE MODAL POPUP ───────────────────────────
  // Create modal HTML
  var modalHTML = `
    <div id="navModal" style="
      display:none; position:fixed; top:0; left:0; width:100%; height:100%;
      background:rgba(0,0,0,0.88); z-index:999999;
      justify-content:center; align-items:center; padding:20px; box-sizing:border-box;">
      <div style="position:relative; max-width:850px; width:100%; animation: fadeIn 0.3s ease;">
        <button onclick="closeNavModal()" style="
          position:absolute; top:-50px; right:0; background:rgba(255,255,255,0.15);
          border:2px solid white; color:white; font-size:1.8rem; cursor:pointer;
          border-radius:50%; width:44px; height:44px; line-height:1;
          display:flex; align-items:center; justify-content:center;">✕</button>
        <img id="navModalImg" src="" alt="Project" style="
          width:100%; max-height:82vh; object-fit:contain;
          border-radius:12px; box-shadow:0 25px 70px rgba(0,0,0,0.6);">
        <p id="navModalTitle" style="
          text-align:center; color:white; margin-top:14px;
          font-size:1.2rem; font-weight:600; letter-spacing:0.3px;"></p>
        <p style="text-align:center; color:rgba(255,255,255,0.5); font-size:0.85rem; margin-top:4px;">
          ESC ya bahar click kar ke band karo
        </p>
      </div>
    </div>
    <style>
      @keyframes fadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
      .project-card { cursor: pointer !important; transition: transform 0.2s, box-shadow 0.2s !important; }
      .project-card:hover { transform: translateY(-4px) !important; box-shadow: 0 12px 40px rgba(0,0,0,0.25) !important; }
    </style>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Modal functions
  window.openNavModal = function (src, title) {
    document.getElementById('navModalImg').src = src;
    document.getElementById('navModalTitle').textContent = title;
    var m = document.getElementById('navModal');
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closeNavModal = function () {
    document.getElementById('navModal').style.display = 'none';
    document.body.style.overflow = '';
  };

  // Close on background click
  document.getElementById('navModal').addEventListener('click', function (e) {
    if (e.target === this) closeNavModal();
  });

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNavModal();
  });

  // ── 5. PROJECT CARDS CLICK ────────────────────────
  var projects = [
    {
      img: 'business_expo.png',
      title: 'Business Startup Expo — CASPAM BZU (January 2024)'
    },
    {
      img: 'cr_award.png',
      title: 'CR Appreciation Award — CASPAM BZU (May 2023)'
    },
    {
      img: 'graph_theory.png',
      title: 'Graph Theory in Brain Controlled AI Networks'
    },
    {
      img: 'brain_tumor.jpeg',
      title: 'Computational Study of Brain Tumor Drugs Using Topological Indices (FYP 2026)'
    }
  ];

  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function (card, i) {
    if (projects[i]) {
      card.addEventListener('click', function (e) {
        e.stopPropagation();
        openNavModal(projects[i].img, projects[i].title);
      });
    }
  });

  console.log('✅ Naveed Portfolio Patch Applied Successfully!');
  console.log('Cards found:', cards.length);

})();
