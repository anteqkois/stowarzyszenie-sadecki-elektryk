import gsap from "gsap";

const logo = document.querySelector('.association__logo');
const underLighting = document.getElementById('underLighting');
const lightingAndText = document.getElementById('lightingAndText');
const textOnLighting = document.getElementById('text');
const largeGearAndText = document.getElementById('largeGearAndText');
const textOnGear = document.getElementById('curveText');
const smalGear = document.getElementById('smalGear');

const tl = gsap.timeline({duration: 1,});

tl.set(underLighting, {y: '-=400', opacity: 0});
tl.set(lightingAndText, {x: '-=100', y: '-=300', opacity: 0});
tl.set(largeGearAndText, {x: '+=100', y: '-=300', opacity: 0});
tl.set(smalGear, {x: '+=400', y: '+=100', opacity: 0});
tl.set(textOnLighting, {opacity: 0});
tl.set(textOnGear, {opacity: 0});

tl.to(logo, {opacity: 1})
    .to(underLighting, {y: 0, opacity: 1})
    .to(lightingAndText, {x: 0, y: 0, opacity: 1})
    .to(largeGearAndText, {x: 0, y: 0, opacity: 1})
    .to(smalGear, {x: 0, y: 0, opacity: 1},)
    .addLabel('showText')
    .to(textOnLighting, {opacity: 1, duration: 3}, 'showText')
    .to(textOnGear, {opacity: 1, duration: 3}, 'showText')
//    
//tl.to(logo, {opacity: 1}, 'logoOn')
//    .to(underLighting, {y: 0, opacity: 1}, 'logoOn')
//    .to(lightingAndText, {x: 0, y: 0, opacity: 1}, 'logoOn')
//    .to(largeGearAndText, {x: 0, y: 0, opacity: 1}, 'logoOn')
//    .to(smalGear, {y: 0, opacity: 1}, 'logoOn')
