$(function() {
    $("footer ul li a[name]").click(function() {
        var attr = $(this).attr("name");

        $("#components").load(attr + ".html");
        return false;
    });
});