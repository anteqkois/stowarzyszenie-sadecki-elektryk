import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const axios = require('axios');

const addPositionProject = () =>{
    
    const project = document.querySelectorAll('.project__wrapper');
    
    for (let element = 0; element < project.length; element++) {
        const child = project[element];
        element%2===0 ? child.classList.add('project__wrapper-left'): child.classList.add('project__wrapper-right')
    }
    
}

class Project {
    constructor(dataOfProject){
        this.projectWrapper = this.createProjectWrapper();
        this.project = this.createProject();
        this.createProjectprojectImage(dataOfProject, this.project);
        this.createProjectTitle(dataOfProject, this.project);
        this.createProjectData(dataOfProject, this.project);
        this.createProjectDescription(dataOfProject, this.project);
        this.createProjectButton(this.project);
        this.projectWrapper.appendChild(this.project);
        return this.projectWrapper;
    }
    createProjectWrapper(){
        const Wrapper = document.createElement('div');
        Wrapper.classList.add('project__wrapper');
        return Wrapper;
    }
    createProject(){
        const project = document.createElement('article');
        project.classList.add('project');
        return project;
    }
    createProjectprojectImage(dataOfProject, project){
        const projectImageWrapper = document.createElement('div');
        projectImageWrapper.classList.add('project__imgage-wrapper');
        const projectImage = document.createElement('img');
        const src = `./img/iconmonstr-${ dataOfProject.category }.svg`;
        projectImage.setAttribute('src', src);
        projectImage.setAttribute('loading', 'lazy');
        projectImage.setAttribute('alt', 'image representation of project category');
        projectImage.classList.add('project__image');
        projectImageWrapper.appendChild(projectImage);
        project.appendChild(projectImageWrapper);
    }
    createProjectTitle(dataOfProject, project){
        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project__title');
        projectTitle.innerHTML = dataOfProject.title;
        project.appendChild(projectTitle);
    }
    createProjectData(dataOfProject, project){
        const projectDate = document.createElement('p');
        projectDate.classList.add('project__date');
        const date = new Date(dataOfProject.date);
        const dateToPut = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
        projectDate.innerHTML = dateToPut;
        project.appendChild(projectDate);
    }
    createProjectDescription(dataOfProject, project){
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project__description')
        projectDescription.innerHTML = dataOfProject.description;
        project.appendChild(projectDescription);
    }
    createProjectButton(project){
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('project__button__wrpapper');

        const button = document.createElement('div');
        button.classList.add('project__button');

        const rightButton = document.createElement('button');
        rightButton.classList.add('button');
        rightButton.classList.add('button--project');

        const span = document.createElement('a');
        span.innerHTML = 'Wszystkie projekty';
        span.classList.add('button__link');
        span.setAttribute('data-text', 'Wszystkie projekty');
        span.setAttribute('href', 'http://localhost:8081/all-projects');

        const butttonIcon = document.createElement('div');
        butttonIcon.classList.add('button__icon');

        span.appendChild(butttonIcon);
        rightButton.appendChild(span);
        button.appendChild(rightButton);
        buttonWrapper.appendChild(button);

        project.appendChild(buttonWrapper);
    }
};

const searchNameCategory = async (id) =>{
    try {
        const  {data}  = await axios.get(`/categories/${id}`);
        //console.log(data.category);
        return data.category;
    } catch (error) {
        console.log('Wystąpił błąd podczas wyszukiwania kategorii', error);
    }
};

const addImages = ()=>{
    const allProjectImage = document.querySelectorAll('.project__image');
    allProjectImage.forEach( (element) =>{
        console.log(element.getAttribute('src'));
    })
}


/* const categoryName = await searchNameCategory(element.category)
.then( result => { 
    console.log(result);
    return result;
}); */

const createProjects = (data) => {
    const fragment = document.createDocumentFragment();
    data.forEach( async (element) => {
        const project = new Project(element);
        fragment.appendChild(project);
    })
    return fragment;
}

// GSAP
const illustration = document.querySelector('.projects-wrapper__illustartion');

gsap.fromTo(illustration, {y: '-=150', x: '-=400', opacity:0},{y: 0, x: 0, opacity:1, scrollTrigger: {
        trigger: '.projects-wrapper__illustartion',
        start: 'top 60%',
        end: 'top 20%',
        scrub: 2,
    }})


const addScrollTriggerProject = ()=>{
    const projects = document.querySelectorAll('.project');

    projects.forEach(project =>{
        gsap.fromTo(project, {y: '+=100', opacity: 0},{y: 0, opacity: 1, duration: 2, scrollTrigger: {
            trigger: project,
            start: '-20% 85%',
        }})
    })

}
export {addPositionProject, addImages, createProjects, addScrollTriggerProject};