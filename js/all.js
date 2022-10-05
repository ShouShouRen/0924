$(document).ready(function () {
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        
    })
    wow.init();

    text('people', 10200, 10650)
    text('join', 500, 1350)
    text('share', 3000, 3780)

    function text(className, start, end) {
        var timer = setInterval(() => {
            start++
            $('.' + className).text(start + "+");
            if (start >= end) {
                clearInterval(timer)
            }
        })
    };

    $('.nav-link,a').click(function () {
        var t = $(this).attr('href');
        var st = $(t).offset().top - 30;
        $('html,body').animate({
            scrollTop: st
        }, 500);
    });
    $('.modal-footer .clearcart').click(function () {
        alert("感謝您的購買疫世界會儘速送達！！！")
        location.reload();
    })
    $('.chat-ico').click(function () {
        $('#chat').fadeToggle();
    })
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            $("#navtoggle a").click(function () {
                $("#navtoggle").collapse('hide');
            });
        }
        $(width).scroll(function () {
            $("#navtoggle").collapse('hide');
        })
    })
});