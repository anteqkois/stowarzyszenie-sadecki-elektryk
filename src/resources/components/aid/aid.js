import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const fabricDescriptionItems = (numberOfActiveSteps, widthDisplay) => {
    instruction.instructionTextList.innerHTML = '';
    const fabricToSmall = (number) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = instruction.instructionText[number]
        listItem.classList.add('aid-instruction__step-descriptions-item');
        listItem.classList.add('aid-instruction__step-descriptions-item--active');
        return listItem;
    }
    const fabricToLarge = (number) => {
        const root = document.createDocumentFragment();

        for (const element of instruction.instructionText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = element;
            listItem.classList.add('aid-instruction__step-descriptions-item');
            if(number == instruction.instructionText.indexOf(element)){
                listItem.classList.add('aid-instruction__step-descriptions-item--active');
            }
            root.appendChild(listItem);
        }
        return root;       
    }

    return (widthDisplay < 992 ? fabricToSmall(numberOfActiveSteps) : fabricToLarge(numberOfActiveSteps));

}

const changeActive = (e) =>{
    const removeHideAnimationFrom = instruction.instructionIconsActive;
    instruction.instructionIconsActive.classList.add('aid-instruction__step-icons-item--pastActive');
    
    setTimeout(() => {
        removeHideAnimationFrom.classList.remove('aid-instruction__step-icons-item--pastActive');
    },1000);
    
    
    instruction.instructionIconsActive.classList.remove('aid-instruction__step-icons-item--active');
    instruction.instructionStepActive.forEach(step => step.classList.remove('aid-instruction-step--active'));

    try{
        const nextActiveStep = `.aid-instruction-step--${e.target.getAttribute('data-number')}`;
        const newActiveStep = Array.from(document.querySelectorAll(nextActiveStep));
        newActiveStep.forEach(step => step.classList.add('aid-instruction-step--active'));
        e.target.classList.add('aid-instruction__step-icons-item--active');
        instruction.setActiveIcon(e.target);
        instruction.setPassedIcon(e.target.getAttribute('data-number'));

    }catch{
        const nextActiveStep = `.aid-instruction-step--${e.getAttribute('data-number')}`;
        const newActiveStep = Array.from(document.querySelectorAll(nextActiveStep));
        newActiveStep.forEach(step => step.classList.add('aid-instruction-step--active'));
        e.classList.add('aid-instruction__step-icons-item--active');
        instruction.setActiveIcon(e);
        instruction.setPassedIcon(e.getAttribute('data-number'));
    }

    instruction.setInstructionText();
}

let instruction = {
    instructionIcons : Array.from(document.querySelectorAll('.aid-instruction__step-icons-item')),
    instructionIconsActive : document.querySelector('.aid-instruction__step-icons-item--active'),
    instructionStepActive : Array.from(document.querySelectorAll('.aid-instruction-step--active')),
    instructionIconsPassed :  Array.from(document.querySelectorAll('.aid-instruction__step-icons-item--passed')),
    instructionTextList :  document.querySelector('.aid-instruction__step-descriptions'),
    instructionText : [
        'Uzupełnij PIT-OP swoim danymi osobowymi, rok za który składane jest oświadczenia oraz wypełnij rubrykę z miejscem składania oświadczenia.',
        'Uzuopełnij numer KRS następujaco: 0000309499.',
        'W rubryce uzupełniającej, jako cel szczwegółowy wpisz: "Sądecki Elektryk, oraz wyraź zgodę w rubryce 11."', 
        'Podpisz swoje oświadczenie',
        'Koniec! PIT-OP możesz także wypełnić korzystająć z aplikacji e-pity dostępnej na stronie Pallotyńskiej Fundacji Misyjnej<a href="https://salvatti.pl/">Salvatti.pl</a>'
        ],
    instructionTextActive : document.querySelector('.aid-instruction__step-descriptions-item--active'),

    setInstructionText : function(){
        const newList = fabricDescriptionItems(this.instructionIconsActive.getAttribute('data-number'), window.innerWidth);
        this.instructionTextList.appendChild(newList);
    },
    setActiveIcon : function(newActive){
        function notNumber(){
            instruction.instructionIconsActive = document.querySelector('.aid-instruction__step-icons-item--active');
        }
        function isNumber(newActive){
            instruction.instructionIconsActive = newActive;
        }
        
        instruction.instructionStepActive = Array.from(document.querySelectorAll('.aid-instruction-step--active'));
        (newActive ? isNumber(newActive) : notNumber());
    },
    setPassedIcon : function(number){
        this.instructionIconsPassed.forEach(icon => icon.classList.remove('aid-instruction__step-icons-item--passed'));
        this.instructionIconsPassed.splice(0, this.instructionIconsPassed.length);

        this.instructionIcons.forEach(icon => {
            if(icon.getAttribute('data-number') < number){
                icon.classList.add('aid-instruction__step-icons-item--passed');
                this.instructionIconsPassed.push(icon);
            }
        })
    },
    addListenerToIcons : function(){
        this.instructionIcons.forEach(icon => icon.addEventListener(('click'), changeActive));
    },
    
};

const nextStep = () =>{
    const activeIcon = parseInt(instruction.instructionIconsActive.getAttribute('data-number'));
    const nextIcon = instruction.instructionIcons[activeIcon+1];

    if(nextIcon){
        changeActive(nextIcon)
    }

}

const button = document.querySelector('.aid-instruction__button .button__link')
button.addEventListener('click', nextStep)



// Create a condition that targets viewports at least 992px wide
const mediaQuery = window.matchMedia('(min-width: 992px)')

function handleTabletChange(e) {
  // Check if the media query is true
    
    instruction.addListenerToIcons();

    if (e.matches) {
    // Then log the following message to the console
    //console.log('large')
    instruction.setActiveIcon();
    instruction.setInstructionText();
    }
    else{
    instruction.setActiveIcon();
    instruction.setInstructionText();
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

const description = document.querySelector('.aid-description__wrapper');
const illustration =  document.querySelector('.aid-illustartion__wrapper');
const text =  document.querySelector('.aid-instruction__text');
const img =  document.querySelector('.aid-instruction__steps-view');
const listIcon =  document.querySelector('.aid-instruction__step-icons');

gsap.fromTo([description, illustration], {opacity: 0, y: '+=100px'}, {opacity: 1, y: 0, duration: 2, scrollTrigger: {
    trigger: '.aid-wrapper',
    start: 'top 75%',
}})

const tl = gsap.timeline({scrollTrigger: {
    trigger: '.aid-instruction__text',
    start: 'top 80%',
    markers: true,
}});


tl.set(text, {x: '-=400'});
tl.set(img, {x: '+=100'});

tl.to(text, {x: 0, opacity: 1, duration: 1})
    .to(img, {x: 0, opacity: 1, duration: 1})
    .to(listIcon, { opacity: 1, duration: 1})