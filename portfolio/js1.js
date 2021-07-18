const body = document.querySelector('body');
const hidden_btn = document.querySelector('.hidden-btn');
const hidden_nav_bar = document.querySelector('.hidden-nav-bar');
const hidden_nav_bar_body = document.querySelector('.hidden-nav-bar-body');
const close_btn = document.querySelector('.close-btn');
const header = document.querySelector('.header');

let scrollPosition = 0;

function closeHiddenNavBar() {
    // x버튼 누를 시 메뉴 버튼의 checked를 해제시켜준다.
    hidden_btn.checked = false;
    close_btn.checked = false;
    hidden_nav_bar_body.setAttribute("style", "display: none");
}

function scrollEnable() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `${scrollPosition}px`;
    body.style.width = '100%';
}

function scorllDisable() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

window.addEventListener('scroll', (e) => {
    if (pageYOffset >= 10) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

hidden_btn.addEventListener('click', (e) => {
    hidden_nav_bar_body.setAttribute("style", "display: flex");
    scrollEnable();
});

close_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    
    scorllDisable();
});

hidden_nav_bar_body.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scorllDisable();
});

