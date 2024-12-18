let pointX, startX, endX, numberLineY, tickSpacing, rectStartX, rectStartY, nearest;
let plusAddition, minusAddition;
const totalTicks = 21;
let targetPointX;
let animating = false;
let addition = 6;

let pointerSlider, additionSlider;
let showPlusCheckbox, showMinusCheckbox;

let offsetX = 0, offsetY = 0;

function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.6).parent('canvas-container');
  calculateDimensions();

  pointerSlider = createSlider(-10, 10, 0, 1);
  pointerSlider.position(rectStartX + 380, rectStartY + 130);
  pointerSlider.style('width', '300px');
  pointerSlider.style('background-color', '#3278FA');
  pointerSlider.style('accent-color', '#3278FA');

  const pointerTitle = createDiv('Pointer Control');
  pointerTitle.position(rectStartX + 380, rectStartY + 100);
  pointerTitle.style('font-size', '16px');
  pointerTitle.style('color', '#000');

  additionSlider = createSlider(1, 10, 6, 1);
  additionSlider.position(rectStartX + 380, rectStartY + 180);
  additionSlider.style('width', '300px');
  additionSlider.style('background-color', '#4CAF50');
  additionSlider.style('accent-color', '#4CAF50');

  const additionTitle = createDiv('Addition Control');
  additionTitle.position(rectStartX + 380, rectStartY + 150);
  additionTitle.style('font-size', '16px');
  additionTitle.style('color', '#000');

  showPlusCheckbox = createCheckbox('Plus Pointer', true);
  showPlusCheckbox.position(rectStartX + 100, rectStartY + 120);

  showMinusCheckbox = createCheckbox('Minus Pointer', true);
  showMinusCheckbox.position(rectStartX + 100, rectStartY + 160);
}

function draw() {
  background(230);
  drawNumberLine();
  drawAditionSubstraction();
  drawDraggablePoint();
  displayValue();
  pointX = map(pointerSlider.value(), -10, 10, startX, endX);
  addition = additionSlider.value();
}



function calculateDimensions() {
  startX = width * 0.1;
  endX = width * 0.9;
  rectStartX = width * 0.3;
  rectStartY = height * 0.7;
  numberLineY = height / 2;
  tickSpacing = (endX - startX) / (totalTicks - 1);
  pointX = map(0, -10, 10, startX, endX);
  targetPointX = pointX;
}

function drawNumberLine() {
  stroke(0);
  line(startX + offsetX, numberLineY + offsetY, endX + offsetX, numberLineY + offsetY);
  for (let i = 0; i < totalTicks; i++) {
    const x = startX + i * tickSpacing + offsetX;
    const value = -10 + i;
    line(x, numberLineY + offsetY - 10, x, numberLineY + offsetY + 10);
    textAlign(CENTER, TOP);
    text(value, x, numberLineY + offsetY + 15);
  }
}

function drawAditionSubstraction() {
  fill(200);
  fill(0);
  textAlign(CENTER);
}

function drawDraggablePoint() {
  fill(50, 120, 240);
  ellipse(pointX + offsetX, numberLineY + offsetY, 20);

  plusAddition = pointX + addition * tickSpacing + offsetX;
  minusAddition = pointX - addition * tickSpacing + offsetX;

  if (showPlusCheckbox.checked()) {
    fill(150, 120, 240);
    ellipse(plusAddition, numberLineY + offsetY, 20);
  }

  if (showMinusCheckbox.checked()) {
    fill(240, 120, 150);
    ellipse(minusAddition, numberLineY + offsetY, 20);
  }
  fill(50, 120, 240);
}

function displayValue() {
  findNearestValue();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(`Value: ${nearest}`, width / 2, 50);
  textSize(22);
  if (showPlusCheckbox.checked()) {
    text(`${nearest} + ${addition} = ${nearest + addition}`, startX+400 ,startX+265);
  }
  if(showMinusCheckbox.checked()){
    text(`${nearest} - ${addition} = ${nearest - addition}`, startX+400 ,startX+305);
  }
}

function findNearestValue() {
  nearest = Math.round(map(pointX, startX, endX, -10, 10));
}

function resetValues() {
  pointerSlider.value(0);
  additionSlider.value(6);
  pointX = map(pointerSlider.value(), -10, 10, startX, endX);
  addition = additionSlider.value();
  offsetX = 0;
  offsetY = 0;
  animating = false;
  console.log("Values reset to default!");
}

document.getElementById("reset-button").addEventListener("click", resetValues);
