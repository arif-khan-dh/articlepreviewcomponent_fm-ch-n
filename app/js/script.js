const btnFloating = document.querySelector('#btn-floating');
const socialMedia = document.querySelector('#social-media');

btnFloating.addEventListener('click', (event) => {
    btnFloating.classList.toggle('clicked');
    if (socialMedia.classList.contains('fade-in')) {
        socialMedia.classList.remove('fade-in');
        socialMedia.classList.add('fade-out');

    } else if (socialMedia.classList.contains('fade-out')) {
        socialMedia.classList.remove('fade-out');
        socialMedia.classList.add('fade-in');
    } else {
        socialMedia.classList.add('fade-in');
    }
});