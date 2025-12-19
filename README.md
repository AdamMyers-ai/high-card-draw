# High Card Draw

![High Card Draw Logo](https://i.imgur.com/gHKtU7Q.png)

High Card Draw is a game inspired by classic casino games. The player and the dealer each draw a single card per round, and the higher card wins the point. The first to reach the required number of wins takes the game.

A **Risk Draw** option allows the player to gamble for extra points with the risk being potentially losing a point if the dealer has the higher card. This adds a bit of strategy and tension to an otherwise simple card game.

## How to Play

1. Click **Draw Cards** to draw one card for the player and the dealer.
2. The higher card wins the round and earns a point.
3. The first to reach the required number of wins, wins the game.
4. At anytime before either side is won point away from winning the game, the player can choose **Risk Draw** to:
   - Win the round and gain 2 points
   - Lose the round and lose 1 point
5. Risk Draw becomes disabled when either side is one win away from winning the game.
6. Click **Reset Game** to start over at any time.

## Win Condition

- The game is played as **Best of 14**
- First player to reach **7 wins** is declared the winner

## Theme & Design

The game is styled with a casino-inspired aesthetic:

- Felt table background
- Gold accents and glowing highlights
- Card visuals with image assets
- Clear visual feedback for game states and actions

## Game Logic Overview

- A standard 52-card deck is generated at the start of each game
- Cards are randomly drawn and removed from the deck
- Card values are parsed from card strings (A = 14, K = 13, Q = 12, J = 11)
- Game state is managed in JavaScript using DOM manipulation
- Risk Draw logic dynamically alters scoring and button availability

## Attributions

- **Playing card assets** provided by _GA Card Game Starter_ (SVG images for suits, ranks and card backs).
- **Fonts**:
  - _Cinzel_ - Google Fonts (used for headings and casino-style lettering)
  - _Montserrat_ - Google Fonts (used for buttons and UI text)
- **Logo** created with AI image generation and customized for this project.
- No external libraries or frameworks were used in the development of this project.
- MDN Web Docs (https://developer.mozilla.org/en-US/)

## Play the game

### Live Demo: [High Card Draw Demo](https://adammyers-ai.github.io/high-card-draw/)

### Run locally:

```bash
git clone https://github.com/AdamMyers-ai/high-card-draw.git

cd high-card-draw

open index.html
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, gradients, custom styling)
- JavaScript (DOM manipulation, game state logic)
- SVG card assets

## Screenshot

![Screenshot of game](https://i.imgur.com/P0oxdGE.png)

## Next Steps

- Add card flip animation
- Add sound effects for wins, losses and risk rounds
- Track win/loss history using localStorage
- Add difficulty modes or a streak multiplier
- Improve mobile responsiveness

## Why This Game?

This game was chosen to keep the core mechanics simple while allowing room for strategic decision-making. The Risk Draw feature adds tension and player agency, making the game engaging to play and fun to demonstrate.
