$(function () {
    //查询大于第五条且并非最后一条的li列表对象隐藏
    var $category = $("ul li:gt(3):not(:last)");

    //获取显示全部品牌按钮
    var $toggleBtn = $("div .showmore > a");
    $toggleBtn.click(function () {
        if($category.is(":visible"))
        {
            $category.hide();
            //按钮显示精简品牌
            $(".showmore a span").text("显示全部品牌");
        }else{
            $category.show();
            $(".showmore a span").text("精简显示品牌");
        }

        return false;
    });


    console.log(123);
});