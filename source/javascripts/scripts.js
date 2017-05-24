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
        controls:false,
        enableDrag:false,
        enableTouch:false,
        adaptiveHeight:true,
        speed:200,
        addClass: 'nurse-slider-wrapper', 

        responsive : [
            {
                breakpoint:720,
                settings: {
                    thumbItem:6,
                  }
            }
        ]
    });  

    $( window ).resize(function() {
        $('.nurse-slider').css('padding','0');
    });


    $('#team-accordion').on('show.bs.collapse', function () {
        //fires when accordian is clicked
        // $('.nurse-slider').lightSlider().refresh;
        // $(window).trigger('resize');
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
