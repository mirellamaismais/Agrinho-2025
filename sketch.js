let plantas = []
let contadorPlantas = 0;
let objetivoPlantas = 100;
let tempoRestante = 60;
let estadoJogo = "INICIO"; // INICIO, JOGANDO, GANHOU, PERDEU
let intervaloTimer = null; // Inicializar como null

// Cores
let corCeu;
let corTerra;
let corArroz;
let corTexto;

let distanciaMinimaEntrePlantas = 15;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  corCeu = color(135, 206, 250);
  corTerra = color(139, 69, 19);
  corArroz = color(34, 139, 34);
  corTexto = color(0);
  // console.log("setup: Estado inicial =", estadoJogo);
}

function draw() {
  background(corCeu);     
  noStroke();
  fill(corTerra);
  rect(0, height * 0.7, width, height * 0.3); // Chão
}

 // Desenhar o "agricultor"
 if (estadoJogo !== "GANHOU" && estadoJogo !== "PERDEU") { // Não desenha se o jogo acabou
   fill(255, 224, 189); // Cor de pele
   ellipse(mouseX, mouseY - 20, 30, 30); // Cabeça
   fill(0, 0, 200); ;// Azul para roupa
   rect(mouseX - 10, mouseY - 5, 20, 30); //Corpo
 }
 // Desenhar plantas
for (let planta of plantas){
  fill(corArroz);
  ellipse(planta.x, planta.y, 10, 15);
  ellipse(planta.x - 5, planta.y + 2, 8, 12);
  ellipse(planta.x + 5, planta.y +2, 8, 12);
 }

// Lógica de Estados e Interface
if (estadoJogo === "INICIO") {
   fill(corTexto);
  textSize(32);
  text("Clique para começar a plantar!", width / 2, height / 2 - 50);
  textSize(18);
  text("Você tem um 1 minuto para planatar 100 pés de arroz.", width / 2, height / 2);
 } else if (estadoJogo === "JOGANDO") {
   fill(corTexto);
   textSize(20);
   text(´Tempo: ${tempoRestante}, 70, 30);
   text('Plantas: ${contadorPlantas} / ${objetivoPlantas}

    // Checa vitória
    if (contadorPlantas >= objetivoPlantas) {
  estadoJogo = "GANHOU";
  paraJogo(); // Chama pararJogo aqui também para limpar timer e para o loop.
}
 // Checa derrota por tempo (está é uma chegagem )












