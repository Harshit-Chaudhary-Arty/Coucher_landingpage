// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.from("#nav,#logo ,#links a,#sign",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:0.2
})

gsap.from("#hero",{
    y:-30,
    delay:0.9,
    duration:1,
    opacity:0,
    stagger:0.6,
})

gsap.from("#hleft div",{
    y:-10,
    delay:0.9,
    duration:1.2,
    opacity:0,
    stagger:0.3,
})

gsap.from("#hright",{
    x:20,
    delay:1.1,
    duration:1.2,
    opacity:0,
    stagger:0.3,
})

gsap.from("#section2",{
    x:-20,
    delay:1.2,
    duration:1.4,
    opacity:0,
    stagger:0.3,
    scrollTrigger:"#section2"
})

gsap.from("#folders .f",{
    x:35,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 #section2",
        scroll:"body",
             
        start:"top 40%",  
        end:"top 90%", 
    }
})


gsap.from("#headings .h",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        scroll:"body",
        trigger:"#headings .h",
        start:"top 30%",
        // markers:true,
        // end:"top 50%"
    }
})


