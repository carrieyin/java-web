$(".has_children").click(function () {
    /*if($(this).hasClass("highlight")){
        $(this).removeClass("highlight") ;
    }else{
        $(this).addClass("highlight") ;
    }*/
    $(this).addClass("highlight")    //为当前元素增加highlight类
        .children("a").show().end(). //子节点a显示并返回定位到上次操作元素
        siblings().removeClass("highlight"). //获取兄弟元素去掉highlight类
        children("a").hide();                //兄弟下的a元素隐藏
})