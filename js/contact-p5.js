var p;
var r1 = 230;
var r2 = r1/2;
var pArray = new Array();

function setup() {
  var canvas=createCanvas(850,850);
  canvas.parent("sketch-holder");
  for (let i=0; i<600; i++) {
    pArray.push(new Particle());
  }
  background(127);
    fill(0, 31);
}

function draw() {
  background(32,32,32);

  
  strokeWeight(1);
  translate(width/2 ,height/2);
  
  for (let p of pArray) {
    p.update();
    p.render();
  }
}

function Particle() {
  this.angle = random(TWO_PI);
  this.angle2 = random(TWO_PI);
  this.p1 = 0; //random(TWO_PI);
  this.p2 = 0; //random(TWO_PI);
  this.avel = 0.0001 + random(0.005);
  this.avel2 = 0.0007 + random(0.01);
}
Particle.prototype.update = function() {
  this.pposx = this.posx;
  this.pposy = this.posy;
  this.angle += this.avel;
  if (this.angle >= TWO_PI) {
        this.angle -= TWO_PI;
    }
  this.angle2 += this.avel2;
  if (this.angle2 >= TWO_PI) {
        this.angle2 -= TWO_PI;
    }
  this.posx = (r1+r2*cos(this.angle2+this.p2)) * cos(this.angle+this.p1);
  this.posy = (r1+r2*cos(this.angle2+this.p2)) * sin(this.angle+this.p1);
}
Particle.prototype.render = function() {
    if (this.angle2 > TWO_PI*0.5) {
        stroke(color("#e2e2e2"));
    } else {
        stroke(color("#444444"));
    }
  line(this.pposx, this.pposy, this.posx, this.posy);
}