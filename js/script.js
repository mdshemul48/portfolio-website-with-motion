
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()


tl.from(".content", {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})


tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
})