$(function () {
        $("a.tooltip").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        console.log(this.myTitle);
        var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
        $("body").append(tooltip);
        console.log("mouse over");
        $("#tooltip")
            .css({"top":e.pageY + "px",
                        "left":e.pageX + "px"})
            .show("fast");
        console.log(e.pageX );
        }).mouseout(function(){
            this.title = this.myTitle;
        $("#tooltip").remove();
        //console.log("mouse out");
    }).mousemove(function (e) {
        $("#tooltip")
            .css("left",e.pageX).css("top",e.pageY);
        //console.log(e.pageX);
    });

})