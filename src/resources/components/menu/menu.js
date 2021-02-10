const menu = document.querySelector('.menu');

const throttle = (fn, waitTime) => {
    let wait = false;
    return function(){
        if(!wait){
            fn();
            wait = true;
            setTimeout( function(){
                wait = false;
            }, waitTime)
            
        }
        
    }
}

let isActive = true;

const toggleActive = (state) =>{
    
    if(!(state == isActive)){
        menu.classList.toggle('menu--active')
        isActive = !isActive;
    }
}

let yOffset = window.pageYOffset;

const checkScroll = () => {
    
    (yOffset <= window.pageYOffset) ? throttle(toggleActive(false), 1000) : throttle(toggleActive(true), 1000);
    
    yOffset = window.pageYOffset;
}

// Create a condition that targets viewports at least 992px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
    // Check if the media query is true
    
    
    if (e.matches) {
        menu.classList.add('menu--active')
        window.onscroll = throttle(checkScroll, 200);
        
    }
    else{
        menu.classList.remove('menu--active')
        window.onscroll = null;
        
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery) 