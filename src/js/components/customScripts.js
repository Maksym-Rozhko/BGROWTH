const inputNumberElems = document.querySelectorAll('.form .input-number');

const onlyDigitsEnterInput = (inputElems) => {
    if (inputElems) {
        inputElems.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace (/\D/, '');
            });
        });
    }
};

onlyDigitsEnterInput(inputNumberElems);

const footerYearSpans = document.querySelectorAll('.footer .footer__copyright strong span');

if (footerYearSpans) {
    const date = new Date();
    const year = date.getFullYear();

    footerYearSpans.forEach(span => {
        span.textContent = year;
    });
}

(function() {
    let COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

    NUM_CONFETTI = 350;

    COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

    PI_2 = 2 * Math.PI;

    canvas = document.getElementById("world");

    context = canvas.getContext("2d");

    window.w = 0;

    window.h = 0;

    resizeWindow = function() {
        window.w = canvas.width = window.innerWidth;
        return window.h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeWindow, false);

    window.onload = function() {
        return setTimeout(resizeWindow, 0);
    };

    range = function(a, b) {
        return (b - a) * Math.random() + a;
    };

    drawCircle = function(x, y, r, style) {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        context.fillStyle = style;
        return context.fill();
    };

    xpos = 0.5;

    document.onmousemove = function(e) {
        return xpos = e.pageX / w;
    };

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
        };
    })();

    Confetti = (function() {
        function Confetti() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
        }

        Confetti.prototype.replace = function() {
        this.opacity = .0;
        this.dop = 0.01 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return this.vy = 0.7 * this.r + range(-1, 1);
        };

        Confetti.prototype.draw = function() {
        let ref;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
            this.opacity = 1;
            this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
            this.replace();
        }
        if (!((0 < (ref = this.x) && ref < this.xmax))) {
            this.x = (this.x + this.xmax) % this.xmax;
        }
        return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
        };

        return Confetti;

    })();

    confetti = (function() {
        let j, ref, results;
        results = [];
        for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push(new Confetti);
        }
        return results;
    })();

    window.step = function() {
        let c, j, len, results;
        requestAnimationFrame(step);
        context.clearRect(0, 0, w, h);
        results = [];
        for (j = 0, len = confetti.length; j < len; j++) {
        c = confetti[j];
        results.push(c.draw());
        }
        return results;
    };

    step();

}).call(this);

const { PI, cos, sin, abs, sqrt, pow, floor, round, random } = Math;
const HALF_PI = 0.5 * PI;
const TAU = 2 * PI;
const TO_RAD = PI / 180;
const rand = n => n * random();
const randRange = n => n - rand(2 * n);
const fadeIn = (t, m) => t / m;
const fadeOut = (t, m) => (m - t) / m;
const fadeInOut = (t, m) => {
	let hm = 0.5 * m;
	return abs((t + hm) % m - hm) / (hm);
};

let canvas;
let ctx;
let particles;
let hover;
let mouse;
let tick;

function setup() {
	canvas = {
		a: document.createElement('canvas'),
		b: document.createElement('canvas')
	};
	ctx = {
		a: canvas.a.getContext('2d'),
		b: canvas.b.getContext('2d')
	};
	canvas.b.style = `
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 111;
	`;
    canvas.b.setAttribute('id', 'preloader');
	document.body.appendChild(canvas.b);
	particles = [];
	hover = false;
	mouse = { x: 0, y: 0 };
	tick = 0;
	resize();
	draw();

    setTimeout(() => {
        if (document.querySelector('body').classList.contains('preload-waiting')) {
            document.querySelector('body').classList.remove('preload-waiting');
        }
    }, 1500);
}

function resize() {
	canvas.a.width = canvas.b.width = window.innerWidth;
	canvas.a.height = canvas.b.height = window.innerHeight;
}

function mousehandler(e) {
	hover = e.type === 'mousemove';
    try {
        if (hover) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
    } catch (error) {

    }
}

function getParticle(x, y) {
	return {
		position: {x, y},
		size: 2 + rand(20),
		speed: 2 + rand(5),
		direction: (floor(rand(6)) * 60) * TO_RAD,
		turnDirection: randRange(1) * 0.1,
		directionChangeRate: 20 + round(rand(10)),
		hue: rand(90) + 180,
		ttl: 100 + rand(50),
		life: 0,
		destroy: false,
		update() {
			this.destroy = this.life++ > this.ttl;
			this.direction += this.life % this.directionChangeRate === 0 && round(randRange(1)) * 60 * TO_RAD;
			this.velocity = fadeInOut(this.life, this.ttl) * this.speed;
			this.position.x += cos(this.direction) * this.velocity;
			this.position.y += sin(this.direction) * this.velocity;
		},
		draw() {
			this.update();

			ctx.a.beginPath();
			ctx.a.lineWidth = 2;
			ctx.a.strokeStyle = `hsla(${this.hue},100%,50%,${fadeInOut(this.life, this.ttl)})`;
			ctx.a.strokeRect(this.position.x - (0.5 * this.size), this.position.y - (0.5 * this.size), this.size, this.size);
			ctx.a.closePath();
		}
	};
}

function draw() {
	tick++;
	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
	if (!hover) {
		mouse.x = window.innerWidth * 0.5 + cos(tick * 0.05) * 200;
		mouse.y = window.innerHeight * 0.5 + sin(tick * 0.05) * 200;
	}
	tick % 2 === 0 && particles.push(getParticle(mouse.x, mouse.y));
	for (let i = particles.length - 1; i >= 0; i--) {
		particles[i].draw();
		if (particles[i].destroy) particles.splice(i, 1);
	}

	ctx.b.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.b.fillRect(0,0,canvas.b.width,canvas.b.height);

	ctx.b.save();
	ctx.b.globalCompositeOperation = "lighter";
	ctx.b.filter = "blur(8px)";
	ctx.b.drawImage(canvas.a, 0, 0, canvas.b.width, canvas.b.height);
	ctx.b.restore();

	ctx.b.save();
	ctx.b.globalCompositeOperation = "lighter";
	ctx.b.drawImage(canvas.a, 0, 0, canvas.b.width, canvas.b.height);
	ctx.b.restore();

	window.requestAnimationFrame(draw);
}

window.addEventListener("load", setup);
window.addEventListener("resize", resize);
window.addEventListener("mousemove", mousehandler);
window.addEventListener("mouseout", mousehandler);

setTimeout(() => {
    if (document.querySelector('#preloader')) {
        document.querySelector('#preloader').classList.add('preloader-hide');
    }
}, 3000);

setTimeout(() => {
    window.removeEventListener("load", setup);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", mousehandler);
    window.removeEventListener("mouseout", mousehandler);
    if (document.querySelector('#preloader')) {
        document.querySelector('#preloader').remove();
    }
}, 5000);
