// UI variables 
const hamburger = document.querySelector('.hamburger-menu'), 
      header = document.querySelector('.header'), 
      navMenu = document.querySelector('.nav-menu');
      menuList = document.querySelector('.nav-menu li'); 

// Menu toggle event
hamburger.addEventListener('click', (e)=>{
  header.classList.toggle("open");
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  menuList.classList.toggle("open");
})
