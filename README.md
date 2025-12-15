# High Card Draw — Project Planning

## Game Overview

**High Card Draw** is a browser-based card game where a player competes against the dealer by drawing cards from a standard deck. Each round, both the player and dealer draw one card. The higher card wins the round.

The game is played as a **Best of 5** match. The first participant (player or dealer) to win **3 rounds** wins the game.

---

## Theme

Classic card table / casino-lite theme:

- Player vs Dealer
- Simple, readable UI

---

## Win Conditions

### Round Win

- Player wins the round if their card value is higher than the dealer’s
- Dealer wins the round if their card value is higher than the player’s
- Equal values result in a tie round (no score awarded)

### Game Win (Best of 5)

- First to **3 round wins** wins the game
- Once a game winner is determined:
  - No further cards may be drawn
  - A win message is displayed
  - Player must reset to start a new match

---

## Game Rules

1. A standard 52-card deck is generated and shuffled at the start of the game
2. Player clicks **Draw Card**
3. Player and dealer each draw one card
4. Card values are compared
5. Round winner is determined
6. Score is updated
7. Game checks for Best of 5 completion
8. Player may draw again unless the game is over

---

## Initial Game State (Data Structure)

```js
const gameState = {
  deck: [],

  playerCard: "",
  dealerCard: "",

  playerScore: 0,
  dealerScore: 0,

  roundsPlayed: 0,
  maxRounds: 5,

  gameOver: false,
  message: "",
};
```

## Pseudocode

### Initialize Game

```js
function initGame():
  create deck
  shuffle deck
  reset scores to 0
  reset roundsPlayed
  set gameOver to false
  clear displayed cards
  update message
  render UI
```

### Draw Cards

```js
function drawCards():
  if gameOver is true:
    return

  playerCard = draw one card from deck
  dealerCard = draw one card from deck

  roundsPlayed += 1

  determineRoundWinner()
  checkForGameWinner()
  update message
  render UI
```

### Determine Round Winner

```js
function determineRoundWinner():
  if playerCard.value > dealerCard.value:
    playerScore += 1
    message = "Player wins the round!"
  else if dealerCard.value > playerCard.value:
    dealerScore += 1
    message = "Dealer wins the round!"
  else:
    message = "Round is a tie!"
```

### Check for Best of 5 Winner

```js
function checkForGameWinner():
  if playerScore === 3:
    gameOver = true
    message = "Player wins the match!"
  else if dealerScore === 3:
    gameOver = true
    message = "Dealer wins the match!"
```

### Reset Game

```js
function resetGame():
  call initGame()
```
