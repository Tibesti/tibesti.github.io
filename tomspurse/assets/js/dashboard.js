//For colour change on hovering.
$(document).ready(function(){
    $(".bg102").hover(
        function(){
            $(this).fadeOut(200, function(){
                $(this).css({"background-color": "#022B69", "color": "white"}).fadeIn(200);
            });
            $(this).css({"margin-top": "0px", "margin-left": "0px", "margin-right": "0px"});
        },
        function(){
            $(this).fadeOut(200, function(){
                $(this).css({"background-color": "white", "color": "#022B69"}).fadeIn(200);
            });
            $(this).css({"margin-top": "5px", "margin-left": "5px", "margin-right": "5px"});
        }
    );
    $('#mobile-drpdown').click(function(){
        $('#content-drop').toggle()
    });
    
    $(".bg103").hover(
        function(){
            $(".bg103").css({"width": "100%"});
            $(".bg104").css({"width": "100%"});
            $('.side-menu-text').show();
        },
        function(){
            $(".bg103").css({"width": "80px"});
            $(".bg104").css({"width": "80px"});
            $('.side-menu-text').hide();
        }
    );
    
    $('.bg104').hover(
        function(){
            $(".bg103").css({"width": "100%"});
            $(".bg104").css({"width": "100%"});
            $('.side-menu-text').show();
        },
        function(){
            $(".bg103").css({"width": "80px"});
            $(".bg104").css({"width": "80px"});
            $('.side-menu-text').hide();
        }
    );
});