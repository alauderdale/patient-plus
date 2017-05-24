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



    //tooltips

	$('.tooltip-up').tooltip({html:true});

    $('[data-toggle="tooltip"]').tooltip();


    //lightslider

    $('.nurse-slider').lightSlider({
        gallery:true,
        mode: 'fade',
        thumbItem:16,
        slideMargin:0,
        addClass: 'nurse-slider-wrapper', 

        responsive : [
            {
                breakpoint:800,
                settings: {
                    thumbItem:6,
                  }
            }
        ]


    });  


    $('#team-accordion').on('show.bs.collapse', function () {

        // $('.nurse-slider').lightSlider().refresh;
        $(window).trigger('resize');
        // $('.nurse-slider-wrapper').addClass('out');

        // setTimeout(function(){
        //  $('.nurse-slider-wrapper').removeClass('out');
        // }, 200);


    })

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
