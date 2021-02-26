// UI variables 
const hamburger = document.querySelector('.hamburger-menu'), 
      header = document.querySelector('.header'), 
      navMenu = document.querySelector('.nav-menu');
      social = document.querySelector('.social'); 

      tabHeader = document.querySelectorAll(".tab-header");
      tabLinks = document.querySelectorAll(".tablink");
      tabContent = document.querySelectorAll(".tab-content");

// Menu toggle event
hamburger.addEventListener('click', (e)=>{
  header.classList.toggle("open");
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  social.classList.toggle("open");
})


// TAB CLICK EVENT 
for (let number = 0; number < tabLinks.length; number++) {
  tabLinks[number].addEventListener('click', ()=>{
      tabLinks.forEach(link => {
        link.classList.remove('active');
      });
      tabContent.forEach(content => {
        content.classList.remove('active');
      });
      tabLinks[number].classList.add('active');
      tabContent[number].classList.add('active');
  })
}