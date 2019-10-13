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
    });

    $(".up").click(function () {
        if( $msg.is(":animated")){
            $msg.animate({ scrollTop : "-50"}, 400)
        }

    });

    $(".down").click(function () {
        $msg.animate({ scrollTop : "+50"}, 400)
    });

    $("#checkedAll").click(function () {
        $("[name=item]:checkbox").attr("checked", "true");
    });

    $("#checkedNo").click(function () {
        //$("[name=item]:checkbox").attr("checked", "false");
        $("[name=item]:checkbox").removeAttr("checked");
        //console.log($("[name=item]:checkbox").attr());
    });

    $("#send").click(function () {
        var str = "你选中的是: \r\n";
        $("[name=item]:checkbox:checked").each(function () {
            str += $(this).val() + "\r\n";
        });
      alert(str);
    });

    $("#add").click(function () {
        var $options = $("#select1 option:selected");
        //$options.appendTo("#select2");
        $("#select2").append($options);
    });

    $("form input.required").each(function () {
        var $required = $("<strong class='high'>* </strong>");
        console.log($required);
        $(this).parent().append($required);
    });


})