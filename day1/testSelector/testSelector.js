$(function () {
    //基本选择
    $("#one").css("background","#aabbcc")
    $(".mini").css("background","#aabbcc")
    $("div").css("background","#aabbcc")
    $("div #two").css("background","#aabbcc")

    //层次选择
    $("div .mini").css("background","#ccbbcc")
    $("div > .mini").css("background","#ffeedd")
    $(".one + div").css("background","#ddeeff")

    //过滤选择
    $("div:even").css("background","#ccbbaa")
    $("div:lt(3)").css("background","#ffeedd")
})