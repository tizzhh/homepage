$(document).ready(function(){
    $("#frogpic").click(function(){
    $("#frogaudio").prop("volume", 0.5);
    $("#frogaudio")[0].play();
    });
});