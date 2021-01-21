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
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

   keyboard: {
    enabled: true,
  }, 
  autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      }, 
        // Navigation arrows
  navigation: {
    nextEl: '.stories-slider-button--next',
    prevEl: '.stories-slider-button--prev', 
    disabledClass: 'stories-slider-button--disabled',
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
})
var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

      function openModal() {
        var targetModal = $(this).attr('data-href');
        $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
        $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
      }
      function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')

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