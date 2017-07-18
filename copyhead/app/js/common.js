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
});
