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


$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();

    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i,el) {
        var offset = parseInt($(el).data('offset'));

        var translate = "translate3d(" + Math.round(offsetX * offset)
        + "px," + Math.round(offsetY * offset) + "px, 0px";

        $(el).css({
            'transform':translate
        })
    })
})
