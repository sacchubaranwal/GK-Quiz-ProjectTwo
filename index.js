var readlineSync = require("readline-sync");
const chalk = require('chalk');
 
var score = 0;

console.log(chalk.bgMagenta.italic.whiteBright.underline.bold("Welcome!  This Quiz is all about our country and anyone can participate in this quiz... "));
console.log(chalk.bgBlack("-----------------------------------------"));
console.log(chalk.bgMagenta.italic.whiteBright.underline.bold("Chill!!   It is just for fun..."));
console.log(chalk.bgBlack("-----------------------------------------"));

 var userName = readlineSync.question(chalk.green.bold("What do people call you?"));

var shalini = {name: "Shalini",
points: 10};

var shivangi = {name: "Shivangi",
points: 10};

var rashid = {name: "Rashid",
points: 9};

var shivam = {name: "Shivam",
points: 8};

var abhinav = {name: "Abhinav",
points: 7};

var leaderBoard = [shalini, shivangi, rashid, shivam, abhinav];

console.log(chalk.bgBlack("-----------------------------------------"));
console.log(chalk.blueBright.bold("Hi " + userName + "!  These are the top performers of this quiz: "));
for(var i=0; i<leaderBoard.length; i=i+1){
var currentName = leaderBoard[i];
  console.log(chalk.bold.blueBright(currentName.name + " " + currentName.points));
}


console.log(chalk.bgBlack("-----------------------------------------"));
console.log(chalk.bgRed.white.bold("___----MCQ type questions----___"));
console.log(chalk.bgWhite.bold.red.underline("-----This quiz has 2 levels-----"));
console.log(chalk.bgRed.white.bold("-------->LEVEL 0--------"));
console.log(chalk.bgRed.white.bold("------->>LEVEL 1--------"));

console.log(chalk.bgBlack("-----------------------------------------"));
var que = readlineSync.question(chalk.bold.white.bgMagenta.underline("So " + userName + "! are you ready for the quiz?"));
console.log(chalk.bgBlack("-----------------------------------------"));
console.log(chalk.bold.underline.white.italic("Ok then! let's get started..."));
console.log(chalk.bgBlack("-----------------------------------------"));
console.log(chalk.bgBlack("                                         "));


var q1 = {
  question: "1.Who is known as the father of India?  a-Sardar Patel  b-BR Ambedkar  c-Mahatma Gandhi  d-Subhash Chandra Bose",
  answer: "c"};

var q2 = {
  question: "2.Who is known as the 'IRON MAN' of India?  a-Bhagat Singh  b-Sardar Patel  c-Subhash Chandra Bose  d-BR Ambedkar",
  answer: "b"};

var q3 = {
  question: "3.What is the national language of india?  a-Marathi  b-Tamil  c-Hindi  d-None of these",
  answer: "d"};

var q4 = {
  question: "4.How many states are there in India?  a-27  b-28  c-29  d-29",
  answer: "c"};

var q5 = {
  question: "5.What are the total no.of UTs are their in india?  a-8  b-7  c-9  d-4",
  answer: "b"};

var q6 = {
  question: "6.Who is the India's first president?  a-BR Ambedkar  b-Sardar Patel  c-Rajendra Prasad  d-Swami Raghunathan",
  answer: "c"};

var q7 = {
  question: "7.Where is 'Haridwar' situated in india?  a-Himachal Pradesh  b-Jammu&kashmir  c-Uttarakhand  d-Chandigarh",
  answer: "c"};

var q8 = {
  question: "8.Who discovered india?  a-Nicolus Colombus  b-VascoDaGama  c-Swami Vivekanand  d-Louis Columbus",answer: "b"};

var q9 = {
  question: "9.Who is the current MSMEs minister of india?  a-Arjun Munda  b-Piyush Goyal  c-Nitin Gadkari   d-Narendra Modi",
  answer: "c"};

var q10 = {
  question: "10.Who is the current Information&Broadcasting minister of india?  a-Prakash Javedkar  b-Nitin Gadkari  c-Ramesh Pokhriyal  d-Piyush Goyal",answer: "a"};

var arrayQue = [q1, q2, q3, q4, q5 ];


for(var i=0; i<arrayQue.length; i=i+1){
var currentQuestion = arrayQue[i];
  var userAnswer = readlineSync.question(chalk.magentaBright.bold(currentQuestion.question));

  if(userAnswer === currentQuestion.answer){
    var score = score + 1;
    console.log(chalk.italic.green.bold("Correct answer!"));
    console.log(chalk.italic.green("Your current score is: "+ score))
  }else{
    var score = score;
    console.log(chalk.italic.red.bold("Wrong Answer!"))
    console.log(chalk.italic.red("Your current score is: " + score))
  }
}
console.log(chalk.bgBlack("--------------------------"));
console.log(chalk.bgRed.whiteBright.bold("You scored " + score + " points in levelZero!!"));
console.log(chalk.bgBlack("                          "));

if(score >= 2){
  console.log(chalk.bgWhite.redBright.bold("Great job! " + userName + "! You entered in levelOne..."))
  console.log(chalk.bgBlack("                         "))
  console.log(chalk.bgWhite.redBright.bold("^^^---Let's move on to levelOne---^^^"))
  console.log(chalk.bgRed.whiteBright.bold("Welcome to levelOne---- "))
  console.log(chalk.bgBlack("-----------------------------------------"))
}
else{
  console.log("No issues " + userName + "! Better luck next time...")
}
 
if(score >=2){
var arrayQuestions = [q6, q7, q8, q9, q10];
for(var i=0; i<arrayQuestions.length; i++){
  var currentQuestions = arrayQuestions[i];
  var userAnswers = readlineSync.question(chalk.bold.yellowBright(currentQuestions.question));

if(userAnswers === currentQuestions.answer){
    var score = score + 1;
    console.log(chalk.italic.green.bold("Correct answer!"));
    console.log(chalk.italic.green("Your current score is: "+ score))
  }else{
    var score = score;
    console.log(chalk.italic.red.bold("Wrong Answer!"))
    console.log(chalk.italic.red("Your current score is: " + score))
  }
}
}

console.log(chalk.bgBlack("---------------------------------"))
console.log(chalk.underline.bold.blueBright("Your final score is: " + score));

if(score >= 7){
  console.log(chalk.bold.magentaBright.italic("Congratulations! " + userName + " You made your way to the leaderBoard..."))
  console.log(chalk.bgBlack("                         "))
  console.log(chalk.bold.magentaBright.italic("Send me the ss of the final score so that I can mention your name in the leaderBoard..."))
  console.log(chalk.bgBlack("                         "))
}else{
  console.log("You were so close to the leaderBoard!!")
  console.log(chalk.bgBlack("                         "))
  console.log("Anyways... Relax and enjoy! bz.. this quiz is just for fun my fried!!!  Ha Ha!")
}


console.log(chalk.bgWhite.black.bold.underline("Thanks for taking the quiz..,if you have any doubt in any question, feel free to ask..."));

console.log(chalk.bgBlack("---------------------------------"))

console.log(chalk.bgWhite.black.bold("Thank You!"));