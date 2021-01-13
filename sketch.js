var dog, dogImage, happyDog;
var database;
var foodStock;
var milkBottleImg;
var foodObg;

var milkBtt1;
var milkBtt2;
var milkBtt3;
var milkBtt4;
var milkBtt5;
var milkBtt6;
var milkBtt7;
var milkBtt8;
var milkBtt9;
var milkBtt10;
var milkBtt11;
var milkBtt12;
var milkBtt13;
var milkBtt14;
var milkBtt15;
var milkBtt16;
var milkBtt17;
var milkBtt18;
var milkBtt19;
var milkBtt20;

fedTime = 0;
fedTime2 = 0;



function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
  milkBottleImg = loadImage("Milk.png")
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  database.ref('/').update({
    Food:20
  })
  dog = createSprite(750, 250, 100, 100);
  dog.scale = 0.3;
  dog.addImage(dogImage);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodObj = new Food();
  foodObj.getFoodStock();
  
  
}


function draw() {  
  background(46, 139, 87);

  
  if(keyWentDown(UP_ARROW)&&foodStock > 0){
    writeStock(foodStock);
    dog.addImage(happyDog);
    
 
  }
  if(keyWentUp(UP_ARROW)){
    
    dog.addImage(dogImage);
    fedTime = 0;
  }
  
  
  
  drawSprites();
  textSize(30);
  fill ("white");
  stroke ("black");
  text("Food: " + foodStock, 200, 50);
    
      fedTime = getTime();
    
      text("You fed your dog " + fedTime + " seconds ago.", 500, 50);
    
  //add styles here

}
function readStock(data){
  foodStock = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}



