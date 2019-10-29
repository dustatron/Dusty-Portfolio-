function anchorLinkHandler(e) {

	var distanceToTop = function (el) {
		return Math.floor(el.getBoundingClientRect().top)
	};

	e.preventDefault();
;
	//Grabs Object
	var targetID = this.getAttribute("href"); 
	var targetAnchor = document.querySelector(targetID);
	//Checks for truthy
	if(!targetAnchor) {
		console.log("Error TargetAnchor returned falsy");
		return 
	};

	var originalTop = distanceToTop(targetAnchor);

	window.scrollBy(
		{ top: originalTop,
		  left: 0,
		  behavior: "smooth"
		});

	var checkIfDone = setInterval(function() {
		var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight -2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = "-1";
			targetAnchor.focus();
			window.history.pushState("", "", targetID);
			clearInterval(checkIfDone);
		}
	}, 100); //END checkIfDone
}

var linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(function(each){
	each.onclick = anchorLinkHandler;
});


