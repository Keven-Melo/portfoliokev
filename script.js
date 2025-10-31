(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  function setTheme(name){
    if(name === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', name);
    updateIcon(name);
  }

  function updateIcon(name){
    if(!icon) return;
    if(name === 'dark'){
      // sun icon for dark -> means click to go light
      icon.innerHTML = '<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.66-3.54l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM17.24 4.84l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" fill="currentColor"/>';
    } else {
      // moon icon for light -> click to go dark
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>';
    }
  }

  toggle.addEventListener('click', ()=>{
    const current = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Init from preference or system
  const saved = localStorage.getItem('theme');
  if(saved) setTheme(saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  else setTheme('light');
})();