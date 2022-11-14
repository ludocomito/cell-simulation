let cx;
let cy;
let r = 30;
let c = 255;
let g1;
let proteins = [];

let beta;
let act_coefficient = 10;
let act_concentration;

let particles = [];

let slider;

function setup() {
  createCanvas(1260, 1030);
  cx = width / 2;
  cy = height / 2;
  g1 = new Gene(cx, cy, r, c);

  slider = createSlider(0, 30, 10);
  slider.position(280, 75);
  slider.style('width', '200px');

  frameRate(60);
}

function draw() {
  background(0);
  
  act_concentration = particles.length;
  act_coefficient = slider.value();
  
  if(frameCount%30 == 0){
    if(newParticle(random(1,10))){
      produceParticle(random(8,width-8),random(8,height-8));
    }
      if(act_concentration > act_coefficient){
        produceProtein();
      }
  }

  promoter_activity = calculatePromoterActivity(act_coefficient, act_concentration);
  //console.log(promoter_activity);
  g1.render();
  for(let i = 0; i < proteins.length; i++) {
    proteins[i].update();
    proteins[i].render();
  }
  
  for(let i = 0; i < particles.length; i++) {
    particles[i].render();
  }

  textSize(20);
  fill(255);
  text("Number of particles: " + str(particles.length), 10, 30);
  text("Proteins produces: " + str(proteins.length), 10, 60);
  text("Activation concentration: " + str(slider.value()), 10, 90);
}

function keyPressed() {
  if(keyCode === 32){
    produceProtein();
  }
}

function produceProtein(){
  let protein = new Protein(g1.x, g1.y, 8, "#FE5713");
  append(proteins, protein);
}

function produceParticle(x,y){
  let particle = new Particle(x, y, 8, "#3be578");
  append(particles, particle);
}

function calculatePromoterActivity(beta, act_coefficient, act_concentration, exp){
  return beta*((act_concentration**exp)/(act_coefficient**exp+act_concentration**exp));
}