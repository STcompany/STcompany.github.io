$(document).ready(function(){

    //WAYPOINT FUNCTION
    (function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                    };
                }, {
                    offset: "90%"
                });

            });
        };
    })(jQuery);


    //SWIPER CAROUSEL
    var swiper2 = new Swiper('.slider2', {
        spaceBetween: 10,
        centeredSlides: true,
    });

    var dots = new Swiper('.dots_images', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true
    });
    swiper2.params.control = dots;
    dots.params.control = swiper2;

    var swiper1 = new Swiper('.slider1', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });


    $(".nav-trigger").click(function(){
        if($(this).hasClass("is-active")){
            $(".mob_menu").animate({
                left: '-100%',
                opacity: '0.3'
            },600);
            $(this).removeClass("is-active");
        }else{
            $(this).addClass("is-active");
            $(".mob_menu").animate({
                left: 0,
                opacity: 1
            },600);
        }
    });

    //masked
    $("input[name='phone']").mask("+38(999) 999-99-99");

    //magnific-popup
    $('.magnific_button, a[href="#popup-callback"]').magnificPopup({
        type: 'inline'
    });

    //СКРИПТ ПЕРЕКЛЮЧЕНИЯ ПО КНОПКАМ
    $('.cat-nav').on('click', 'div', function() {
        $('.cat-for .item').removeClass('active');
        $('.cat-nav div').removeClass('current');
        $(this).addClass('current');//обрабатываем события радио кнопок
        $('.cat-for .item').hide() //скрыть все div
            .eq($(this).index()) //получить div связанный по индексу
            .show().addClass('active'); //сделать этот div видимым
    });


    //WAYPOINTS
    $("section.pr").waypoint(function(){
        $(".pr .bx-animate-item").each(function(index){
            setInterval(function(){
                $('.pr .bx-animate-item').animated('fadeInRight');
            }, 100*index);
        });
    },{offset: "20%"});


    //СКРИПТ ДЛЯ ЦИФР ВЫЗОВ
    numbers(76,'ball',15);

    //СКРИПТ ДЛЯ ЦИФЕР
    function numbers(val,el,timeout){
        var i=0;
        (function(){
            if (i <= val) {
                setTimeout(arguments.callee, timeout);
                document.getElementById(el).innerHTML = i + '%';
                i++
            }
            else {
                document.getElementById(el).innerHTML = val + '%';
            }
        })();
    }

});



