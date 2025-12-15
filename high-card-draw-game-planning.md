# High Card Draw - Project Planning

## Game Overview

High card draw is a simple card game where the player and the dealer each draw one card from a shuffled deck. The winner is determined by whose card has the higher value.

### Theme

Classic card table - Player vs. Dealer

---

## Win Conditions

- **Player Wins** if the player's card value is higher than the dealer's card value.
- **Dealer Wins** if the dealer's card value is higher than the player's card value.
- **Tie** if both player's cards have the same value.

---

## Initial Data Structure

```js
const game = {
  deck: [],

  player: {
    card: "",
  },

  dealer: {
    card: "",
  },

  winner: "", // player || dealer || tie
  gameOver: false,
};
```

## Pseudocode

### Initialize Game

- Create 52-card deck.
- Shuffle the deck.
- Reset player and dealer cards.
- Reset winner and gameOver.
- Render initial game state.

---

### Draw Cards

- If gameOver === true, return.
- Deal one card to the player.
- Deal one card to the dealer.
- Determine winner by comparing card values.
- Set gameOver = true.

---

### Determining Winner

- If player card value > dealer card value, players wins.
- If dealer card value > player card value, dealer wins.
- Else, tie.
