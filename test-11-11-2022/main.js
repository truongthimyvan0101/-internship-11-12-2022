// $(document).ready(function(){
//   $('.banner-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           arrows: false
//         }
//       }
//     ]
//   });
$('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Adds arrows to sides of slider
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></button>',
    
  });

  $('.image-slider').slick({
    slidesToShow: 3, // Shows a three slides at a time
    // rows:2, //2 hang ngang
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    // autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-compact-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-compact-right"></i></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,//k hiện button
          }
        },
      ]
    
  });
  
  $(document).ready(function(){

    $('#toggleOpen').on('click', function() {
        $('.w-header .menuMobile .menu-list').addClass('show');
        $('.w-header .menuMobile').addClass('show');
        })
    $('#toggleClose').on('click', function() {
        $('.w-header .menuMobile .menu-list').removeClass('show');
        $('.w-header .menuMobile').removeClass('show');
    })
    // $('.header .m-menu .overlay').on('click', function() {
    //     $('.header .m-menu .m-navlist').removeClass('show');
    //     $('.header .m-menu .overlay').removeClass('show');
    // })
    
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });