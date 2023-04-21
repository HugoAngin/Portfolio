let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

//Fancy Projects Page
let projectA = document.querySelector('.project-a');
let projectB = document.querySelector('.project-b');
let projectC = document.querySelector('.project-c');
let header = document.querySelector('.projects-header');


if(projectA) {
    projectA.addEventListener('click', () => {
        projectA.classList.toggle('fullscr');
        projectB.classList.toggle('rightright');
        projectC.classList.toggle('rightright');
    });
}

if(projectB) {
    projectB.addEventListener('click', () => {
        projectB.classList.toggle('fullscr');
        projectA.classList.toggle('left');
        projectC.classList.toggle('right');
    });
}

if(projectC) {
    projectC.addEventListener('click', () => {
        projectC.classList.toggle('fullscr');
        projectB.classList.toggle('leftleft');
        projectA.classList.toggle('leftleft');
    });
}

//Arrow Click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Parallax
timeline
.to('.name', 3, {y: -300})
.to('.expertise', 3, {y: -200}, '-=3')
.to('projects', 3, {top: 0}, '-=3')

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.addTo(controller);