let system;
let img;

function preload() {
    img = loadImage("./img/rocket.png");
}

function setup() {
    let myCanvas = createCanvas(720, 800);
    myCanvas.parent("canvas");

    // createVector : 2차원 또는 3차원 벡터의 크기 방향을 가지는 객체
    system = new ParticleSystem(createVector(width / 2, 150));
}

function draw() {
    background(0);
    system.addParticle();
    system.run();
}

class ParticleSystem {
    constructor(position) {
        this.origin = position.copy(); // 벡터의 복사본을 가져와 p5.Vector 객체를 반환
        this.particles = [];
    }
    addParticle() {
        image(img, width / 2 - 36, 50);
        this.particles.push(new Particle(this.origin));
    }
    run() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }
}

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 3);
        this.velocity = createVector(random(-2, 2), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 150;
    }
    run() {
        this.update();
        this.display();
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;
    }
    display() {
        stroke(200, this.lifespan);
        strokeWeight(0);
        fill(255, this.lifespan);
        rect(this.position.x, this.position.y, 0.5, 500);
    }
    isDead() {
        return this.lifespan < 0;
    }
}
