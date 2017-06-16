$(document).ready(function(){

    //DELETE THIS adds class to repeated Middleman booking panel
    $('.book-panel:nth-child(2)').addClass('selected'); 


    //adds class to selected location
    // $('.book-panel').click(function() { 
    //     $('.book-panel').removeClass('selected'); 
    //     $(this).addClass('selected'); 
    // });


    //adds class to selected location
    $('.location-select input').change(function() { 
        $('.book-panel').removeClass('selected'); 
        console.log('change');
        if ($(this).is(':checked')) { 
            $(this).parent().parent().parent().parent().parent().addClass('selected'); 
        }
    });



    //smoothscroll
    $('.scrollsomething').smoothScroll({

        speed: 800,
        offset: -26,
        easing: "easeInOutCubic"

    });


    $('.scrollsomething-nooffset').smoothScroll({

        speed: 800,
        offset: 0,
        easing: "easeInOutCubic"

    });

    // $('.scrollsomething-mobile').smoothScroll({

    //     speed: 800,
    //     offset: 120,
    //     easing: "easeInOutCubic"

    // });


    //tooltips

	$('.tooltip-up').tooltip({html:true});

    $('[data-toggle="tooltip"]').tooltip();


    //popovers

    $(".dr-hovercard-trigger").popover({
        trigger: 'manual',
        container: $(this).attr('id'),
        placement: 'top',
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-heading").html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



    //lightgallery





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
        loop:true,
        auto:true,
        pauseOnHover: true,
        pause:4000,
        controls: true,
        pager:true,
        slideMove:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:900,
        addClass: 'connected-dr-slider-wrapper',
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
