import './layout/index/body.scss'
import './layout/index/illustrations.scss'
import './layout/index/animationSvg.scss'

import './components/menu/menu.scss';
import './components/menu/menu.js';
import './components/hamburgerMenu/hamburgerMenu.scss';
import './components/hamburgerMenu/hamburgerMenu.js';
import './components/button/button.scss';
import './components/button/button.js';
import './components/darkMode/darkMode.scss';
import './components/darkMode/darkMode.js';
import './components/project/project.scss';
import './components/project/project.js';
import './components/aid/aid.scss';
import './components/aid/aid.js';
import './components/footer/footer.scss';
import './components/footer/footer.js';
import './components/association/association.scss';
import './components/association/association.js';

//import image
import './img/logo.svg';
import './img/logo.ico';
import './img/pit-op.jpg';

//import svg
import './img/iconmonstr-tablet-5.svg';
import './img/iconmonstr-email-2.svg';
import './img/iconmonstr-facebook-6.svg';
import './img/iconmonstr-facebook-messenger-1.svg';
import './img/iconmonstr-mechanics.svg';
import './img/iconmonstr-culture.svg';
import './img/iconmonstr-learn.svg';
import './img/iconmonstr-nature.svg';
import './img/iconmonstr-programming.svg';

//import functions and vars
import {addPositionProject, createProjects, Project, addScrollTriggerProject} from './components/project/project';


//Others code to index.html
const axios = require('axios');

const getPosts =  async () =>{
    try {
        const { data } = await  axios.get('/projects?limit=4');
        const allProject = createProjects(data);
        document.querySelector('.projects-wrapper').appendChild(allProject);
        addPositionProject();
        addScrollTriggerProject();
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};
document.onload = getPosts()

let currentYear = new Date().getFullYear();
let copyright = `&copy; Copyright ${currentYear}, Antek Kois & Nikodem Kusiak. All rights reserved`;
document.querySelector('.copyright').innerHTML = copyright;