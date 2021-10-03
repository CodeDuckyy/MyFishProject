var ocean;
var fish;
var shark;

var fishImg;
var oceanImg;
var sharkImg;
var spawn_SharkFC;

var topBorder;
var bottomBorder;

var sharkGroup;

var score = 0;
var displayScore;

function preload(){
    fishImg = loadImage("goodFish.jpeg");
    oceanImg = loadImage("ocean.jpeg");
    sharkImg = loadImage("shark.jpeg")
}

function setup() {
    createCanvas(250,300);

    ocean = createSprite(400,100,200,200)
    ocean.addImage(oceanImg);
    
    fish = createSprite(20,185,10,10);
    fish.addImage(fishImg);
    fish.scale = 0.05;

    topBorder = createSprite(120, 10, 400, 220); 
    topBorder.visible = false;

    bottomBorder = createSprite(120, 300, 400,100); 
    bottomBorder.visible = false;

    sharkGroup = createGroup()
}


function draw() {
    background = (0);

    fish.y = World.mouseY;
    ocean.velocityX = -10
    if(ocean.x<-200){
        ocean.x = 400;
    }

    fish.collide(topBorder);
    fish.collide(bottomBorder);

    console.log(frameCount);

    spawn_SharkFC();

    if (sharkGroup.isTouching(fish)){
        score = frameCount*-1;
        ocean.x = 400;
        sharkGroup.destroyEach();
    }

    drawSprites();
    displayScore = text("Score: " + (score+frameCount), 105, 50);
}

function spawn_SharkFC()
{
    if(frameCount%60 ===0){
shark = createSprite(700, Math.round(random(130,200)), 10, 10)
shark.addImage(sharkImg)
shark.velocityX = -10;
shark.scale = 0.1;

sharkGroup.add(shark);
shark.lifeTime = 100;
    }
}
