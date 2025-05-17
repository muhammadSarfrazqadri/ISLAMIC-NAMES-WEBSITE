document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const nameCards = document.querySelectorAll(".name-card");
  const toggleBtn = document.getElementById("toggleLang");
  const logo = document.querySelector(".logo");
  const footerText = document.querySelector("footer p");
  
  // Search functionality
  searchInput.addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    nameCards.forEach(card => {
      const name = card.querySelector(".name").textContent.toLowerCase();
      const meaning = card.querySelector(".meaning").textContent.toLowerCase();
      card.style.display = (name.includes(filter) || meaning.includes(filter)) ? "block" : "none";
    });
  });
  
  // Language toggle
  let isEnglish = true;
  
  toggleBtn.addEventListener("click", function() {
    isEnglish = !isEnglish;
    toggleBtn.textContent = isEnglish ? "اردو" : "English";
    
    // Update logo text
    logo.textContent = isEnglish ? logo.getAttribute("data-en") : logo.getAttribute("data-ur");
    
    // Update footer text
    footerText.textContent = isEnglish ? footerText.getAttribute("data-en") : footerText.getAttribute("data-ur");
    
    // Update name cards
    nameCards.forEach(card => {
      const name = card.querySelector(".name");
      const meaning = card.querySelector(".meaning");
      const detailsBtn = card.querySelector(".details-btn");
      
      // Update name and meaning
      name.textContent = isEnglish ? name.getAttribute("data-en") : name.getAttribute("data-ur");
      meaning.textContent = isEnglish ? meaning.getAttribute("data-en") : meaning.getAttribute("data-ur");
      
      // Update details button text and href
      detailsBtn.textContent = isEnglish ? detailsBtn.getAttribute("data-en-text") : detailsBtn.getAttribute("data-ur-text");
      detailsBtn.setAttribute("href", isEnglish ? detailsBtn.getAttribute("data-en") : detailsBtn.getAttribute("data-ur"));
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const nameCards = document.querySelectorAll(".name-card");
  const toggleLangBtn = document.getElementById("toggleLang");
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const logo = document.querySelector(".logo");
  const footerText = document.querySelector("footer p");

  // Retrieve saved language and theme from localStorage
  let isEnglish = localStorage.getItem("lang") === "en" || !localStorage.getItem("lang");
  let isDarkMode = localStorage.getItem("theme") === "dark";

  // Apply saved language on page load
  function applyLanguage() {
    toggleLangBtn.textContent = isEnglish ? "اردو" : "English";
    logo.textContent = isEnglish ? logo.getAttribute("data-en") : logo.getAttribute("data-ur");
    footerText.textContent = isEnglish ? footerText.getAttribute("data-en") : footerText.getAttribute("data-ur");

    nameCards.forEach(card => {
      const name = card.querySelector(".name");
      const meaning = card.querySelector(".meaning");
      const detailsBtn = card.querySelector(".details-btn");

      name.textContent = isEnglish ? name.getAttribute("data-en") : name.getAttribute("data-ur");
      meaning.textContent = isEnglish ? meaning.getAttribute("data-en") : meaning.getAttribute("data-ur");

      detailsBtn.textContent = isEnglish ? detailsBtn.getAttribute("data-en-text") : detailsBtn.getAttribute("data-ur-text");
      detailsBtn.setAttribute("href", isEnglish ? detailsBtn.getAttribute("data-en") : detailsBtn.getAttribute("data-ur"));
    });
  }

  // Apply saved theme on page load
  function applyTheme() {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      toggleThemeBtn.textContent = "☀"; // Sun icon for light mode toggle
    } else {
      document.body.classList.remove("dark-mode");
      toggleThemeBtn.textContent = "🌙"; // Moon icon for dark mode toggle
    }
  }

  // Initialize language and theme
  applyLanguage();
  applyTheme();

  // Search functionality
  searchInput.addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    nameCards.forEach(card => {
      const name = card.querySelector(".name").textContent.toLowerCase();
      const meaning = card.querySelector(".meaning").textContent.toLowerCase();
      card.style.display = (name.includes(filter) || meaning.includes(filter)) ? "block" : "none";
    });
  });

  // Language toggle event
  toggleLangBtn.addEventListener("click", function() {
    isEnglish = !isEnglish;
    localStorage.setItem("lang", isEnglish ? "en" : "ur");
    applyLanguage();
  });

  // Theme toggle event
  toggleThemeBtn.addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    applyTheme();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("toggleLang");
  const darkModeBtn = document.getElementById("toggleDarkMode");
  const logo = document.querySelector(".logo");
  const footerText = document.querySelector("footer p");

  const nameCards = document.querySelectorAll(".name-card");

  // Get saved language preference from localStorage
  let isEnglish = localStorage.getItem("lang") === "en" ? true : false;

  function updateLanguage() {
    toggleBtn.textContent = isEnglish ? "اردو" : "English";
    logo.textContent = isEnglish ? logo.getAttribute("data-en") : logo.getAttribute("data-ur");
    footerText.textContent = isEnglish ? footerText.getAttribute("data-en") : footerText.getAttribute("data-ur");

    nameCards.forEach(card => {
      const name = card.querySelector(".name");
      const meaning = card.querySelector(".meaning");
      const btn = card.querySelector(".details-btn");

      if (name && name.hasAttribute("data-en") && name.hasAttribute("data-ur")) {
        name.textContent = isEnglish ? name.getAttribute("data-en") : name.getAttribute("data-ur");
      }
      if (meaning && meaning.hasAttribute("data-en") && meaning.hasAttribute("data-ur")) {
        meaning.textContent = isEnglish ? meaning.getAttribute("data-en") : meaning.getAttribute("data-ur");
      }
      if (btn && btn.hasAttribute("data-en") && btn.hasAttribute("data-ur")) {
        btn.textContent = isEnglish ? btn.getAttribute("data-en") : btn.getAttribute("data-ur");
      }
    });
  }

  updateLanguage(); // run on page load

  toggleBtn.addEventListener("click", function() {
    isEnglish = !isEnglish;
    localStorage.setItem("lang", isEnglish ? "en" : "ur");
    updateLanguage();
  });

  // Dark mode toggle
  darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, check saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
});

// Scroll animation using Intersection Observer
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

scrollElements.forEach(el => observer.observe(el));

// Fetch names from names.json and render them dynamically
// Also supports search functionality

document.addEventListener('DOMContentLoaded', () => {
  const namesSection = document.querySelector('.names-section');
  const searchInput = document.getElementById('searchInput');
  const toggleLangBtn = document.getElementById('toggleLang');
  let namesData = [];
  let currentLang = localStorage.getItem('lang') || 'en';

  // Set initial language on page load
  setLanguage(currentLang);

  // Fetch names from JSON
  fetch('json/names.json')
    .then(response => response.json())
    .then(data => {
      namesData = data;
      renderNames(namesData);
    });

  // Render names
  let namesToShow = 15;

  function renderNames(names) {
    namesSection.innerHTML = '';
    names.slice(0, namesToShow).forEach(name => {
      namesSection.innerHTML += `
        <div class="name-card">
          <button class="accordion-toggle">
            <span class="name" data-en="${name.name_en}" data-ur="${name.name_ur}">${localStorage.getItem('lang') === 'ur' ? name.name_ur : name.name_en}</span>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
          <div class="accordion-content">
            <p class="meaning" data-en="${name.meaning_en}" data-ur="${name.meaning_ur}">${localStorage.getItem('lang') === 'ur' ? name.meaning_ur : name.meaning_en}</p>
            <a href="htmls/namepage.html?id=${name.id}" class="details-btn" data-en-text="More Details" data-ur-text="مزید تفصیل">${localStorage.getItem('lang') === 'ur' ? 'مزید تفصیل' : 'More Details'}</a>
          </div>
        </div>
      `;
    });
    addAccordionListeners();
    // Always show More Names button
    moreNamesBtn.style.display = names.length > namesToShow ? 'inline-block' : 'none';
    // Clear fromAllNamesList flag for home page
    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        localStorage.removeItem('fromAllNamesList');
      });
    });
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = namesData.filter(name =>
      name.name_en.toLowerCase().includes(query) ||
      name.name_ur.includes(query) ||
      name.meaning_en.toLowerCase().includes(query) ||
      name.meaning_ur.includes(query)
    );
    renderNames(filtered);
  });

  // Language toggle
  toggleLangBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
    renderNames(namesData);
  });

  function setLanguage(lang) {
    // Change logo
    const logo = document.querySelector('.logo');
    logo.textContent = lang === 'en' ? logo.getAttribute('data-en') : logo.getAttribute('data-ur');
    // Change search placeholder
    searchInput.placeholder = lang === 'en' ? 'Search Names' : 'نام تلاش کریں';
    // Change toggle button text
    toggleLangBtn.textContent = lang === 'en' ? 'اردو' : 'English';
    // Change footer
    const footerP = document.querySelector('footer p');
    footerP.textContent = lang === 'en' ? footerP.getAttribute('data-en') : footerP.getAttribute('data-ur');
  }
});

// Responsive Hamburger Menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dropdowns for Language and Theme
const langDropdown = document.querySelector('.lang-dropdown');
const themeDropdown = document.querySelector('.theme-dropdown');
langDropdown.addEventListener('mouseenter', () => {
  langDropdown.querySelector('.dropdown-content').style.display = 'block';
});
langDropdown.addEventListener('mouseleave', () => {
  langDropdown.querySelector('.dropdown-content').style.display = 'none';
});
themeDropdown.addEventListener('mouseenter', () => {
  themeDropdown.querySelector('.dropdown-content').style.display = 'block';
});
themeDropdown.addEventListener('mouseleave', () => {
  themeDropdown.querySelector('.dropdown-content').style.display = 'none';
});

// Language Option Buttons
const langOptions = document.querySelectorAll('.lang-option');
langOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    localStorage.setItem('lang', lang);
    setLanguage(lang);
    renderNames(namesData.slice(0, namesToShow));
  });
});

// Theme Option Buttons
const themeOptions = document.querySelectorAll('.theme-option');
themeOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});

// Accordion/Collapsible Names
function addAccordionListeners() {
  const cards = document.querySelectorAll('.name-card');
  cards.forEach(card => {
    const toggle = card.querySelector('.accordion-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        cards.forEach(c => {
          if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle('active');
      });
    }
  });
}

// Limit names to 15, show more on button click
let namesData = [];
let namesToShow = 15;
const namesSection = document.getElementById('namesSection');
const moreNamesBtn = document.getElementById('moreNamesBtn');

function renderNames(names) {
  namesSection.innerHTML = '';
  names.slice(0, namesToShow).forEach(name => {
    namesSection.innerHTML += `
      <div class="name-card">
        <button class="accordion-toggle">
          <span class="name" data-en="${name.name_en}" data-ur="${name.name_ur}">${localStorage.getItem('lang') === 'ur' ? name.name_ur : name.name_en}</span>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="accordion-content">
          <p class="meaning" data-en="${name.meaning_en}" data-ur="${name.meaning_ur}">${localStorage.getItem('lang') === 'ur' ? name.meaning_ur : name.meaning_en}</p>
          <a href="htmls/namepage.html?id=${name.id}" class="details-btn" data-en-text="More Details" data-ur-text="مزید تفصیل">${localStorage.getItem('lang') === 'ur' ? 'مزید تفصیل' : 'More Details'}</a>
        </div>
      </div>
    `;
  });
  addAccordionListeners();
  // Always show More Names button
  moreNamesBtn.style.display = names.length > namesToShow ? 'inline-block' : 'none';
  // Clear fromAllNamesList flag for home page
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      localStorage.removeItem('fromAllNamesList');
    });
  });
}

// Fetch names from JSON and render
fetch('json/names.json')
  .then(res => res.json())
  .then(data => {
    namesData = data;
    renderNames(namesData);
  });

// More Names Button
moreNamesBtn.addEventListener('click', () => {
  window.location.href = 'htmls/allnames.html';
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const filtered = namesData.filter(name =>
    name.name_en.toLowerCase().includes(filter) ||
    name.name_ur.includes(filter) ||
    name.meaning_en.toLowerCase().includes(filter) ||
    name.meaning_ur.includes(filter)
  );
  renderNames(filtered);
});

// Set language on page load
function setLanguage(lang) {
  // Change logo
  const logo = document.querySelector('.logo');
  logo.textContent = lang === 'en' ? logo.getAttribute('data-en') : logo.getAttribute('data-ur');
  // Change search placeholder
  searchInput.placeholder = lang === 'en' ? 'Search Names' : 'نام تلاش کریں';
  // Change footer
  const footerP = document.querySelector('footer p');
  footerP.textContent = lang === 'en' ? footerP.getAttribute('data-en') : footerP.getAttribute('data-ur');
  // Change More Names button
  moreNamesBtn.textContent = lang === 'en' ? 'More Names' : 'مزید نام';
}

// On page load, set theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}