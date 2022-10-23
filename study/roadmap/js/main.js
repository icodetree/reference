function setup() {
    const name = "Funcoding";
    // 캔버스 생성하기
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");

    for (let i = 0; i < 50; i++) {
        push();
        fill("rgba(0, 0, 0, 0.1)");
        translate(random(width), random(height));
        rotate(random(2 * PI));
        textAlign(CENTER);
        textSize(50);
        text(name, 0, 0);
        pop();
    }
}
