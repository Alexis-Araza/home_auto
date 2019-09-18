console.log('my script is working');

$(document).ready(function(){
  $('.fas').click(function(){
    $('nav').toggleClass('active');
  })

  $('close').click(function(){
    $('nav').hide();
  })
});