$(function (){
  console.log('init');

  $('.reviews').unslider({
    arrows:false,
    dots: true,
  });

  $('body').delegate('.scroll-to-target', 'click', function(e) {
    var target = $(this).attr('href');
    if ($(target).length) {
      var offset = 0;
      if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    
      $.scrollTo(target, 600, { offset: -offset });

      return false;
    }
  });
});