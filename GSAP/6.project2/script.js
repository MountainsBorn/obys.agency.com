// var h1element=document.querySelector("#h1text").textContent;
// console.log(h1element);
// var clutter="";
// var splited=h1element.split("");
// console.log(splited);
// splited.forEach(function(elem){
//     clutter+=`<span>${elem}</span>`;

// })
// console.log(clutter);
// document.querySelector("#h1text").innerHTML=clutter;
// gsap.to("#page21 h1 span",{
//     color:"#E3E3C4",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:'#page21 h1',
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 10%",
//         scrub:1

//     }
// })




var allH1=document.querySelectorAll("#page21 h1");
console.log(allH1);
allH1.forEach(function(elem){
    var clutter="";
    var h1text=elem.textContent;
    var splited=h1text.split("");
    console.log(splited);
    splited.forEach(function(e){
        clutter += `<span>${e}</span>`;
    })
    elem.innerHTML = clutter;

})

gsap.to("#page21 h1 span",{
    color:"#E3E3C4",
    stagger:0.01,
    scrollTrigger:{
        trigger:'#page21 h1',
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:5

    }
})
