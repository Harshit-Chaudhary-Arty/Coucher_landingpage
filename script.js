// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });






function navanimation(){
    gsap.to("#nav1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true,
           }
    })
    
    gsap.to("#nav2 #links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true,
           }
    })
}
navanimation()















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

gsap.from("#info",{
    x:-20,
    delay:1.2,
    duration:1.4,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #section2",
        scroll:"body",        
        start:"top 50%",  
        end:"top 15%", 
        // markers:true,
        scrub:true,
         scrub:3,
    }
})

gsap.from("#folders .f",{
    x:35,
    duration:1,
    opacity:0,
    stagger:0.4,
    
    scrollTrigger:{
        trigger:"#page2 #section2",
        scroll:"body",        
        start:"top 50%",  
        end:"top 15%", 
        // markers:true,
        scrub:true,
         scrub:3,

    }
})


gsap.from("#headings .h",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        scroll:"body",
        trigger:"#headings .h",
        start:"top 28%",
        // markers:true,
        end:"top 16%",
        scrub:true,
        scrub:3,
    }
})


gsap.from("#footer",{
    y:150,
    opacity:0,
    duration:1.7,
    stagger:0.6,
    scrollTrigger:{
        scroll:"body",
        trigger:"#footer",
        start:"top 90%",
        // markers:true
    }
})

function pointeranim(){
    var area= document.querySelector("body")
    var pointer =document.querySelector("#pointer")
    area.addEventListener("mouseenter",function(){
        gsap.to(pointer,{
            scale:1,
            opacity:1
        })
    })
    area.addEventListener("mousemove",function(dets){
        gsap.to(pointer,{
            left:dets.x,
            top:dets.y,
        })
    })
}
pointeranim()

    







