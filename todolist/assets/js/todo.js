// Check off item
$("ul").on("click", "li", function() {
    $(this).toggleClass("checked");
});

// Delete item when trash icon is clicked
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new item
$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13) {
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input").fadeToggle(300);
});