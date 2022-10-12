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

    $('nav').find('a').click(function(){
        console.log($('nav').find('a'));
        console.log($(this).data('target'))
        let target = $(this).data('target');
        let o = $(target).offset().top;
        console.log(o);
        $('html,body').animate({
          scrollTop: o
        });
      })
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
        $(window).scroll(function () {
            $("#navtoggle").collapse('hide');
        })
    })
    $(".gotop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            600
        );
    });
    $(window).scroll(function(e){
        let h = $(window).scrollTop();
        if(h>650){
          $('.gotop').addClass('active');
        }else{
            $('.gotop').removeClass('active');
        //   $('.gotop').fadeOut();
        }
      })
});