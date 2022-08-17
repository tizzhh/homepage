$(document).ready(function(){
    $("span").each(function(p) {

        $( this ).mouseenter(function(){
            $( this ).css({"font-weight": "900", "text-decoration": "underline"})
        });

        $( this ).mouseleave(function(){
            $( this ).css({"font-weight": "normal", "text-decoration": "none"})
        })

        $( this ).mouseenter(function(){
            if($( this ).attr('id') == "frog")
            {   
                $("#froggif").show();
            }
        });
        $( this ).mouseleave(function(){
            if($( this ).attr('id') == "frog")
            {
                $("#froggif").hide();
            }
        });
        $( this ).mouseenter(function(){
            if($( this ).attr('id') == "anime")
            {
                $("#animegif").show();
            }
        });
        $( this ).mouseleave(function(){
            if($( this ).attr('id') == "anime")
            {
                $("#animegif").hide();
            }
        });
        $( this ).mouseenter(function(){
            if($( this ).attr('id') == "code")
            {
                $("#codegif").show();
            }
        });
        $( this ).mouseleave(function(){
            if($( this ).attr('id') == "code")
            {
                $("#codegif").hide();
            }
        });
        $( this ).mouseenter(function(){
            if($( this ).attr('id') == "skate")
            {
                $("#skategif").show();
            }
        });
        $( this ).mouseleave(function(){
            if($( this ).attr('id') == "skate")
            {
                $("#skategif").hide();
            }
        });
    });
});