const skills = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript'
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.getElementById('html');
    const cssElement = document.getElementById('css');
    const jsElement = document.getElementById('js');
  
    htmlElement.textContent = skills.html;
    cssElement.textContent = skills.css;
    jsElement.textContent = skills.js;
  });
