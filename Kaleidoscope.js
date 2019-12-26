let symmetry=12;
let angle=360/symmetry;


function setup() {
  createCanvas(400, 400);
   background(0);
  angleMode(DEGREES);
  translate(width/2,height/2);
  strokeWeight(4);
  stroke(255,5,0);
  for(let i=0;i<symmetry;i++){
    rotate(angle);
    line(0,0,width,0);
  }
  
  
}


function draw() {
 translate(width/2,height/2);
  let mx=mouseX-width/2;
  let my=mouseY-height/2;
  let pmx=pmouseX-width/2;
  let pmy=pmouseY-height/2;
  if(mouseIsPressed){
    stroke(255,100);
    for(let i=0;i<symmetry;i++)
    {
      rotate(angle);
      let d=dist(pmx,pmy,mx,my);
      let sw=map(d,0,20,20,1);
      strokeWeight(sw);
      line(mx,my,pmx,pmy);
    }
  }
  
  
}
