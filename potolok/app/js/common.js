$(document).ready(function() {

    //scripts for desktop devices
    if($(window).width()>= '768')
    {
        //script for topline(tabs fors p)
        $(".text p").not(':first').hide();
        var counter = 1;
        var length = $(".text p").length;
        setInterval(function () {
            if (length == counter) {
                counter = 1;
            }
            $(".text p").hide();
            $(".text p").eq(+counter).fadeIn('slow');
            counter++;
        }, 2000);
    }



    //masked
    $("#form_phone, #form_phone2").mask("+380(999)-999-99-99");


    //magnific-popup
    $(".desktop_mfp, .mobile_mfp").magnificPopup({
        type: 'inline',
        preloader: false
    });

    $(".s12_popup_1").magnificPopup({
        items: {
            src: '#s12_doc_1'


        },
    });
    $(".s12_popup_2").magnificPopup({
        items: {
            src: '#s12_doc_2'


        },
    });

    //slick
    $('.s4_content_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.nav_carousel'),
        fade: true,
        asNavFor: '.s4_min_img ul',
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.s4_min_img ul').slick({
        slidesToShow: 32,
        slidesToScroll: 1,
        asNavFor: '.s4_content_img',
        dots: true,
        centerPadding: 0,
        centerMode: true,
        focusOnSelect: true
    });




    //sect_15
    $(".s15_item").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(".s15_item.active").find(".s15_content").slideToggle(500);
            $(".s15_item.active").removeClass("active");
            $(this).addClass("active");
        }
        $(this).find(".s15_content").slideToggle(500);
    });
    
    //btn_to_top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.btn-to-top').fadeIn();
        } else {
            $('.btn-to-top').fadeOut();
        }
    });

    $('.btn-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


});
