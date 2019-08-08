/* jshint esversion: 8 */
const scoreBoard = document.getElementById('score');
let userScore = 0;
let compScore = 0;
const announce = document.getElementById('announce');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
scoreBoard.innerHTML = `${userScore}:${compScore}`;

function randomeChoice() {
  randome = Math.floor(Math.random() * 3);
  choices = ['r','p','s'];
  return choices[randome];
}

function wordConverter(word) {
  if (word === 'r') {
    return 'Rock';
  } else if (word === 'p') {
    return 'Paper';
  }else {
    return 'Scissors';
  }
}

function win(computer,user) {
  userScore++;
  scoreBoard.innerHTML = `${userScore}:${compScore}`;
  announce.innerHTML=`${wordConverter(user)} beats ${wordConverter(computer)} YOU WONE! 🔥`;
}
function lose(computer,user) {
  compScore++;
  scoreBoard.innerHTML = `${userScore}:${compScore}`;
  announce.innerHTML=`${wordConverter(user)} Loses to ${wordConverter(computer)} YOU lOST! 🤦🏽‍`;
}
function draw(computer,user) {
  announce.innerHTML=`${wordConverter(user)} is the same as ${wordConverter(computer)} UGH A TIE! 🙄`;
}

function CompChoices(choice) {
  randome = randomeChoice();
  switch (randome + choice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(randome,choice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(randome,choice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(randome,choice);
      break;

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
