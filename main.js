//Light and Dark mode toggle
const lightModeBtn = document.getElementById('light-mode-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

lightModeBtn.addEventListener('click', lightModeToggle);

function lightModeToggle() {
    body.classList.toggle('light-mode');

    //Toggle correct icon
    if (body.classList.contains('light-mode')) {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}