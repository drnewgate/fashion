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
})
});