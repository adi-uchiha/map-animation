let svgpath = document.querySelector('path')
let pathLength = svgpath.getTotalLength()
let mapOpen = false;

let menuButton = document.getElementsByClassName('menuButton')
let menuText = document.getElementsByClassName('menuText')
let lineSvg = document.getElementsByClassName('line-svg')

menuButton[0].addEventListener("click", animate);

function animate() {
if(mapOpen){
    mapOpen = true
    menuText[0].classList.add('menuTextTransition')
    menuText[1].classList.add('menuTextTransition')
    menuText[2].classList.add('menuTextTransition')
  
    lineSvg[0].classList.add('line-svg-animate')
  
    setTimeout(function() {
      lineSvg[0].classList.remove('line-svg')
    }, 1000);
}

if(!mapOpen){
    mapOpen = false
    
}
  

  
}

// path.style.strokeDasharray = pathLength + ' ' + pathLength;
// path.style.strokeDashoffset = pathLength + ' ' + pathLength;

// window.addEventListener('click', () => {
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     var drawLength = pathLength * 100;
//     path.style.strokeDashoffset = pathLength - drawLength;
// })


