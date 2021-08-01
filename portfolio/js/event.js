// body
const body = document.querySelector('body');

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

// header
$(window).scroll(() => {
    var $header = $('.header');

    if (pageYOffset >= 10) {
        $header.addClass('on');
    } else {
        $header.removeClass('on');
    }
});

// nav-bar
$(function() {
    var $headerName = $('.header-name');
    var $homeBtn = $('#home');
    var $aboutBtn = $('#about');
    var $skillsBtn = $('#skills');
    var $projectsBtn = $('#projects');
    var $contactBtn = $('#contact');
   
    var $home = $('.home-body');
    var $about = $('.about-body');
    var $skills = $('.skills-body');
    var $projects = $('.projects-body');
    var $contact = $('.contact-body');

    $headerName.click(() => {
        $('html, body').stop().animate({scrollTop: $home.offset().top}, 50);
    })

    $homeBtn.click(() => {
        $('html, body').stop().animate({scrollTop: $home.offset().top}, 100);
    });

    $aboutBtn.click(() => {
        $('html, body').stop().animate({scrollTop: $about.offset().top}, 100);
    });

    $skillsBtn.click(() => {
        $('html, body').stop().animate({scrollTop: $skills.offset().top}, 100);
    });

    $projectsBtn.click(() => {
        $('html, body').stop().animate({scrollTop: $projects.offset().top}, 100);
    });

    $contactBtn.click(() => {
        $('html, body').stop().animate({scrollTop: $contact.offset().top}, 100);
    })
});

// hidden-nav-bar
function openHiddenNavBar() {
    hidden_nav_bar_body.setAttribute('style', 'display: flex');
}

function closeHiddenNavBar() {
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

// project
$(function() {
    var $project01 = $('#project01');
    var $project02 = $('#project02');
    var $project03 = $('#project03');
    var $projectView1 = $('.projects-view1');
    var $projectView2 = $('.projects-view2');
    var $projectView3 = $('.projects-view3');
    var $githubTeam = $('.github-team');

    $project01.click(() => {
        $projectView1.fadeIn(1000);
        $projectView2.fadeOut(0);
        $projectView3.fadeOut(0);
    })

    $project02.click(() => {
        $projectView1.fadeOut(0);
        $projectView2.fadeIn(1000);
        $projectView3.fadeOut(0);
    })

    $project03.click(() => {
        $projectView1.fadeOut(0);
        $projectView2.fadeOut(0);
        $projectView3.fadeIn(1000);
    })

    $githubTeam.click(()=> {
        window.open('https://github.com/TEAM-right/project-cafe.git');
        return false;
    });
});

// copyright
$(function() {
    var $github = $('#github');
    var $instagram = $('#instagram');

    $github.click(() => {
        window.open('https://github.com/yerimmseo');
        return false;
    });

    $instagram.click(() => {
        window.open('https://www.instagram.com/yerimmseo/');
        return false;
    });
});