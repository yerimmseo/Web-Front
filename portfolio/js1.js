const body = document.querySelector('body');
const header = document.querySelector('.header');
const hidden_btn = document.querySelector('.hidden-btn');
const hidden_nav_bar = document.querySelector('.hidden-nav-bar');
const hidden_nav_bar_body = document.querySelector('.hidden-nav-bar-body');
const close_btn = document.querySelector('.close-btn');

function openHiddenNavBar() {
    hidden_nav_bar_body.setAttribute("style", "display: flex");
}

function closeHiddenNavBar() {
    // x버튼 누를 시 메뉴 버튼의 checked를 해제시켜준다.
    hidden_btn.checked = false;
    close_btn.checked = false;
    hidden_nav_bar_body.setAttribute("style", "display: none");
}

function scroll_off() {
    body.style.overflow = 'hidden';
}

function scroll_on() {
    body.style.removeProperty('overflow');
}

window.addEventListener('scroll', (e) => {
    if (pageYOffset >= 10) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

hidden_btn.addEventListener('click', (e) => {
    openHiddenNavBar();
    scroll_off();
});

close_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scroll_on();
});

hidden_nav_bar_body.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scroll_on();
});

