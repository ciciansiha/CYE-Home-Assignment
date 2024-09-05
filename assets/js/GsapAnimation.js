document.addEventListener('DOMContentLoaded', () => {
    let tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 4,
    });

    tl.to(".hero-content .text-primary .jump", {
        y: -10,
        duration: 0.4,
        ease: "power1.inOut",
        stagger: {
            amount: 0.25,
            from: "start",
            yoyo: true,
            repeat: 1,
            repeatDelay: 0.005,
        }
    });
});