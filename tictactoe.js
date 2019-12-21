let board = [
  ['X', 'X', 'O'],
  ['O', 'X', 'X'],
  ['X', 'O', 'O'],

];
let player1 = "X";
let player2 = "O";


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let w = width / 3;
  let h = height / 3;
  line(w,0,w,height);
  line(2*w,0,2*w,height);
  line(0,h,width,h);
  line(0,2*h,width,2*h);


  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = w * j + w / 2;
      let y = h * i + h / 2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(4);
      if (spot == player2) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == player1) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);





      }
    }
  }

}
