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
const playerScoreEl = document.querySelector("#player-score");
const dealerScoreEl = document.querySelector("#dealer-score");
const roundMessageEl = document.querySelector("#round-message");

// Event Listeners
drawBtnEl.addEventListener("click", handleDraw);

// Functions
function init() {
  deck = [
    "dA",
    "dQ",
    "dK",
    "dJ",
    "d10",
    "d09",
    "d08",
    "d07",
    "d06",
    "d05",
    "d04",
    "d03",
    "d02",
    "hA",
    "hQ",
    "hK",
    "hJ",
    "h10",
    "h09",
    "h08",
    "h07",
    "h06",
    "h05",
    "h04",
    "h03",
    "h02",
    "cA",
    "cQ",
    "cK",
    "cJ",
    "c10",
    "c09",
    "c08",
    "c07",
    "c06",
    "c05",
    "c04",
    "c03",
    "c02",
    "sA",
    "sQ",
    "sK",
    "sJ",
    "s10",
    "s09",
    "s08",
    "s07",
    "s06",
    "s05",
    "s04",
    "s03",
    "s02",
  ];

  playerCard = "";
  dealerCard = "";
  playerScore = 0;
  dealerScore = 0;
  round = 0;
  gameOver = false;

  resetBoard();
}

init();

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

// Randomly removes one card from the deck
function drawCard() {
  const idx = Math.floor(Math.random() * deck.length);
  // Return card strings from the deck array
  return deck.splice(idx, 1)[0];
}

function renderCards() {
  playerCardEl.className = `card card-large card-shadow ${playerCard}`;
  dealerCardEl.className = `card card-large card-shadow ${dealerCard}`;
}

function compareCards() {
  const playerValue = getCardValue(playerCard);
  const dealerValue = getCardValue(dealerCard);

  if (playerValue > dealerValue) {
    playerScore++;
  } else if (dealerValue > playerValue) {
    dealerScore++;
  }
}

function getCardValue(card) {
  // removes the first char of card string
  const rank = card.slice(1);

  // ranking system
  if (rank === "A") {
    return 14;
  } else if (rank === "K") {
    return 13;
  } else if (rank === "Q") {
    return 12;
  } else if (rank === "J") {
    return 11;
  } else {
    return Number(rank);
  }
}
