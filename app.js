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

// EMAIL VALIDATION EVENT
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');
const email = document.getElementById('email');
const input = document.querySelector('.input');
const error = document.querySelector('.error');

form.addEventListener('submit', validateEmail);

function validateEmail(e){
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  if(!re.test(email.value)){
    e.target.parentElement.style.position = 'relative';
    error.style.display = 'block';
    input.classList.add('err');

    setTimeout( clearText, 2000);
  } else{
   form.submit(); 
  }

  e.preventDefault();
}

function clearText(){
  input.classList.remove('err');
  error.style.display = 'none';
}