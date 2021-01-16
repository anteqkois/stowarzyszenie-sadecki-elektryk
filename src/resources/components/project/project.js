
export const addPositionProject = () =>{
    
    const project = document.querySelectorAll('.project__wrapper');
    
    for (let element = 0; element < project.length; element++) {
        const child = project[element];
        element%2===0 ? child.classList.add('project__wrapper-left'): child.classList.add('project__wrapper-right')
    }
    
}

const axios = require('axios');


const createButton = () =>{
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
    span.setAttribute('href', 'http://localhost:8081/posts');

    const butttonIcon = document.createElement('div');
    butttonIcon.classList.add('button__icon');

    span.appendChild(butttonIcon);
    rightButton.appendChild(span);
    button.appendChild(rightButton);
    buttonWrapper.appendChild(button);

    return buttonWrapper;
};

const createOneProject = (dataOfProject) =>{
    const projectWrapper = document.createElement('div');
    projectWrapper.classList.add('project__wrapper');

    const project = document.createElement('article');
    project.classList.add('project');

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

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerHTML = dataOfProject.title;
    project.appendChild(projectTitle);

    const projectDate = document.createElement('p');
    projectDate.classList.add('project__date');
    projectDate.innerHTML = dataOfProject.date;
    project.appendChild(projectDate);

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project__description')
    projectDescription.innerHTML = dataOfProject.description;
    project.appendChild(projectDescription);

    const projectButton = createButton();
    project.appendChild(projectButton);
    
    projectWrapper.appendChild(project);

    return projectWrapper;
}

const createProjects = (data) => {
    const fragment = document.createDocumentFragment();
    data.forEach(element => {
        const project = createOneProject(element);
        fragment.appendChild(project);
    })
    return fragment;
}

const getAllPosts =  async () =>{
    try {
        const { data } = await  axios.get('http://localhost:8081/posts');
        const allProject =createProjects(data);
        document.querySelector('.projects-wrapper').appendChild(allProject);
        addPositionProject();
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};

document.onload = getAllPosts();
//const allButtons = document.querySelectorAll('.button--project .button__link');
//allButtons.forEach(button => button.addEventListener('click', getAllPosts));