let tl=gsap.timeline();
tl.to('div', {
    x:1200,
    duration: 2.5,
    repeat: -1,
    delay:2,
    rotate:360,
    yoyo:true,
    borderRadius:100
    ,
    y:100,
    backgroundColor:" #FCE570",
    scale:3,
    
})

 /*gsap.to('body', {
    stopAnimation,
delay:4,
duration:1.5,
    backgroundColor:"#64B9CC",
    repeat: -1,
    yoyo:true,
});*/

tl.from('h1', {
    y:100,
    duration: 1,
    opacity: 0,
delay:1,
    stagger:0.2//use to lineupall elements
    ,
    repeat: -1,
    color:'blue'
});