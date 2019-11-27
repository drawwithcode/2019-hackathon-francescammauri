var music;
var earth;
var antenna;

function preload(){

  music = loadSound("./assets/TG1_new.mp3");
  earth = loadImage("./assets/earth.png");
  antenna = loadImage("./assets/antennabianca.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
resetSketch();
var button = createButton("click me at the end to replay");
button.mousePressed(resetSketch);
}
function resetSketch() {
  music.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(music);
}
function draw() {
  background("black")
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map( volume, 0,1,1000,2000);
  translate(200,-200);
scale(1.5);
  push()
  imageMode(CENTER);
  image(earth, 10 , 290, volume/8, volume/8 );
  pop();
  push()
  imageMode(CENTER);
  image(antenna,0 , 400, 300, 600);
  pop();
  noFill()
  ellipse(10,290, volume/8, volume/8);
  ellipse(10,290, volume/6, volume/6);
  ellipse(10,290, volume/4, volume/4);
  ellipse(10,290, volume/2, volume/2);
  ellipse(10,290, volume, volume);
  ellipse(10,290, volume/0.5, volume/0.5);
  fill("blue");
  stroke("orange");
  rect(100,350, 20,80);
  rect(100,370, 36,20);
  rect(100,430, 100,20);
  rect(140,370, 20, 60);
  rect(140,370, 60, 20);
  rect(180,410, 20,40);
  rect(204,370,40, 20);
  rect(224,370,20,100);

}
