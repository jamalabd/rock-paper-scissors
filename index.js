/* jshint esversion: 8 */
const scoreBoard = document.getElementById('score');
let userScore = 0;
let compScore = 0;
const announce = document.getElementById('announce');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


function randomeChoice() {
  randome = Math.floor(Math.random() * 3);
  choices = ['r','p','s'];
  return choices[randome];
}

function wine() {
  userScore++;
  scoreBoard.innerHTML = `${userScore}:${compScore}`;
  announce.innerHTML=`${u} VS ${c} YOU WONE! 🔥`;
}
function lose() {
  compScore++;
  scoreBoard.innerHTML = `${userScore}:${compScore}`;
  announce.innerHTML=`${u} VS ${c} YOU lOST! 🤦🏽‍`;
}
function draw() {
  scoreBoard.innerHTML = `${userScore}:${compScore}`;
  announce.innerHTML=`${u} VS ${c} UGH A TIE! 🙄`;
}

function CompChoices(choice) {
  randome = randomeChoice();
  switch (randome + choice) {
    case 'rs':
    case 'pr':
    case 'sp':
      wine();
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose();
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw();
      break;
    default:

  }
}

function main(){
  rock.addEventListener('click', ()=>{
    CompChoices('r');
  });

  paper.addEventListener('click', ()=>{
    CompChoices('p');

  });

  scissors.addEventListener('click', ()=>{
    CompChoices('s');

  });
}

main();
