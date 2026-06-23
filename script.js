const swiper = new Swiper(".modelSwiper", {

slidesPerView: 4,

spaceBetween: 30,

loop: true,

navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},

breakpoints: {

300: {
slidesPerView: 1,
},

490: {
slidesPerView: 2,
},

768: {
slidesPerView: 3,
},

1024: {
slidesPerView: 4,
}

}

});