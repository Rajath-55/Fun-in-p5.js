function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  let hr=hour();
  let mn=minute();
  let sc=second();
  let ms=millis();
  let d=day();
 
  stroke(255,100,125);
  strokeWeight(6);
  noFill();
  let end1=map(sc,0,60,0,360);
  
  push();
  stroke(255,100,125);
  rotate(end1);
  line(0,0,100,0);
  pop();
  let end2=map(mn,0,60,0,360);
  stroke(255,244,120);
  
  
  let end3=map(hr%12,0,12,0,360);
  stroke(120,224,123);
  arc(00,00,240,240,0,end3);
  push();
  stroke(255,244,120);
  rotate(end3);
  line(0,0,70,0);
  pop();
  stroke(255);
  strokeWeight(3);
  
  
  
  ellipse(0,60,30,30);
  ellipse(0,-60,30,30);
  ellipse(-65,0,50,50);
  push();
  stroke(255,130,200);
  translate(-65,0);
  
  let msAngle=map(ms,0,100,0,360);
  rotate(msAngle);
  
  line(0,0,15,0);
  pop();
  
  push();
  stroke(43,12,223);
  translate(-45,60);
  text(d,0,0);
  
  
}
