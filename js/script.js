const menu = function() {
    var topNav= document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

$(document).ready(function() {
  let bottomImage = $( "#link" );

  $(window).scroll(function(){
    let yData = $(this).scrollTop();

    let floaties = function () {
      // if (yData < 1280) {
      //   return yData;
      // } else {
      //   return '0px';
      // };
      return yData;
    };

    $(".background").css('top', ((yData * 0.3)+'px'));

    $(".sliderOne").css('margin-top', (floaties()*0.4)+'px');
    $(".sliderTwo").css('margin-top', ((floaties()*0.09)-50)+'px');
    $(".sliderThree").css('margin-top', ((floaties()*0.09)-110)+'px');



    $(".floater-front").css('top', (floaties()*-1.5)+'px');
    $(".floater-back").css('top', ((floaties()*0.2)+'px'));

  })




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





}); //end doc ready
