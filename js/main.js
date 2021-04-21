let imageFrontPage1=document.querySelector(".secound-image.nr1");
let imageFrontPage2=document.querySelector(".secound-image.nr2");
let tree=document.querySelector(".icofont-tree-alt");
let absoluteDiv=document.querySelector(".absolute-div");
let navigation=document.querySelector("nav");
let atractions=document.querySelectorAll(".atraction");
let iconDivs=document.querySelectorAll(".icon-div");
let descriptions=document.querySelectorAll(".description");
let descriptionsFull=document.querySelectorAll(".atraction-description-div")
let navMobUll=document.querySelector(".nav-mob-ul");
let hamburger=document.querySelector(".icofont-navigation-menu");
let hamburgerExit=document.querySelector(".icofont-close");

let tl=new TimelineMax();
tl.to(imageFrontPage1,0,{opacity:0,x:-20});
tl.to(imageFrontPage2,0,{opacity:0,x:-20});
TweenMax.to(tree,0,{opacity:0});

tl.to(imageFrontPage1,.7,{opacity:1,x:0,delay:1});
tl.to(imageFrontPage2,.7,{opacity:1,x:0,delay:1},"=-1.2");
tl.to(tree,.7,{opacity:1},"=-0.7");

descriptions.forEach((item,i)=>{
  const tlDesc=new TimelineMax();
  tlDesc.to(descriptions[i],0,{opacity:0})
})


let tlpercentage=new TimelineMax({onUpdate:updatePercentage});

tlpercentage.to(absoluteDiv,1,{y:170});

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    triggerElement: ".img-side",
    duration:500,
    triggerHook:0.15,
    offset:100
  })
  .setTween(tlpercentage)
  .addTo(controller);

let sceneNav = new ScrollMagic.Scene({
    triggerElement: ".img-side",
    triggerHook:0,
    offset:10
  })
  .setClassToggle(".nav-desk","active")
  .addTo(controller);

let scenetree = new ScrollMagic.Scene({
    triggerElement: ".img-side",
    triggerHook:0,
    offset:10
  })
  .setClassToggle(".icofont-tree-alt","active")
  .addTo(controller);

let sceneArrow = new ScrollMagic.Scene({
    triggerElement: ".img-side",
    triggerHook:0,
    offset:170
  })
  .setClassToggle(".bootom-arrow","active")
  .addTo(controller);

function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tlpercentage.progress();
    }

atractions.forEach((item,i)=>{
  atractions[i].addEventListener("mouseenter",()=>{
    const tlAtract=new TimelineMax();
    tlAtract.to(iconDivs[i],.3,{scale:0.5});
    tlAtract.to(descriptions[i],.3,{opacity:1},"=-0.3")
    tlAtract.to(descriptionsFull[i],.3,{y:-20},"=-0.3")
  })
  atractions[i].addEventListener("mouseleave",()=>{
    const tlAtract=new TimelineMax();
    tlAtract.to(descriptionsFull[i],.3,{y:0})
    tlAtract.to(descriptions[i],.3,{opacity:0},"=-0.3")
    tlAtract.to(iconDivs[i],.3,{scale:1},"=-0.3");
  })
})

hamburger.addEventListener("click",()=>{
  const tlEvent=new TimelineMax();
  tlEvent.to(navMobUll,0.3,{height:"auto"})
  tlEvent.to(hamburger,0.3,{scale:0,opacity:0},"=-0.3")
  tlEvent.to(hamburgerExit,0.3,{scale:1,opacity:1},"=-0.15")
})
hamburgerExit.addEventListener("click",()=>{
  const tlEvent=new TimelineMax();
  tlEvent.to(navMobUll,0.3,{height:"0"})
  tlEvent.to(hamburgerExit,0.3,{scale:0,opacity:0},"=-0.3")
  tlEvent.to(hamburger,0.3,{scale:1,opacity:1},"=-0.15")
})


let y=0;
var tid = setInterval(mycode, 3000);
function mycode() {
  tlTimer=new TimelineMax();
  x=(Math.floor((Math.random() * 8) + 0));
  if(x===y){
    x=(Math.floor((Math.random() * 8) + 0));
  }
  y=x;
  tlTimer.to(iconDivs[x],.3,{y:-20})
  tlTimer.to(iconDivs[x],.3,{y:0,delay:1})
}
function abortTimer() {
  clearInterval(tid);
}
