$(function () {
    $("tbody tr:odd").addClass("odd");
    $("tbody tr:even").addClass("even");
    $("tr:contains('王五')").addClass("selected");
    $("tr").click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected")
            .end()
            .find(":radio").attr("checked",true);
    })
})