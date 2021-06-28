
gsap.registerPlugin(ScrollTrigger)

const timeLine = gsap.timeline()


timeLine.from(".content", {
    u: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})