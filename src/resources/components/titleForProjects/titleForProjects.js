import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const title = document.querySelector('.title');

gsap.fromTo(title, {y: 0, opacity: 1}, {y: '-=100', opacity: 0, scrollTrigger: {
    trigger: '.projects-wrapper',
    start: 'top 90%',
    end: 'top 60%',
    scrub: 2,
}});

const scrollTo = () =>{
    window.scroll({
        top: window.innerHeight*0.7,
        left: 0,
    })
    //document.querySelector('.projects-wrapper').scrollIntoView({ 
    //});
}

title.addEventListener('click', scrollTo);