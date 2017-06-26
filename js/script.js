

$(document).ready(function() {
	//hides and shows nav menu


	//defualt state
	StartState();
	highlighter(window.location.hash);

	//button listeners
	$(".fa-times").click(function() {
		hide();

	});
	$(".toggle_menu").click(function() {
		show();

	});

//menu link listenter
	$("a").on('click', function(event) {
    if (this.hash !== "") {
    	event.preventDefault();

      var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, 'swing',function(){
					window.location.hash = hash;
        });

				highlighter(hash);
      };
			 // End if
    });// on click

		//Scoll Deplayer for Parallax effect
		$(window).scroll(function() {
			var yScroll = $(this).scrollTop();
			var floatOneY = 101;
			var floatOneX = 10;
			var paperY = -800;


			//background
			$("#background").css("margin-top", (yScroll*-0.2)+"px");
			$("#paper-texture").css("top", ((yScroll*0.2)+paperY)+"px");

			//#1 floaty
			$("#floater_one").css("top", ((yScroll*0.02)+floatOneY)+"vh");
			$("#floater_one").css("margin-left", ((yScroll*0.2)+floatOneX)+"%");

		});

}); //End document ready

// starting state of nav menu
const StartState = function() {
	$(".sidebar_menu").addClass("hide_menu");
	$(".toggle_menu").addClass("opacity_one");
	$(".menu_button").addClass("opacity_one");
};//End Start State

//Highlights text in menu
const highlighter = function(hash) {
	var local = hash.slice(1);
	if(local == "about" || local == "projects" || local == "contact") {
		$(".nav-item").removeClass("viewing");
		$("#menu_"+local).addClass("viewing");
	} else {
		$(".nav-item").removeClass("viewing");
		$("#menu_about").addClass("viewing");
	}; //End if
};//Ened Highlighter

//SHOW AND HIDE NAV MENU
var hide = function() {
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
		$(".content").removeClass("body-margin");
		$(".menu_button").addClass("opacity_one");
	}; //END HIDE

var show = function() {
		$(".content").addClass("body-margin");
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
		$(".menu_button").removeClass("opacity_one");
	};//END SHOW
