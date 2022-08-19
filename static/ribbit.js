$(document).ready(function() {
    $("#frogpic").click(function() {
        $("#frogaudio").prop("volume", 0.3);
        $("#frogaudio")[0].play();
    });
});