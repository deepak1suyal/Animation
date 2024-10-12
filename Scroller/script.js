gsap.from('.page1 .box',{
scale:3,
duration:2,
repeat:-1
,
delay:2
} )


gsap.to('.page2 .box',{
    scale:2,
    duration:1,
    delay:1,
    rotation:360,
width:70,
hight:70,
    
    borderRadius:800,
    scrollTrigger:'.page2 .box'
    } )


    gsap.to('.page3 .box',{
        scale:3,
        duration:2,
        delay:1,
        backgroundColor:'pink',
        scrollTrigger:{
            trigger:'.page3 .box',
            scroller:'body',
            markers:true,
            start:"top 90%",
      end:"top 10%",
      scrub:2//It move item smoothly it value can be true or (1 to 5)
        }
        } )

