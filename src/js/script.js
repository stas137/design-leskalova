$(document).ready(function() {
    
    
    /* Smooth scroll up */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
    /* Modal */
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal-feed__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('[data-modal=order]').each(function(i){
        $(this).on('click', function(){
            if (i>0) {
                $('#order .modal-feed__descr').text('Тариф: ' + $('.price_title').eq(i-1).text());
            } 
            $('.overlay, #order').fadeIn('slow');
        });
    });

    

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required"/* ,
                email: {
                    required: true,
                    email: true
                 }*/
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Имя минимум {0} символа")
                  },
                phone: "Пожалуйста, введите свой телефон"
                /*,
                email: {
                    required: "Пожалуйста введите свой email",
                    email: "Неправильно введен адрес email"
                }
                */
            }
        });
    }

    validateForms('#consultation form');
    validateForms('#order form');

});