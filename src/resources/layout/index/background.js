//let activePhotos = '';
//
//const getSize = () =>{
//
//  const width = window.innerWidth
//  if(width < 768 ) return 'mobile-small';
//  if(width > 768 && width < 992 ) return 'mobile';
//  if(width > 992 && width < 1200 ) return 'middle';
//  if(width > 1200 && width < 1600 ) return 'desktop';
//  if(width > 1600 ) return 'desktop-large';
//}
//
//
//const checkWidth = () =>{
//  const size = getSize();
//  setPhoto(size);
//}
//
//
//const setPhoto = (display) =>{
//  
//  if(display!==activePhotos){
//    const url = `./img/background-${display}.svg`
//    activePhotos = display;
//    document.querySelector('.background').setAttribute('src', url);
//  }
//
//}
//
//window.addEventListener('resize', checkWidth);
//document.onload = checkWidth();
//