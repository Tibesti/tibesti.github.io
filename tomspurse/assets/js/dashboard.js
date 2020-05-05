//For colour change on hovering.
$(document).ready(function(){
    $(".bg102").hover(
        function(){
            $(this).fadeOut(200, function(){
                $(this).css({"background-color": "#022B69", "color": "white"}).fadeIn(200);
            });
        },
        function(){
            $(this).fadeOut(200, function(){
                $(this).css({"background-color": "white", "color": "#022B69"}).fadeIn(200);
            });
        }
    );
    $('#mobile-drpdown').click(function(){
        $('#content-drop').toggle()
    });
});