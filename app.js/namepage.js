// namepage.js
// Dynamically loads name details based on URL id and selected language

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameId = urlParams.get('id');
  const langBtn = document.getElementById('toggleLang');
  const themeBtn = document.getElementById('toggleTheme');
  const logo = document.querySelector('.logo');
  let currentLang = localStorage.getItem('lang') || 'en';
  let nameData = null;

  // Fetch names.json and render details
  fetch('names.json')
    .then(res => res.json())
    .then(data => {
      nameData = data.find(n => n.id === nameId);
      if (!nameData) {
        renderNotFound();
        return;
      }
      renderDetails();
    });

  // Render details
  function renderDetails() {
    // Name and tagline
    document.querySelector('h1').textContent = currentLang === 'en' ? nameData.name_en : nameData.name_ur;
    document.querySelector('.tagline').textContent = currentLang === 'en' ? nameData.meaning_en : nameData.meaning_ur;
    // Title
    document.title = currentLang === 'en'
      ? `${nameData.name_en} - Islamic Name`
      : `${nameData.name_ur} - اسلامی نام`;
    // Meaning box
    document.getElementById('meaning').textContent = currentLang === 'en'
      ? (nameData.details_en || nameData.meaning_en)
      : (nameData.details_ur || nameData.meaning_ur);
    // Optional fields (if present in JSON)
    document.getElementById('arabic-spelling').textContent = nameData.arabic_spelling || '';
    document.getElementById('pronunciation').textContent = currentLang === 'en' ? (nameData.pronunciation_en || '') : (nameData.pronunciation_ur || '');
    document.getElementById('gender').textContent = currentLang === 'en' ? (nameData.gender_en || '') : (nameData.gender_ur || '');
    document.getElementById('origin').textContent = currentLang === 'en' ? (nameData.origin_en || '') : (nameData.origin_ur || '');
    document.getElementById('religion').textContent = currentLang === 'en' ? (nameData.religion_en || '') : (nameData.religion_ur || '');
    document.getElementById('quran').textContent = currentLang === 'en' ? (nameData.quran_en || '') : (nameData.quran_ur || '');
    document.getElementById('related').textContent = currentLang === 'en' ? (nameData.related_en || '') : (nameData.related_ur || '');
    // Back button
    const backBtn = document.querySelector('.back-btn');
    backBtn.textContent = currentLang === 'en' ? '← Back to Names List' : '← ناموں کی فہرست پر واپس جائیں';
    // Footer
    const footerP = document.querySelector('footer p');
    footerP.textContent = currentLang === 'en' ? footerP.getAttribute('data-en') : footerP.getAttribute('data-ur');
    // Language button
    langBtn.textContent = currentLang === 'en' ? 'اردو' : 'English';
    // Logo
    logo.textContent = currentLang === 'en' ? logo.getAttribute('data-en') : logo.getAttribute('data-ur');
    // Direction
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'ur';
    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
  }

  // Not found
  function renderNotFound() {
    document.querySelector('.container').innerHTML = '<h2>Name not found</h2>';
  }

  // Language toggle
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    localStorage.setItem('lang', currentLang);
    if (nameData) renderDetails();
  });

  // Theme toggle
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeBtn.textContent = currentLang === 'en' ? '☀' : 'سفید';
    } else {
      localStorage.setItem('theme', 'light');
      themeBtn.textContent = currentLang === 'en' ? '🌙' : 'ڈارک موڈ تبدیل کریں';
    }
  });

  // On page load, set language and theme
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'اردو' : 'English';
  }
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = currentLang === 'en' ? '☀' : 'سفید';
  } else {
    themeBtn.textContent = currentLang === 'en' ? '🌙' : 'ڈارک موڈ تبدیل کریں';
  }
});