const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function saveTheme(){const light=document.body.classList.toggle('light');localStorage.setItem('worksuite-theme',light?'light':'dark')}
if(localStorage.getItem('worksuite-theme')==='light')document.body.classList.add('light');
