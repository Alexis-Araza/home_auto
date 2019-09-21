console.log('my script is working');

$(document).ready(function(){
  $('.fas').click(function(){
    $('nav').toggleClass('active');
  })

	  $('close').click(function(){
	    $('nav').hide();
	  })

	  	$("#slider").roundSlider({
    		    radius: 150,
    		    width: 40,
    			value: "18,78",
				sliderType: "range",
		});
});