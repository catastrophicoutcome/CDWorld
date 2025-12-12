const playCircleSvg = document.getElementById("play_circle");
const pauseCircleSvg = document.getElementById("pause_circle");

play_circle.addEventListener("click", showPauseButton);
pause_circle.addEventListener("click", showPlayButton);

function showPauseButton() {
    playCircleSvg.classList.add('hidden');
    pauseCircleSvg.classList.remove('hidden');
}

function showPlayButton() {
    playCircleSvg.classList.remove('hidden');
    pauseCircleSvg.classList.add('hidden');
}