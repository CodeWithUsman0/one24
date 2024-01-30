var tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".part-1",
		start: "50% 50%",
		end: "110% 50%",
		scrub: true,
		pin: true,
	}
})

tl.to(".top-content", {
	rotateX: "90deg",
	opacity: 0,
	duration: 1.5,
	ease: Power1,
}, 'rc')

tl.to(".btm-content", {
	rotateX: "-90deg",
	opacity: 0,
	duration: 1.5,
	ease: Power1,
}, 'rc')

tl.to(".img", {
	width: "100%",
	height: "100%",
	duration: 5,
}, 'rc')