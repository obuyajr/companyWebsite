let NavBar = document.querySelector('.navbar');
let Fabars =  document.querySelector('.fa-bars');


Fabars.onclick =  () =>{
    NavBar.classList.toggle("active")
};


var swiper = new Swiper(".home-slide", {});
// var swiper = new Swiper(".home-slide", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });