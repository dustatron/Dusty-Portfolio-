$(".sidebar_menu").addClass("hide_menu");
$(".toggle_menu").addClass("opacity_one");
$(".menu_button").addClass("opacity_one");		

$(document).ready(function() {


	$(".fa-times").click(function(){
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
		$(".content").removeClass("body-margin");
		$(".menu_button").addClass("opacity_one");
	});

	$(".toggle_menu").click(function() {
		$(".content").addClass("body-margin");
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
		$(".menu_button").removeClass("opacity_one");
	});


		  $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        event.preventDefault();
        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, 'swing',function(){

          window.location.hash = hash;
        });
      } // End if
    });// on click
});
