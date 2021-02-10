import './layout/body.scss'
import './layout/illustrations.scss'
import './layout/animationSvg/teacher.scss'
import './layout/animationSvg/student.scss'
import './layout/animationSvg/woman.scss'

import './components/menu/menu.scss';
import './components/menu/menu.js';
import './components/hamburgerMenu/hamburgerMenu.scss';
import './components/hamburgerMenu/hamburgerMenu.js';
import './components/button/button.scss';
import './components/button/button.js';
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
import './img/favicon.ico';
import './img/pit-op.jpg';

//import svg
import './img/iconmonstr-email-2.svg';
import './img/iconmonstr-facebook-6.svg';
import './img/iconmonstr-facebook-messenger-1.svg';
import './img/iconmonstr-mechanics.svg';
import './img/iconmonstr-culture.svg';
import './img/iconmonstr-learn.svg';
import './img/iconmonstr-nature.svg';
import './img/iconmonstr-programing.svg';
import './img/iconmonstr-code-13.svg';

//import functions and vars
import {addPositionProject, createProjects, addScrollTriggerProject} from './components/project/project';


//Others code to index.html
const axios = require('axios');

const getPosts =  async () =>{
    try {
        const { data } = await  axios.get('/projects?limit=4');
        const allProject =  createProjects(data);
    
        document.querySelector('.projects-wrapper').appendChild(allProject);
        addPositionProject();
        addScrollTriggerProject();
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};
document.onload = getPosts();

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