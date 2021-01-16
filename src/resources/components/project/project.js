
export const addPositionProject = () =>{
    
    const project = document.querySelectorAll('.project__wrapper');
    
    for (let element = 0; element < project.length; element++) {
        const child = project[element];
        element%2===0 ? child.classList.add('project__wrapper-right'): child.classList.add('project__wrapper-left')
    }
    
}

addPositionProject();


const axios = require('axios');

// const createProjects = (data) => {
//     const fragment = document.createDocumentFragment();
//     data.forEach(element => {
//         console.log(element);
//     })
// }

const getAllPosts =  async () =>{
    try {
        const { data } = await  axios.get('http://localhost:8081/posts')
        console.log(data)
        //createProjects(data);
    } catch (error) {
        console.log('Wystąpił błąd podczas pobrania projektów', error);
    }

};

const allButtons = document.querySelectorAll('.button--project .button__link');
allButtons.forEach(button => button.addEventListener('click', getAllPosts));