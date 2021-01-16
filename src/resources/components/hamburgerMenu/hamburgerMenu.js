const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const navBackground = document.querySelector(".nav__background")

//Function get a element on which mouse click and add it active class
const activeClass = function(){
    console.log(this);
    const nameOfElement = this.classList[0];
    const activeClass = nameOfElement+'--active';
    this.classList.toggle(activeClass);
}

hamburger.addEventListener("click", activeClass, activeClass.bind(menu));
hamburger.addEventListener("click", activeClass.bind(menu));
hamburger.addEventListener("click", activeClass.bind(navBackground));