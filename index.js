const game = document.getElementById("game");
const banner = document.getElementById("banner");
const newGameBtn = document.getElementById("new");
const scoreboard = document.getElementById("scoreboard");

let xWins = 0;
let oWins = 0;

let turn = "X";

banner.innerText = `${turn}'s move...`;
scoreboard.innerText = `Score - X: ${xWins}, O: ${oWins}`;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameboard;
let winner = "";

const newGame = () => {
  gameboard = Array(9);
  for (let i = 0; i < gameboard.length; i++) {
    const btn = document.createElement("button");
    btn.id = i;
    btn.innerText = "";
    btn.addEventListener("click", btnClick);
    game.appendChild(btn);
  }
};

const checkWin = () => {
  winConditions.forEach((condition) => {
    if (
      gameboard[condition[0]] === turn &&
      gameboard[condition[1]] === turn &&
      gameboard[condition[2]] === turn
    ) {
      winner = turn;
      lockBoard();
      winner === "X" ? xWins++ : oWins++;
      scoreboard.innerText = `Score - X: ${xWins}, O: ${oWins}`;
    }
  });

  if (winner) {
    return true;
  } else {
    return false;
  }
};

const lockBoard = () => {
  for (let i = 0; i < gameboard.length; i++) {
    const button = document.getElementById(i);
    button.disabled = true;
  }
};

const checkDraw = () => {
  if (!gameboard.includes()) {
    return true;
  }
  return false;
};

const btnClick = (event) => {
  const id = event.target.id;
  gameboard[id] = turn;
  const button = document.getElementById(id);
  button.innerText = turn;
  button.className = turn;
  button.disabled = true;
  if (checkWin()) {
    banner.innerText = `${winner} wins!!!!`;
    turn === "X" ? (turn = "O") : (turn = "X");
  } else {
    turn === "X" ? (turn = "O") : (turn = "X");
    banner.innerText = `${turn}'s move...`;
  }
  if (checkDraw()) {
    banner.innerText = `It's a draw, click new game to play again...`;
  }
};

const boardReset = () => {
  gameboard = Array(9);
  for (let i = 0; i < gameboard.length; i++) {
    const button = document.getElementById(i);
    button.innerText = "";
    button.className = "";
    button.disabled = false;
    winner = "";
    banner.innerText = `${turn}'s move...`;
  }
};

//take turns to add x and o on button click
newGameBtn.addEventListener("click", boardReset);
newGame();
