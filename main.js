const envelope = document.querySelector(".envelope");
const audio = document.querySelector(".audio");

let isAudioPlaying = false;

function envelopeOpen() {
    envelope.classList.toggle("open");
    const letterElement = document.querySelector(".letter");
    const fullSizeElement = document.querySelector(".fullSize");
    const elementToToggle = letterElement ? letterElement : fullSizeElement;
    elementToToggle.classList.toggle("fullSize");

    if (!isAudioPlaying) {
        audio.play();
        isAudioPlaying = true;
    } else {
        audio.pause();
        isAudioPlaying = false;
    }
};
