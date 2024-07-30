 var l1=gsap.timeline()
 
 l1.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    stagger:0.3,
    duration:0.4
})
l1.from("#center h1",{
    x:-700,
    opacity:0,
    delay:0.4,
    stagger:0.3,
    duration:0.5

})
l1.from("img",{
    x:100,
    opacity:0,
    rotation:45,
    borderRadius:'100px',
    stagger:0.3
})