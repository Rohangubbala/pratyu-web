document.addEventListener('DOMContentLoaded', function() {
    var voiceButton = document.getElementById('voiceButton');
    voiceButton.addEventListener('click', function() {
        var audio = document.getElementById('voiceMessage');
        audio.play();
    });
});