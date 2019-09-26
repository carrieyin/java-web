$(function () {
    var $tip = $("a .tooltip");
    $tip.mouseover(function (e) {
        var $tooltip = "<div id='tooltip'" + this.title + "</div>";
        $("#tooltip")
            .css({"top":e.pageY + "px",
                        "left":e.pageX + "px"});
    });
})