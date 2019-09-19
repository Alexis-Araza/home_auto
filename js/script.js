console.log('my script is working');

$(document).ready(function(){
  $('.menu').click(function(){
    $('nav').toggleClass('active');
  })

  $('close').click(function(){
    $('nav').hide();
  })
});