// hamburger navbar

const selectElement =(element)=>{
  return document.querySelector(element)
};

let menuToggle = selectElement('.menu-toggle');
let body= selectElement('body');
let headerTag = selectElement('header');

menuToggle.addEventListener('click', ()=>{
  body.classList.toggle('open');
});


// pressed navigation
let listTag = document.getElementById('list');
let linkTag = listTag.getElementsByClassName('nav-link');

for (var i = 0; i < linkTag.length; i++) {
  linkTag[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}


// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
  origin:'left',
  duration:1000,
  distance:'25rem',
  delay:300
});

sr.reveal('.animate-right',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:600
});

sr.reveal('.animate-top',{
  origin:'top',
  duration:1000,
  distance:'25rem',
  delay:600
});

sr.reveal('.animate-bottom',{
  origin:'bottom',
  duration:1000,
  distance:'25rem',
  delay:600
});

// change color nav


let scrolled=()=>{
let dec = scrollY /(body.scrollHeight - innerHeight);
  return Math.floor(dec * 100)
};

addEventListener('scroll',()=>{
  headerTag.style.setProperty('background', scrolled() > 15 ? "#252525" : "linear-gradient(to bottom, rgba(0,0,0,1), transparent)")
});

// nav underscore




