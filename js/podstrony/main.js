let navigation=document.querySelector("nav");
let navMobUll=document.querySelector(".nav-mob-ul");
let hamburger=document.querySelector(".icofont-navigation-menu");
let hamburgerExit=document.querySelector(".icofont-close");

const controller = new ScrollMagic.Controller();

let sceneNav = new ScrollMagic.Scene({
    triggerElement: ".img-side",
    triggerHook:0,
    offset:10
  })
  .setClassToggle(".nav-desk","active")
  .addTo(controller);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tlpercentage.progress();
    }

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
