(function(){
 const KEY='worksuite-theme';
 const prefersDark=()=>matchMedia('(prefers-color-scheme: dark)').matches;
 function apply(t){document.documentElement.dataset.theme=t;localStorage.setItem(KEY,t);document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.textContent=t==='dark'?'☀️':'🌙')}
 window.WorkSuite={applyTheme:apply,toggleTheme(){apply((document.documentElement.dataset.theme||'light')==='dark'?'light':'dark')},money:n=>Number(n||0)};
 apply(localStorage.getItem(KEY)||(prefersDark()?'dark':'light'));
 document.addEventListener('click',e=>{if(e.target.closest('[data-theme-toggle]'))WorkSuite.toggleTheme()});
})();
