$(document).ready(function() {
    var tabsItem = $('.tabs__item');
    var contentItem = $('.content__item');

    tabsItem.on('click', function(event){
        var activeContent = $(this).attr('data-target');
        tabsItem.removeClass('tabs__item-active');
        contentItem.removeClass('content__item-active');
        $(activeContent).addClass('content__item-active');
        $(this).addClass('tabs__item-active');
    });
     AOS.init();
       
 var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 70000,
    disableOnInteraction: false, 
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
var mySwiper = new Swiper('.stories-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.stories-slider-button--next',
    prevEl: '.stories-slider-button--prev', 
    disabledClass: 'stories-slider-button--disabled',
  },
});



var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке');
  document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible')
})

var closeNavbar = document.querySelector(".navbar-menu__close--visible");
closeNavbar.addEventListener('click', function () {
  console.log('Клик по кнопке закрыть');
  document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible')
})

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

  function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');

      }
      //Обработка форм
      $('input[type=tel]').mask('+7 (000) 000-00-00');
      $('.form').each(function(){
        $(this).validate({
        errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, введите имя",
          minlength: "Имя должно быть не короче 2-х букв"
        },
        email: {
          required: "Пожалуйста, введите почту",
          email: "Формат почты должен быть name@domain.com"
        },
        phone: {
          required: "Пожалуйста, введите, номер телефона ",
          minlength:"должен содержать не менее 10 цифр"
          },
        },
      });
    });
});