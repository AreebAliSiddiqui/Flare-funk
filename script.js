const swiper = new Swiper(".modelSwiper", {

slidesPerView: 4,

spaceBetween: 30,

loop: true,

speed:500,

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


// team members

const teamSwiper = new Swiper(".teamSwiper", {

slidesPerView:4,

spaceBetween:30,

loop:true,

grabCursor:true,

speed:500,

navigation:{
nextEl:".team-next",
prevEl:".team-prev",
},

breakpoints:{

320:{
slidesPerView:1,
},

768:{
slidesPerView:2,
},

1024:{
slidesPerView:4,
}

}

});