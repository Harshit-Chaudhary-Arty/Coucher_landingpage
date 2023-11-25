const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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

// gsap.from("#folders .f",{
//     x:30,
//     duration:1.2,
//     opacity:0,
//     stagger:0.3,
//     scrollTrigger:"#folders"
//     scrollTrigger:{
//         trigger:"#page2 #section2",
//         scroll:"body",
//         markers:true,     
//         start:"top 50%"   
//     }
// })

gsap.to("#page2 section2",{
    y:-30,
    duration:3.2,
    opacity:0,
    // delay:1,
    scrollTrigger:"#page2 section2",
})