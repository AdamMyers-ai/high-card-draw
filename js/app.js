// Constants
const maxRounds = 5;

// Variables
let deck;
let playerCard;
let dealerCard;
let playerScore;
let dealerScore;
let round;
let gameOver;

// Cached Element References
const playerCardEl = document.querySelector("#player-card");
const dealerCardEl = document.querySelector("#dealer-card");
const drawBtnEl = document.querySelector("#draw-btn");

// Event Listeners
drawBtnEl.addEventListener("click", handleDraw);

// Functions
init();

function init() {
  deck = createDeck();
  playerScore = 0;
  dealerScore = 0;
  round = 0;
  gameOver = false;

  resetBoard();
}

function handleDraw() {
  if (gameOver === true) return;
  if (deck.length < 2) return;

  round++;

  playerCard = drawCard();
  dealerCard = drawCard();

  renderCards();
  compareCards();
  checkWinner();
}
