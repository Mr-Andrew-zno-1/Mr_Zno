const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
           scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
           scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 350);
}

$(document).ready(function() {
    window.onload = function() {
    $('.flashlight_1,.flashlight_2,.rope_top,.rope_top_1').addClass('_active')
    }
});


/* Відкрити зміст*/

$(document).ready(function() {
    $('.box_wrapper').click(function(event) {
        $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').toggleClass('--active');
        $('body').toggleClass('lock');    
    });
});

/* Закрити зміст*/

$(document).ready(function() {
    $('.close_button').click(function(event) {
        $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').removeClass('--active');    
        $('body').removeClass('lock');    
    });
});

/* Закрити зміст по-за межами дів*/

$(document).mouseup(function (e){  
    var div = $('.right_menu_cont');
    if (!div.is(e.target) && div.has(e.target).length === 0) {  
            $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').removeClass('--active');
            $('body').removeClass('lock');      
    }
  });

  $(document).ready(function() {
    $('.button_ph').click(function(event) {
        const parent = $(this).parent()

        if (parent.hasClass('photo_parent--active')) {
        parent.removeClass('photo_parent--active');
        
    } else {
        $('.photo_parent').removeClass('photo_parent--active')
        parent.addClass('photo_parent--active')
    }
    
    });
});


