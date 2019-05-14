import './styles/game.css';
import Game from './partials/Game';

// create a game instance
// const game = new Game('game', 512, 256);

const game = new Game('game', 1000, 600);


(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
