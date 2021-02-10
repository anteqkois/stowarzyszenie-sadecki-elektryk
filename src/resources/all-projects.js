import '../views/all-projects.html';

import './layout/body.scss'
import './layout/illustrations.scss'
import './layout/animationSvg/student.scss'

import './components/menu/menu.scss';
import './components/menu/menu.js';
import './components/hamburgerMenu/hamburgerMenu.scss';
import './components/hamburgerMenu/hamburgerMenu.js';
import './components/button/button.scss';
import './components/button/button.js';
import './components/project/project.scss';
import './components/project/project.js';
import './components/footer/footer.scss';
import './components/footer/footer.js';
import './components/heroImage/heroImage.scss'
import './components/titleForProjects/titleForProjects.scss'
import './components/titleForProjects/titleForProjects'

const axios = require('axios');

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

import './img/hero-image.jpg'

import {addPositionProject, createProjects, addScrollTriggerProject} from './components/project/project';

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

const heroImage = document.querySelector('.hero-image');

gsap.fromTo(heroImage, {opacity: 1, filter: 'grayscale(0%)'}, {opacity: 1, filter: 'grayscale(60%)',scrollTrigger: {
    trigger: '.projects-wrapper',
    start: '40px 50%',
    end: 'top top',
    scrub: 2,
}});

const changeForFirefox = ()=>{
    const elements = [document.querySelector('.menu'),
        (document.querySelector('.projects-wrapper')),
        (document.querySelector('.aid-wrapper')),
    ];
    elements.forEach(element => {
        element.classList.contains('menu') ? element.style.background = 'rgba(237, 241, 244, 0.95)': element.style.background = 'rgba(237, 241, 244, 0.15)';
    })
}

let firefoxAgent = window.navigator.userAgent.indexOf("Firefox") > -1;

firefoxAgent && changeForFirefox()