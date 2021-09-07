var banana, blackBerryLight, watermelon, blackCherry;
var coconut, greenApple, greenGrape, plum, pear, orange;
var fruits_group;
var shooter, shooter_img, shooter_shoot;
var bg;
function preload() {
    bg = loadImage("/assets/jungle.jpg");
    shooter_img = loadImage("/assets/shooter_2.png");
    shooter_shoot = loadImage("/assets/shooter_3.png");

    banana = loadImage("/assets/banana.png");
    plum = loadImage("/assets/plum.png");
    pear = loadImage("/assets/pear.png");
    coconut = loadImage("/assets/coconut.png");
    watermelon = loadImage("/assets/watermelon.png");
    blackCherry = loadImage("/assets/black-cherry.png");

}

function setup() {
    createCanvas(displayWidth, displayHeight - 200);

    shooter = createSprite(150, 400, 50, 50);
    shooter.addImage("shoot", shooter_img);
    shooter.scale = 0.5;

    fruits_group = new Group();


}

function draw() {
    background(bg);

    spawnFruits();

    drawSprites();
}

function spawnFruits() {
    if (frameCount % 100 === 0) {
        var fruit = createSprite(300, 50, 50, 50);
        fruit.x = Math.round(random(300, 950));
        //fruit.y = Math.round(random(50, 500));
        fruit.scale = 0.08;

        var number = Math.round(random(1, 6));

        switch (number) {
            case 1: fruit.addImage(banana); break;
            case 2: fruit.addImage(plum); break;
            case 3: fruit.addImage(pear); break;
            case 4: fruit.addImage(coconut); break;
            case 5: fruit.addImage(blackCherry); break;
            case 6: fruit.addImage(watermelon); break;
            default: break;
        }

        fruit.lifetime = 10;
        fruits_group.add(fruit);

    }
}