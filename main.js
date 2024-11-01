//Light and Dark mode toggle
const lightModeBtn = document.getElementById('light-mode-toggle');
const body = document.body;

lightModeBtn.addEventListener('click', lightModeToggle);

function lightModeToggle () {
    body.classList.toggle('light-mode');
}