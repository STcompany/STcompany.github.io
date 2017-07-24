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
    $("#form_phone").mask("+380(999)-999-99-99");


    //magnific-popup
    $(".desktop_mfp, .mobile_mfp").magnificPopup({
        type: 'inline',
        preloader: false
    });

});
