import React, {Component} from 'react';
import './css/game.css';
class Game extends Component{
    render(){
        return (
        <div class="content">
            <div class="header">
                <div class="header-title">
                    <strong>2048</strong>
                </div>
                <div class="header-scrore">SCORE
                    <input type="text" class="score" value="0" id="score"/>
                </div>
                    <div class="header-best">BEST
            <input type="text" class="best" value="0" id="best"/>
        </div>
                    </div>

                    <div class="above-cell">
                        <div class="above-line">Join the number and get to the
            <strong>2048 tile!</strong>
                        </div>
                        <button type="button" class="newgame" value="New Game" onclick="resetGame()">
                            <strong>New Game</strong>
                        </button>
                    </div>
                    <div class="game-info">
                        <div class="game-message">

                        </div>
                        <div class="game-choice">
                            <button class="ok" onclick="okclick()">ok</button>
                            <button class="restart" onclick="restart()">restart</button>
                        </div>
                    </div>
                    <div class="cell">

                        <div class="cell-row">
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                        </div>
                        <div class="cell-row">
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                        </div>
                        <div class="cell-row">
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                        </div>
                        <div class="cell-row">
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                            <div class="cell-grid"></div>
                        </div>
                    </div>
                    <p><strong>HOW TO PLAY：</strong>Use your <strong>arrow keys</strong> to move the tiles.When two tiles with the same number touch,they <strong>merge into one!</strong></p>

</div>
);
    }
}
export default Game;