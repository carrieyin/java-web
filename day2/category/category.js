$(function () {
    //查询大于第五条且并非最后一条的li列表对象
    var $category = $("ul li:gt(3):not(:last)");
    $category.hide();
    console.log(123);
})