var circle = 50;
var rot;
var col;
var freq = 0.000001; 
var cont = 0;
var r;

function setup() {
  var canvas = createCanvas(722, 748);
   canvas.parent('sketch-holder');
}

function draw() {
  background(32,32,32);
  translate(360, 380);
  rotate(radians(rot));
  if (freq = 0.0000001){
    freq = freq + 0.0000001}
    
    if (freq = 0.000005){
      freq = freq - 0.000001}

 ellipseMode(RADIUS);
  for (var i=0; i<500; i ++) {
    circle= 260 + 100*sin(millis()*freq*i);
    col=map(circle,250,250,255,60);
    r=map(circle,150,250,0.5,1.5);
    fill(255,255,255,65);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);    
    rot=rot+0.00008;
  }
}