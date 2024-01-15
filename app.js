var tl = gsap.timeline()


function time() {
    var a = 0;
    setInterval(function () {
        a = a + Math.floor(Math.random() * 20)
        if (a < 100) {

            document.querySelector("#loader h1").innerHTML = a + "%"
        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }


    }, 90)
}


tl.to("#loader h1", {


    duration: 1,
    onStart:time()
})

tl.to("#loader", {
    top: "-100vh",
    delay: 0.5,
    duration: 1.3
})













gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",

        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})



