import '../views/all-projects.html';
import './components/hamburgerMenu/hamburgerMenu';
import './components/heroImage/heroImage.scss'
import './components/arrows/arrows.scss'
const axios = require('axios');

import './img/test.jpg'

import {addPositionProject, createProjects, Project} from './components/project/project';









//code

const getAllPosts =  async () =>{
    try {
        const { data } = await  axios.get('http://localhost:8081/projects');
        const allProject = createProjects(data);
        document.querySelector('.projects-wrapper').appendChild(allProject);
        addPositionProject();
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};

document.onload = getAllPosts();


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
})
