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
dice6.src = "images/start/d6.png"

const doubleD6Button = document.querySelector("#double-d6-buttons")
const doubleDice6_1 = document.querySelector("#double-d6-roll-1")
const doubleDice6_2 = document.querySelector("#double-d6-roll-2")
doubleDice6_1.src = "images/start/d6.png"
doubleDice6_2.src = "images/start/d6.png"

const d12Button = document.querySelector("#d12-button")
const dice12 = document.querySelector("#d12-roll") 
dice12.src = "images/start/d12.jpeg"

const d20Button = document.querySelector("#d20-button")
const dice20 = document.querySelector("#d20-roll")
dice20.src = "images/start/d20.jpg"

/*******************
 * EVENT LISTENERS *
 *******************/

d6Button.addEventListener('click', () => {
  const random6 = getRandomNumber(6);
  dice6.src = `images/d6/${random6}.png`
})

doubleD6Button.addEventListener('click', () => {
  const random6_1 = getRandomNumber(6);
  doubleDice6_1.src = `images/d6/${random6_1}.png`
  const random6_2 = getRandomNumber(6);
  doubleDice6_2.src = `images/d6/${random6_2}.png`
})

d12Button.addEventListener('click', () => {
  const random12 = getRandomNumber(12);
  dice12.src = `images/numbers/${random12}.png`
})

d20Button.addEventListener('click', () => {
  const random20 = getRandomNumber(20);
  dice20.src = `images/numbers/${random20}.png`
})


/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
