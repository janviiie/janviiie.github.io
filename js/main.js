/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';
$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});


// $(document).ready(function () {
// 	$('.menubar-item').on('click', function (event) {
// 		event.preventDefault(); // Prevent default action (useful if inside <a> tag)

// 		let targetElement = $(this).data('target-element'); // Get the data attribute
// 		if (targetElement) {
// 			$('html, body').animate({
// 				scrollTop: $(targetElement).offset().top
// 			}, 800); // Smooth scroll to the target
// 		}
// 	});
//   });
$(document).ready(function () {
    function smoothScroll(target) {
        if ($(target).length) {
            $('html, body').animate({ 
                scrollTop: $(target).offset().top 
            }, 800, 'swing');
        }
    }

    $('.menubar-item').on('click', function (event) {
        let targetElement = $(this).attr('href');

        // If the link starts with "#", handle smooth scrolling
        if (targetElement.startsWith("#")) {
            event.preventDefault(); // Prevent default navigation
            smoothScroll(targetElement);
        } else if (targetElement.includes("index.html#")) {
            // If on zombie.html, allow navigation to index.html normally
            event.preventDefault();
            window.location.href = targetElement;
        }
    });

    // Smooth scroll when landing on index.html with a hash
    if (window.location.hash) {
        setTimeout(function () {
            smoothScroll(window.location.hash);
        }, 200); // Delay ensures the page is fully loaded before scrolling
    }
});
$(document).ready(function () {
    $(".accordion").click(function () {
      $(this).toggleClass("active"); // Toggle active class on the accordion
      $(this).find(".accordion-icon").toggleClass("rotate"); // Rotate the icon
      $(this).next(".accordion-inner").toggleClass("visible"); // Show/hide accordion content
    });
  });
  




