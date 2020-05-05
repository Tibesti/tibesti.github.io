//script for page navigation
        $(document).ready(function(){
            $(".pending-btn").click(function(){
                $(this).css({"border-bottom":"2px solid #022B69"});
                $(".current-btn").css({"border-bottom":"2px solid transparent"});
                $(".explore-btn").css({"border-bottom":"2px solid transparent"});
                $(".current").css({"display":"none"});
                $(".pending").css({"display":"initial"});
                $(".explore").css({"display":"none"});
            });
            $(".current-btn").click(function(){
                $(this).css({"border-bottom":"2px solid #022B69"});
                $(".pending-btn").css({"border-bottom":"2px solid transparent"});
                $(".explore-btn").css({"border-bottom":"2px solid transparent"});
                $(".current").css({"display":"initial"});
                $(".pending").css({"display":"none"});
                $(".explore").css({"display":"none"});
            });
            
            $(".explore-btn").click(function(){
                $(this).css({"border-bottom":"2px solid #022B69"});
                $(".pending-btn").css({"border-bottom":"2px solid transparent"});
                $(".current-btn").css({"border-bottom":"2px solid transparent"});
                $(".explore").css({"display":"initial"});
                $(".pending").css({"display":"none"});
                $(".current").css({"display":"none"});
            });
        });