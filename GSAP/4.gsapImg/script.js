gsap.to("#page2 img",{
    width:'100%',
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        // scrup:5,
        start:"top 0",
        end:'top -100%',
        pin:true
    }
})
