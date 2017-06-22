$(function() {
	// Custom JS
    $(".hamburger").on('click', function () {
        $(this).toggleClass("is-active");
        $(".main-mnu").slideToggle(500);
    });
    $(".open_more").on('click', function(){
       $(".ul_icons_wrap").slideToggle(500);
    });
});
