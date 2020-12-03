/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const d6Button = document.querySelector("#d6-button")
const dice6 = document.querySelector("#d6-roll")
const meanD6 = document.querySelector("#d6-rolls-mean")
const medianD6 = document.querySelector("#d6-rolls-median")
const modeD6 = document.querySelector("#d6-rolls-mode")

const doubleD6Button = document.querySelector("#double-d6-buttons")
const doubleDice6_1 = document.querySelector("#double-d6-roll-1")
const doubleDice6_2 = document.querySelector("#double-d6-roll-2")
const meanDoubleD6 = document.querySelector("#double-d6-rolls-mean")
const medianDoubleD6 = document.querySelector("#double-d6-rolls-median")
const modeDoubleD6 = document.querySelector("#double-d6-rolls-mode")

const d12Button = document.querySelector("#d12-button")
const dice12 = document.querySelector("#d12-roll") 
const meanD12 = document.querySelector("#d12-rolls-mean")
const medianD12 = document.querySelector("#d12-rolls-median")
const modeD12 = document.querySelector("#d12-rolls-mode")

const d20Button = document.querySelector("#d20-button")
const dice20 = document.querySelector("#d20-roll")
const meanD20 = document.querySelector("#d20-rolls-mean")
const medianD20 = document.querySelector("#d20-rolls-median")
const modeD20 = document.querySelector("#d20-rolls-mode")

function start() {
  dice6.src = "images/start/d6.png"
  meanD6.innerText = 'NA'
  medianD6.innerText = 'NA'
  modeD6.innerText = 'NA'
  
  doubleDice6_1.src = "images/start/d6.png"
  doubleDice6_2.src = "images/start/d6.png"
  meanDoubleD6.innerText = 'NA'
  medianDoubleD6.innerText = 'NA'
  modeDoubleD6.innerText = 'NA'

  dice12.src = "images/start/d12.jpeg"
  meanD12.innerText = 'NA'
  medianD12.innerText = 'NA'
  modeD12.innerText = 'NA'
  dice20.src = "images/start/d20.jpg"
  meanD20.innerText = 'NA'
  medianD20.innerText = 'NA'
  modeD20.innerText = 'NA'
};

start();

/*******************
 * EVENT LISTENERS *
 *******************/

const d6Array = [];
d6Button.addEventListener('click', () => {
  const random6 = getRandomNumber(6);
  const mean = meanCal(d6Array)
  const median = medianCal(d6Array)
  const mode = modeCal(d6Array)
  dice6.src = `images/d6/${random6}.png`
  d6Array.push(random6);
  meanD6.innerText = mean;
  medianD6.innerText = median;
  modeD6.innerText = mode;
})

const doubleD6Array = [];
doubleD6Button.addEventListener('click', () => {
  const random6_1 = getRandomNumber(6);
  const random6_2 = getRandomNumber(6);
  const mean = meanCal(doubleD6Array);
  const median = medianCal(d6Array)
  const mode = modeCal(doubleD6Array)
  doubleDice6_1.src = `images/d6/${random6_1}.png`
  doubleDice6_2.src = `images/d6/${random6_2}.png`
  doubleD6Array.push(random6_1);
  doubleD6Array.push(random6_2);
  meanDoubleD6.innerText = mean;
  medianDoubleD6.innerText = median;
  modeDoubleD6.innerText = mode;
})

const d12Array = [];
d12Button.addEventListener('click', () => {
  const random12 = getRandomNumber(12);
  const mean = meanCal(d12Array);
  const median = medianCal(d12Array)
  const mode = modeCal(d12Array)
  dice12.src = `images/numbers/${random12}.png`
  d12Array.push(random12);
  meanD12.innerText = mean;
  medianD12.innerText = median;
  modeD12.innerText = mode;
})

const d20Array = [];
d20Button.addEventListener('click', () => {
  const random20 = getRandomNumber(20);
  const mean = meanCal(d20Array);
  const median = medianCal(d20Array)
  const mode = modeCal(d20Array)
  dice20.src = `images/numbers/${random20}.png`
  d20Array.push(random20);
  meanD20.innerText = mean;
  medianD20.innerText = median;
  modeD20.innerText = mode;
})

/******************
 * RESET FUNCTION *
 ******************/

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', start);
  

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
// I used in-line function, so no handling functions here


/****************
 * MATH SECTION *
 ****************/
function meanCal(numArray) {
  let sum = 0
  for(const num of numArray) {
    sum += num
  }
  return (sum/numArray.length).toFixed(2);
}

function medianCal(numArray) {
  numArray.sort();
  let median = 0;
  const medianIndex = Math.round(numArray.length/2) - 1;
  if(numArray.length === 1) {
    median = numArray[0];
  } else if(numArray.length === 2) {
    median = (numArray[0] + numArray[1])/2
  } else if(numArray.length % 2 === 1) {
    median = numArray[medianIndex];
  } else {
    median = (numArray[medianIndex] + numArray[medianIndex+1])/2
  }
  return median;
}

// Dummy code for running 
function modeCal(numArray) {
  return numArray[0];
}

// function modeCal(numArray) {
//   const list = {};
//   numArray.forEach(number => {
//     if(list[number] == undefined){
//       list[number] = 1;
//     } else {
//       list[number] += 1 ;
//     }
//   });
//   return list;
// }
// a = [2,2,3,3]
// a = modeCal(a);
// a;

