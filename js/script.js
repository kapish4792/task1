$('.testimonial').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
  prevArrow:false,
  nextArrow:false
 
});

$('.clients').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
  responsive: [
  {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    }

  ]
});
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("navigation")
  } else {
    navbar.classList.remove("sticky");
  }
}
// $(window).scroll(function() {
//   if ($(window).scrollTop()){
//     $("navbar").addClass("black");
//   }
//   else {
//     $("navbar").removeClass("black");
//   }
// });

// const nav = document.querySelector('#navbar');
// let navTop = nav.offsetTop;

// function fixedNav() {
//   if (window.scrollY >= navTop) {    
//     navbar.classList.add('fixed');
//   } else {
//     navbar.classList.remove('fixed');    
//   }
// }

// window.addEventListener('scroll', fixedNav);