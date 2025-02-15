const toggleBtn = document.querySelector('.dark');
const body = document.body;
const themeIcon = document.querySelector('.dark img'); 


if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeIcon.src = "img/dark-icon.png";
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.src = "img/dark-icon.png";
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = "img/light-icon.png"; 
    }
});
