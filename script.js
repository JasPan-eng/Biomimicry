//constructing the paththe feather floats on.
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: 20 },
        { x: 700, y: -10 },
        { x: 800, y: -100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: -100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: 150 }

    ]
};

//animating the feather
const tween = new TimelineLite();

tween.add(
    TweenLite.to('.feather', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)


//letting the scroll control the feather's movement.
const controller = new ScrollMagic.Controller();

//contructing triggers for the animation
const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(tween)
    .addIndicators()
    .addTo(controller);