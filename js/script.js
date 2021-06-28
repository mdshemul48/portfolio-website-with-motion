
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

// animating all the content
tl.from(".content", {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})


// animating hero area 
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")


tl.from(".hero-design", {
    opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
}, "-=2")

// animating hero area design  
gsap.from(".square-anim", {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})

