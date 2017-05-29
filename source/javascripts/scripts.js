$(window).load(function(){




    //adds nav chrome when scrolled below book bugton
    // var bottom = $('.begin-show-actions').offset().top;
    // $(window).scroll(function(){    
    //     if ($(this).scrollTop() > bottom){ 
    //         $('.provider-nav').addClass('show-actions'); 
    //     }
    //     else{
    //         $('.provider-nav').removeClass('show-actions');
    //     }
    // });


    //affixes the provider nav when scrolling past it
    $('.provider-nav').affix({
        offset: {
            top: $('.provider-nav').offset().top,
        }
    });





});



$(document).ready(function(){



    //smoothscroll


    $('.scrollsomething').smoothScroll({

        speed: 800,
        offset: -76,
        easing: "easeInOutCubic"

    });

    $('.scrollsomething-mobile').smoothScroll({

        speed: 800,
        offset: 50,
        easing: "easeInOutCubic"

    });




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

    //team slider settings
    $('.nurse-slider').lightSlider({
        gallery:true,
        mode: 'fade',
        thumbItem:16,
        slideMargin:0,
        controls:false,
        enableDrag:false,
        enableTouch:false,
        adaptiveHeight:true,
        speed:400,
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


    $('.connected-dr-slider').lightSlider({
        item:3,
        loop:false,
        controls: false,
        pager:true,
        slideMove:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:900,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  


    //fixes team slider resizing issue from small to large screen widths
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
