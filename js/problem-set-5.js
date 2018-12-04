/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {


  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  var div = document.getElementById("mario-easy-output");

  while (height < 1 || height > 23 || Number.isInteger(height)==false) {
    height = Number(prompt("Enter a number between 1 and 23."));
  }

  let i = 0;
  let rows = "";
  let h = "#";
  let space = "&nbsp";

  while (i <height) {
    for(let h2 = 0; h2 <=(height-2-i);h2++) {
      rows = rows + space;
    }
    for(let h3 = 0; h3<=(1+i);h3++) {
      rows = rows + h;
    }
      rows = rows + "</br>";
      i++
  }
  div.innerHTML = "<code>" + rows + "</code";


  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  var div = document.getElementById("mario-hard-output");

 while (height < 1 || height > 23 || Number.isInteger(height)==false) {
   height = Number(prompt("Enter a number between 1 and 23."));
 }

 let total = "";

 for (let h = 0; h < height; h++){
   let row = "";
   for (let h2 = 0; h2 <(height-h-1); h2++){
     row = row+"&nbsp;";
   }
   row = row+"#";
   for (let h3 = 0; h3< (h+1); h3++) {
     row = row+"#";
   }
   row = row+"&nbsp;&nbsp;#";
   for (let h4 = 0; h4 < (h+1); h4++){
     row = row+"#"
   }
   total = total + row + "<br/>";

 }

 div.innerHTML = "<code>" + total + "</code";


  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
  let eTotal = 0;
  let oTotal = 0;
    while (true) {
      card = prompt("Please Enter Your Credit Card Number: ");
    if ((card.length==16 || card.length ==15 || card.length ==13) && Number.isInteger(Number(card)))
    break;}

    for (let i = card.length-2;i>=0;i-=2) {
      let  n = Number(card[i]*2);
      let strnum = n.toString();
      let sum = 0;
      for (let a = 0; a < strnum.length; a++){
        sum = sum + Number(strnum[a]);
      }
      eTotal = sum + eTotal;
      console.log(eTotal);
    }
    for (let k = card.length-1; k >=0; k-=2){
      oTotal = oTotal + Number(card[k]);
    }
    console.log(oTotal);

    if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (oTotal + eTotal)%10==0){
      document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
    } else if ((card.length==13 || card.length==16) && card[0]==4 && (oTotal + eTotal)%10==0){
      document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
    } else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (oTotal + eTotal)%10==0){
      document.getElementById("credit-output").innerHTML= "<img src ='./images/mastercard.png'/>";
    } else {
      document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
    }
    card = Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

 function guess() {

 // WRITE YOUR EXERCISE 4 CODE HERE
 var div = document.getElementById("guess-output");
 let x = "";
 let y = 1;
 let z = 0;

 let t = Math.floor(Math.random() * 1000) + 1;
 let guess = prompt("Try to Guess the Number: ");
 let counter = 0;

 while (guess != t) {
   if (guess > t && guess <= 1000 && guess >= 1) {
     counter++;
     guess = prompt("Try Again with A Lower Number: ");
   } else if (guess < t && guess <= 1000 && guess >= 1){
     counter++
     guess = prompt("Try Again with A Higher Number: ");
   }
 }


  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  windspeed = prompt ("Please Enter a windpeed: ");
while (windspeed < 0 || windspeed % 1 != 0){
  windspeed = prompt ("Please Enter a windpeed: ");
}

var p = document.getElementById("hurricane-output")

 if (windspeed >= 157) {
  p.innerHTML = ("Category 5 Hurricane.");
} else if (windspeed <= 156 && windspeed >= 130) {
  p.innerHTML = ("Category 4 Hurricane.");
} else if (windspeed <= 129 && windspeed >= 111) {
  p.innerHTML = ("Category 3 Hurricane.");
} else if (windspeed <= 110 && windspeed >= 96){
  p.innerHTML = ("Category 2 Hurricane.");
} else if (windspeed <= 95 && windspeed >= 74){
  p.innerHTML = ("Category 1 Hurricane.");
} else if (windspeed <= 73 && windspeed >= 39){
  p.innerHTML = ("Tropical Storm.");
} else if (windspeed <= 38){
  p.innerHTML = ("The skies are calm...");
}

windspeed = Number(windspeed);

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
  do {
  s1 = Number(prompt("Please enter a score."));
} while (s1 < 0.0 || s1 > 10.0 || !Number.isInteger(s1));
scores.push(s1);

do {
  s2 = Number(prompt("Please enter a score."));
} while (s2 < 0.0 || s2 > 10.0 || !Number.isInteger(s2));
scores.push(s2);

do {
  s3 = Number(prompt("Please enter a score."));
} while (s3 < 0.0 || s3 > 10.0 || !Number.isInteger(s3));
scores.push(s3);

do {
  s4 = Number(prompt("Please enter a score."));
} while (s4 < 0.0 || s4 > 10.0 || !Number.isInteger(s4));
scores.push(s4);

do {
  s5 = Number(prompt("Please enter a score."));
} while (s5 < 0.0 || s5 > 10.0 || !Number.isInteger(s5));
scores.push(s5);

do {
  s6 = Number(prompt("Please enter a score."));
} while (s6 < 0.0 || s6 >10.0 || !Number.isInteger(s6));
scores.push(s6);

let Total = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5) + Number(s6);
let average = (Total - Math.max(s1, s2, s3, s4, s5, s6) - Math.min(s1, s2, s3, s4, s5, s6)) / 4;
var p = document.getElementById("gymnastics-output");
p.innerHTML = "Discarded: " + Math.min(s1, s2, s3,  s4, s5, s6) + ", " + Math.max(s1, s2, s3, s4, s5, s6) + "</br>" + "Score: " + average.toFixed(2);



  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY
  let tscores;
do {
  tscores = prompt("Enter Your Test Grades: ");
  tscores = Number(tscores);
  while ((tscores !== -1 && tscores < 0.0) || tscores > 100.0){
    tscores = prompt("Enter Your Test Grades: ");
    tscores = Number(tscores);
  }
  testTotal += tscores;
  tests++;
}while(tscores !== -1)
let taverage = testTotal / tests;

let qscores
do {
  qscores = prompt("Enter Your Quiz Grades: ");
  qscores = Number(qscores);
  while ((qscores !== -1 && qscores < 0.0) || qscores > 100.0){
    qscores = prompt("Enter Your Quiz Grades: ");
    qscores = Number(qscores);
  }
  quizTotal += qscores;
  quizzes++;
}while(qscores !== -1)
let qaverage = quizTotal / quizzes;

let hscores
do {
  hscores = prompt("Enter Your Homework Grades: ");
  hscores = Number(hscores);
  while ((hscores !== -1 && hscores < 0.0) || hscores > 100.0){
    hscores = prompt("Enter Your Homework Grades: ");
    hscores = Number(hscores);
  }
  homeworkTotal += hscores;
  homeworks++;
}while(hscores !== -1)
let haverage = homeworkTotal / homeworks;

let grade = (taverage * 0.6) + (qaverage * 0.3) + (haverage * 0.1);

var r = document.getElementById("report-card-output");
r.innerHTML = "Tests: " + taverage.toFixed(2) + "<br/>" + "Quizzes: " + qaverage.toFixed(2) + "<br/>" + "Homework: " + haverage.toFixed(2) + "</br>" + "Grade: " + grade.toFixed(2);




  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
