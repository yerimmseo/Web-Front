const body = document.querySelector('body');
const header = document.querySelector('.header');

const home_btn = document.querySelector('#home');
const about_btn = document.querySelector('#about');
const skills_btn = document.querySelector('#skills');
const projects_btn = document.querySelector('#projects')
const contact_btn = document.querySelector('#contact');

const hidden_btn = document.querySelector('.hidden-btn');
const hidden_nav_bar = document.querySelector('.hidden-nav-bar');
const hidden_nav_bar_body = document.querySelector('.hidden-nav-bar-body');
const close_btn = document.querySelector('.close-btn');

const github_team = document.querySelector('.github-team');
const github = document.querySelector('#github');
const instagram = document.querySelector('#instagram');

function openHiddenNavBar() {
    hidden_nav_bar_body.setAttribute('style', 'display: flex');
}

function closeHiddenNavBar() {
    // x버튼 누를 시 메뉴 버튼의 checked를 해제시켜준다.
    hidden_btn.checked = false;
    close_btn.checked = false;
    hidden_nav_bar_body.setAttribute('style', 'display: none');
}

function scroll_off() {
    body.style.overflow = 'hidden';
}

function scroll_on() {
    body.style.removeProperty('overflow');
}


contact_btn.addEventListener('click', (e) => {
    document.querySelector('.contact-body').scrollIntoView(true);
});

projects_btn.addEventListener('click', (e) => {
    document.querySelector('.projects-body').scrollIntoView(true);
});

skills_btn.addEventListener('click', (e) => {
    document.querySelector('.skills-body').scrollIntoView(true);
});

about_btn.addEventListener('click', (e) => {
    document.querySelector('.about-body').scrollIntoView(true);
});

home_btn.addEventListener('click', (e) => {
    document.querySelector('.home-body').scrollIntoView(true);
});

// github_team.addEventListener('click', (e) => {
//     window.onload.open('https://github.com/TEAM-right/project-cafe.git'); 이거 왜 오류났지
// })

instagram.addEventListener('click', (e) => {
    window.onload.open('https://www.instagram.com/yerimmseo/');
});

github.addEventListener('click', (e) => {
    window.open('https://github.com/yerimmseo');
});

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

hidden_nav_bar_body.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scroll_on();
});

close_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scroll_on();
});