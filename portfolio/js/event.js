// body
const body = document.querySelector('body');
// header
const header = document.querySelector('.header');
// nav-bar
const home_btn = document.querySelector('#home');
const about_btn = document.querySelector('#about');
const skills_btn = document.querySelector('#skills');
const projects_btn = document.querySelector('#projects')
const contact_btn = document.querySelector('#contact');
// hidden-nav-bar
const hidden_btn = document.querySelector('.hidden-btn');
const hidden_nav_bar = document.querySelector('.hidden-nav-bar');
const hidden_nav_bar_body = document.querySelector('.hidden-nav-bar-body');
const close_btn = document.querySelector('.close-btn');

const h_home_btn = document.querySelector('#h-home');
const h_about_btn = document.querySelector('#h-about');
const h_skills_btn = document.querySelector('#h-skills');
const h_projects_btn = document.querySelector('#h-projects')
const h_contact_btn = document.querySelector('#h-contact');
// projects
const project1_btn = document.querySelector('#project01');
const project2_btn = document.querySelector('#project02');
const project3_btn = document.querySelector('#project03');

const project_view1 = document.querySelector('.projects-view1');
const project_view2 = document.querySelector('.projects-view2');
const project_view3 = document.querySelector('.projects-view3');

const github_team = document.querySelector('.github-team');

// copyright
const github = document.querySelector('#github');
const instagram = document.querySelector('#instagram');

// header event
window.addEventListener('scroll', (e) => {
    if (pageYOffset >= 10) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

// nav-bar event
home_btn.addEventListener('click', (e) => {
    document.querySelector('.home-body').scrollIntoView(true);
});

about_btn.addEventListener('click', (e) => {
    document.querySelector('.about-body').scrollIntoView(true);
});

skills_btn.addEventListener('click', (e) => {
    document.querySelector('.skills-body').scrollIntoView(true);
});

projects_btn.addEventListener('click', (e) => {
    document.querySelector('.projects-body').scrollIntoView(true);
});

contact_btn.addEventListener('click', (e) => {
    document.querySelector('.contact-body').scrollIntoView(true);
});

// hidden-nav-bar event
function openHiddenNavBar() {
    hidden_nav_bar_body.setAttribute('style', 'display: flex');
}

function closeHiddenNavBar() {
    // x버튼 누를 시 메뉴 버튼의 checked를 해제시켜준다.
    hidden_btn.checked = false;
    close_btn.checked = false;
    hidden_nav_bar_body.setAttribute('style', 'display: none');
}

function scrollOff() {
    body.style.overflow = 'hidden';
}

function scrollOn() {
    body.style.removeProperty('overflow');
}

hidden_btn.addEventListener('click', (e) => {
    openHiddenNavBar();
    scrollOff();
});

hidden_nav_bar_body.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
});

close_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
});

h_home_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
    document.querySelector('.home-body').scrollIntoView(true);
});

h_about_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
    document.querySelector('.about-body').scrollIntoView(true);
});

h_skills_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
    document.querySelector('.skills-body').scrollIntoView(true);
});

h_projects_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
    document.querySelector('.projects-body').scrollIntoView(true);
});

h_contact_btn.addEventListener('click', (e) => {
    closeHiddenNavBar();
    scrollOn();
    document.querySelector('.contact-body').scrollIntoView(true);
});

// project -> github바로가기 event
$(document).ready(function(){
    $('#project01').click(function() {
        $('.projects-view1').fadeIn(1000);
        $('.projects-view2').fadeOut(0);
        $('.projects-view3').fadeOut(0);
    })
});

$(document).ready(function(){
    $('#project02').click(function() {
        $('.projects-view1').fadeOut(0);
        $('.projects-view2').fadeIn(1000);
        $('.projects-view3').fadeOut(0);
    })
});

$(document).ready(function(){
    $('#project03').click(function() {
        $('.projects-view1').fadeOut(0);
        $('.projects-view2').fadeOut(0);
        $('.projects-view3').fadeIn(1000);
    })
});

github_team.addEventListener('click', (e) => {
    window.open('https://github.com/TEAM-right/project-cafe.git');
});

// copyright -> git, instagram event
github.addEventListener('click', (e) => {
    window.open('https://github.com/yerimmseo');
});

instagram.addEventListener('click', (e) => {
    window.open('https://www.instagram.com/yerimmseo/');
});