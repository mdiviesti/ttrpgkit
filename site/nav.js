class TTRPGNav {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createNavHTML();
        this.bindEvents();
    }

    createNavHTML() {
        const navHTML = `
<nav class="global-nav" aria-label="Main Navigation">
  <div class="nav-container">
    <a href="/" class="nav-brand">🎲 TTRPG Toolkit</a>
    <ul class="nav-sections">
      <li class="nav-section-item">
        <button class="nav-section-title" aria-haspopup="true" aria-expanded="false" tabindex="0">📚 Reference</button>
        <ul class="nav-dropdown" aria-label="Reference">
          <li><a href="/d0rfs/" class="nav-link">🪙 D0rfs</a></li>
          <li><a href="/5etools-2024/" class="nav-link" target="_blank">⚔️ 5eTools (Current)</a></li>
          <li><a href="/5etools-2014/" class="nav-link" target="_blank">📜 5eTools (Legacy)</a></li>
        </ul>
      </li>
      <li class="nav-section-item">
        <button class="nav-section-title" aria-haspopup="true" aria-expanded="false" tabindex="0">🌍 World Building</button>
        <ul class="nav-dropdown" aria-label="World Building">
          <li><a href="/background/" class="nav-link">🧬 Background Generator</a></li>
          <li><a href="/arcmage/" class="nav-link">⚔️ Arcmage Cards</a></li>
          <li><a href="/random/" class="nav-link">🎲 Random Generators</a></li>
        </ul>
      </li>
      <li class="nav-section-item">
        <button class="nav-section-title" aria-haspopup="true" aria-expanded="false" tabindex="0">📖 Story & Plot</button>
        <ul class="nav-dropdown" aria-label="Story & Plot">
          <li><a href="/plotdevice/" class="nav-link">🎲 Plot Device</a></li>
          <li><a href="/plottwist/" class="nav-link">🌀 Plot Twist</a></li>
          <li><a href="/sentence/" class="nav-link">📝 Sentence Generator</a></li>
        </ul>
      </li>
      <li class="nav-section-item">
        <button class="nav-section-title" aria-haspopup="true" aria-expanded="false" tabindex="0">🎭 Character & Chaos</button>
        <ul class="nav-dropdown" aria-label="Character & Chaos">
          <li><a href="/dreams/" class="nav-link">🌙 Dream Generator</a></li>
          <li><a href="/nlrme/" class="nav-link">🧨 Chaos Events</a></li>
        </ul>
      </li>
      <li class="nav-section-item">
        <button class="nav-section-title" aria-haspopup="true" aria-expanded="false" tabindex="0">🛠️ Utilities</button>
        <ul class="nav-dropdown" aria-label="Utilities">
          <li><a href="/ideaprompt/" class="nav-link">💡 Idea Prompt</a></li>
          <li><a href="/stl_viewer/" class="nav-link">🏗️ STL Viewer</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<style>
  .global-nav {
    position: relative;
    background: #fffbe6;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    font-family: inherit;
    font-size: 15px;
    z-index: 2000;
  }
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }
  .nav-brand {
    font-size: 1.2rem;
    font-weight: 600;
    color: #8B4513;
    text-decoration: none;
    margin-right: 1.2rem;
    letter-spacing: 0.5px;
  }
  .nav-sections {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-section-item {
    position: relative;
    background: none;
    z-index: 2100;
  }
  .nav-section-title {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #2C1810;
    padding: 0.45rem 0.7rem;
    border-radius: 5px;
    transition: background 0.18s, color 0.18s;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    background: none;
    border: none;
    text-decoration: none;
    position: relative;
    z-index: 2200;
  }
  .nav-section-title:hover, .nav-section-title:focus {
    background: #f5e6c8;
    color: #8B4513;
    outline: none;
  }
  .nav-dropdown {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% - 2px);
    min-width: 180px;
    background: #fffbe6;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    border-radius: 7px;
    padding: 0.3rem 0;
    z-index: 3000;
  }
  .nav-section-item:hover .nav-dropdown,
  .nav-section-item:focus-within .nav-dropdown {
    display: block;
  }
  .nav-link {
    display: block;
    padding: 0.45rem 1rem;
    color: #2C1810;
    text-decoration: none;
    font-size: 0.97rem;
    border-radius: 3px;
    transition: background 0.18s, color 0.18s;
    background: none;
    z-index: 3200;
  }
  .nav-link:hover {
    background: #f5e6c8;
    color: #8B4513;
  }
  .nav-dropdown li {
    list-style: none;
    background: none;
  }
  @media (max-width: 900px) {
    .nav-container {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0.5rem;
    }
    .nav-sections {
      gap: 0.3rem;
    }
    .nav-section-title {
      padding: 0.35rem 0.5rem;
      font-size: 0.97rem;
    }
  }
  @media (max-width: 600px) {
    .nav-brand {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
    .nav-sections {
      flex-direction: column;
      width: 100%;
    }
    .nav-section-item {
      width: 100%;
    }
    .nav-section-title {
      width: 100%;
      text-align: left;
    }
    .nav-dropdown {
      min-width: 100%;
      left: 0;
    }
  }
</style>
        `;

        // Insert navigation at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }

    bindEvents() {
        // No JS needed for CSS-only dropdowns
    }

    toggleDropdown() {
        // No longer needed
    }

    closeDropdown() {
        // No longer needed
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TTRPGNav();
});
