let scene = 0;
let totalScenes = 5;
let button;
let farmerX = -50;
let cityGuyX = 700;
let wave = 0;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
  button = createButton('Próxima cena');
  button.position(10, 10);
  button.mousePressed(nextScene);
}

function draw() {
  background(220);

  if (scene === 0) {
    drawFarm();
    drawFarmer();
    text("Cena 1: No campo - o agricultor trabalha com dedicação para cultivar alimentos frescos.", width / 2, 350);
  } else if (scene === 1) {
    drawFarm();
    drawCityGuy();
    text("Cena 2: O personagem da cidade visita o campo e aprende sobre agricultura sustentável.", width / 2, 350);
  } else if (scene === 2) {
    drawMarket();
    drawFarmer();
    drawCityGuy();
    text("Cena 3: Juntos, eles organizam uma feira com produtos locais.", width / 2, 350);
  } else if (scene === 3) {
    drawCity();
    drawFarmer();
    drawCityGuy();
    text("Cena 4: O agricultor visita a cidade e compartilha sua cultura e saberes com todos.", width / 2, 350);
  } else if (scene === 4) {
    drawFestival();
    drawFarmer();
    drawCityGuy();
    text("Cena 5: A festa celebra a união entre campo e cidade com música, comida e alegria!", width / 2, 350);
  }
}

function nextScene() {
  scene = (scene + 1) % totalScenes;
  farmerX = -50;
  cityGuyX = 700;
}

// Personagem do campo
function drawFarmer() {
  fill(139, 69, 19);
  ellipse(farmerX, 300, 50, 50); // cabeça
  rect(farmerX - 15, 325, 30, 40); // corpo
  farmerX += 1.2; // animação
}

// Personagem da cidade
function drawCityGuy() {
  fill(0, 102, 204);
  ellipse(cityGuyX, 300, 50, 50);
  rect(cityGuyX - 15, 325, 30, 40);
  cityGuyX -= 1.2; // animação
}

// Cenário: Campo
function drawFarm() {
  background(150, 200, 100);
  fill(255, 255, 0);
  ellipse(700, 80, 80); // sol
  fill(139, 69, 19);
  rect(100, 250, 100, 100); // celeiro
  fill(0);
  text("Campo", width / 2, 30);
}

// Cenário: Cidade
function drawCity() {
  background(180);
  fill(100);
  rect(100, 150, 80, 200);
  rect(220, 100, 80, 250);
  rect(340, 170, 80, 180);
  fill(0);
  text("Cidade", width / 2, 30);
}

// Cenário: Feira
function drawMarket() {
  background(204, 255, 204);
  fill(255, 0, 0);
  rect(300, 200, 200, 150); // tenda
  fill(255);
  text("Feira de produtos locais", width / 2, 30);
}

// Cenário: Festa
function drawFestival() {
  background(255, 230, 204);
  fill(255, 0, 0);
  arc(200, 200, 100, 100, 0, PI);
  fill(0, 255, 0);
  arc(300, 200, 100, 100, 0, PI);
  fill(0, 0, 255);
  arc(400, 200, 100, 100, 0, PI);
  fill(0);
  text("Festa de integração!", width / 2, 30);
}
