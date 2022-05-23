

//Slider using Owl-carousel, Testimonial

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             610: {
//                 items: 2,
//             },
//         },
//         pagination: {
//             el: '.owl-dot',
//             clickable: true,
//         },
//     });
// });


const swiper = new swiper('.swiper', {

    // responsive: {
    //     0: {
    //         items: 1,
    //     },
    //     610: {
    //         items: 2,
    //     },
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})