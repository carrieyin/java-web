$(function () {
    //:input框和失去焦点改变样式
    $(":input").focus(function () {
        $(this).addClass("focus");
    }).blur(function () {
        $(this).removeClass("focus");
    });

    var $msg = $("#msg");
    $(".bigger").click(function () {
        if( $msg.height() < 500){
            $msg.height( $msg.height() + 50);
        }
    });

    $(".smaller").click(function () {
        if( $msg.height() > 50) {
            //$msg.height($msg.height() - 50);
            $msg.animate({height: "-=50"}, 400);
        }
    })

    $(".up").click(function () {
        if( $msg.is(":animated")){
            $msg.animate({ scrollTop : "-50"}, 400)
        }

    })

    $(".down").click(function () {
        $msg.animate({ scrollTop : "+50"}, 400)
    })
})