import '../views/all-projects.html';
import './components/hamburgerMenu/hamburgerMenu';
import './components/heroImage/heroImage.scss'
import './components/titleForProjects/titleForProjects.scss'
const axios = require('axios');

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 


import './img/test.jpg'

import {addPositionProject, createProjects, Project} from './components/project/project';









//code

const getAllPosts =  async () =>{
    try {
        const { data } = await  axios.get('/projects');
        const allProject = createProjects(data);
        document.querySelector('.projects-wrapper').appendChild(allProject);
        addPositionProject();
        addScrollTriggerProject();
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};

document.onload = getAllPosts();


// GSAP
const title = document.querySelector('.title');

gsap.fromTo(title, {y: 0, opacity: 1}, {y: '-=100', opacity: 0, scrollTrigger: {
    trigger: '.projects-wrapper',
    start: 'top 90%',
    end: 'top 60%',
    scrub: 2,
}});

const addScrollTriggerProject = ()=>{
    const projects = document.querySelectorAll('.project');

    projects.forEach(project =>{
        gsap.fromTo(project, {y: '+=100', opacity: 0},{y: 0, opacity: 1, duration: 2, scrollTrigger: {
            trigger: project,
            start: '-20% 85%',
            markers: true,
        }})
    })

}

const heroImage = document.querySelector('.hero-image');

gsap.fromTo(heroImage, {opacity: 1, filter: 'grayscale(0%)'}, {opacity: 1, filter: 'grayscale(100%)',scrollTrigger: {
    trigger: '.projects-wrapper',
    start: 'top 80%',
    end: 'top top',
    scrub: 2,
}});




/*
const title ={
    title: document.querySelector('.title'),
    isActive: true,
    toggleTitle: function(){
        //console.log(this)
        this.title.classList.toggle('title--active');
        this.isActive = !this.isActive;
    },
    addActive: function(){
        !this.isActive && this.toggleTitle();
    },
    removeActive: function(){
        this.isActive && this.toggleTitle();
    },
    titleObserver: function(){
        window.scrollY > 100 ? this.addActive() : this.removeActive();
    }
}

window.addEventListener('scroll', function(){
    title.titleObserver();
});





const title = document.querySelector('.title');
const heightWindow = window.innerHeight;

const scroll = window.scrollY;
const isActive = true;

const toggleTitle = () =>{
    title.classList.toggle('title--active');
    isActive = !isActive;
}


const addActive = ()=>{
    !isActive ?  toggleTitle() : '';
}
const removeActive = ()=>{
    isActive ?  toggleTitle() : '';
}

const titleObserver = ()=>{
    window.scrollY > 100 ? addActive() : removeActive();
}

window.addEventListener('scroll', titleObserver)
















const main = document.querySelector('.main');

const arrow = {
    arrow: document.querySelector('.arrows__wrapper'),
    isActive: true,
    checkOffSet: function() {
        //console.log(main.getBoundingClientRect().top)
        main.getBoundingClientRect().top > 500 ? this.setActive() : this.unsetActive();
    },
    setActive: function(){
        !this.isActive && this.toggleActive(); 
    },
    unsetActive: function(){
        this.isActive && this.toggleActive(); 
    },
    toggleActive: function(){
        this.isActive = !this.isActive;
        this.arrow.classList.toggle('arrows__wrapper--active');
    }
}

window.addEventListener('scroll', ()=>{
    arrow.checkOffSet();
})*/
