// hamburger navbar

const selectElement =(element)=>{
  return document.querySelector(element)
};

let body= selectElement('body');
let headerTag = selectElement('header');
let listTag = document.getElementById('list');
let logo = document.getElementById('logo');
let mainNavLinks = document.querySelectorAll("nav ul li a");


// change scroll

let scrolled=()=>{
  let dec = scrollY /(body.scrollHeight - innerHeight);
  return Math.floor(dec * 100)
};

addEventListener('scroll',()=>{
  headerTag.style.setProperty('background', scrolled() > 2 ? "#252525" : "linear-gradient(to bottom, rgba(0,0,0,1), transparent)")
});
addEventListener('scroll',()=>{
  logo.style.setProperty('font-size', scrolled() > 2 ? "3rem" : "2.5rem");
  logo.style.setProperty('transition', scrolled() > 2 ? "font-size .5s" : "font-size .5s");
  mainNavLinks.forEach(link => {
  link.style.setProperty('font-size', scrolled() > 2 ? "1.8rem" : "1.5rem");
  link.style.setProperty('transition', scrolled() > 2 ? "font-size .5s" : "font-size .5s");
  });
});


// pressed navigation
window.addEventListener("scroll", ()=> {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


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



$(document).ready(function () {
  $('.gallery li:lt(3)').show();
  $('.less').hide();
  var items =  9;
  var shown =  3;
  $('.more').click(function () {
    $('.less').show();
    shown = $('.gallery li:visible').length+3;
    if(shown< items) {
      $('.gallery li:lt('+shown+')').show(300);
    } else {
      $('.gallery li:lt('+items+')').show(300);
      $('.more').hide();
    }
  });
  $('.less').click(function () {
    $('.gallery li').not(':lt(3)').hide(300);
    $('.more').show();
    $('.less').hide();
  });
});



