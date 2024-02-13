document.addEventListener('selectionchange', function() {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText === "Nannu muttuko okati cheptha!") {
        var audio = document.getElementById('voiceMessage');
        audio.play();
    }
});