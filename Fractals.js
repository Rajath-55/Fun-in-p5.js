var slider;



function setup() {
  createCanvas(400, 400);
  slider=createSlider(0,2*PI,PI/4,0.01);
}

function draw() {
  background(51);
  stroke(255);
  translate(200,height);
  branch (100);
  
  
}
function branch(len){
  var angle=PI/4;
  angle=slider.value();
  line(0,0,0,-len);
  translate(0,-len);
  if(len>2){
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
    
    
  } 
  
  
}
