$(document).ready(function(){



	 //fancybox
	// $('.fancybox').fancybox({
 //        padding: 0
 //    });
	
	// $('.fb-video').fancybox({
 //        padding: 0,
 //        helpers: {
 //            media: {}
 //        }
 //   });

	$('.tooltip-up').tooltip({html:true});



    //main nav
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        // if (scroll >= 200) {
        //     $(".global-nav").addClass("dark-header");
        // } else {
        //     $(".global-nav").removeClass("dark-header");
        // }
    });
    



});
