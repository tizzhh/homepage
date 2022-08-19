$(document).ready(function() {
    $("#train").click(function() {
        var str1 = "";
        var letters = {
            "ㅏ": "a",
            "ㅑ": "ya",
            "ㅓ": "o",
            "ㅕ": "yo",
            "ㅗ": "o",
            "ㅛ": "yo",
            "ㅜ": "u",
            "ㅠ": "yu",
            "ㅡ": "eu",
            "ㅣ": "i",
            "ㅐ": "e",
            "ㅒ": "ye",
            "ㅔ": "e",
            "ㅖ": "ye",
            "ㅘ": "wa",
            "ㅙ": "we",
            "ㅚ": "we",
            "ㅝ": "wo",
            "ㅞ": "we",
            "ㅟ": "wi",
            "ㅢ": "ui",
            "ㄱ": "k",
            "ㄴ": "n",
            "ㄷ": "t",
            "ㄹ": "r",
            "ㅁ": "m",
            "ㅂ": "p",
            "ㅅ": "s",
            "ㅇ": "ng",
            "ㅈ": "j",
            "ㅊ": "ch",
            "ㅋ": "kh",
            "ㅌ": "th",
            "ㅍ": "ph",
            "ㅎ": "h",
            "ㄲ": "kk",
            "ㄸ": "tt",
            "ㅃ": "pp",
            "ㅆ": "ss",
            "ㅉ": "jj"
        };
        $("#englet").hide();
        $("#sec1").hide();
        $("#sec2").show();
        var checkboxes = $('input[type="checkbox"]');
        for (var checkbox of checkboxes) {
            if (checkbox.checked == true) {
                str1 += checkbox.value;
            }
        };

        if (str1.length == 0) {
            alert("Please select a row");
            $("#sec2").hide();
            $("#sec1").show();
            location.reload();
        };

        var randElement = str1[Math.floor(Math.random() * str1.length)];
        $("#koreanlet").html(randElement);
        $("#englet").html(letters[$("#koreanlet").html()]);

        var score = 0;

        $("#answer").on('input', function() {
            if (letters[$("#koreanlet").html()] == $("#answer").val().toLowerCase()) {
                $("#englet").hide();
                score += 1;
                $("#score").html("Score: " + score);
                $("#highscore").val(score);
                randElement = str1[Math.floor(Math.random() * str1.length)];
                $("#koreanlet").html(randElement);
                $("#englet").html(letters[$("#koreanlet").html()]);
                $("#answer").val('');
            }
        });

        $("#koreanlet").click(function() {
            $("#englet").show();
        });

    });

    $("#back").click(function() {
        $("#sec2").hide();
        $("#sec1").show();
        location.reload();
    });
});