$('document').ready(function(){

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
    $("#phone, #phone1").mask("+38(999) 999-99-99");

    $('.magnific_button').magnificPopup({
        items: {
            src: '#popup_form'
        }
    });
});
