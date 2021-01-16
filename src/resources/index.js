import './layout/index/body.scss'
import './layout/index/illustrations.scss'
import './layout/index/animationSvg.scss'
import './layout/index/background.js'

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

//import image
import './img/logo.png';
import './img/test1.jpg';
import './img/test2.jpg';
import './img/test3.jpg';
import './img/test4.jpg';
import './img/test5.jpg';
import './img/pit-op.jpg';

//import svg
import './img/iconmonstr-tablet-5.svg';
import './img/iconmonstr-email-2.svg';
import './img/iconmonstr-facebook-6.svg';
import './img/iconmonstr-facebook-messenger-1.svg';
import './img/iconmonstr-process-2.svg';

//import functions and vars
import {addPositionProject} from './components/project/project.js';


//Others code to index.html
let currentYear = new Date().getFullYear();
let copyright = `&copy; Copyright ${currentYear}, Antek Kois & Nikodem Kusiak. All rights reserved`;
document.querySelector('.copyright').innerHTML = copyright;