console.log('my script is here');

$(document).ready(function(){
  $('.fas').click(function(){
    $('nav').toggleClass('active');
  })

	  $('close').click(function(){
	    $('nav').hide();
	  })

        $('.icon-opt').on("click", function(){
          $(this).toggleClass('opt-active');
        })

      	  	$("#slider").roundSlider({
          		    radius: 150,
          		    width: 40,
          			value: "18,78",
      				sliderType: "range",

      			    tooltipFormat: function (e) {
                  var parts = parseFloat(e.value).toFixed(2).split(".");
                  var sec = parts[1] == "" ? "" : 60*(parts[1]/100);
                  var value = parts[0] + "°C";
                  return value;
                }
        		})
});