const log = document.querySelector('.log');
const reg = document.querySelector('.reg');

log.addEventListener('click', () => {
    log.style.background = 'white';
    log.style.color = 'black';
    reg.style.background = '';
    reg.style.color = '';
});

reg.addEventListener('click', () => {
    reg.style.background = 'white';
    reg.style.color = 'black';
    log.style.background = '';
    log.style.color = '';
});