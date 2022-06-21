import Phaser from 'phaser'
import {resetScore, store, updateRounds, updateScore} from "../../store";

export default class Board extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene, scene.game.config.width - 150, 10, '', {});
        scene.add.existing(this)
        this.setFontSize(24)
        this.setLineSpacing(10)
        this.setColor('#fff')
        this.setScrollFactor(0)
        const { rounds, score } = store.getState()
        this.rounds = rounds
        this.score = score
    }

    refreshDisplay() {
        this.setText([
            `Round: ${this.rounds}`,
            `Score: ${this.score}`
        ])
    }

    decreaseRound() {
        this.rounds--
        store.dispatch(updateRounds())
    }

    resetScore() {
        this.score = 0
        store.dispatch(resetScore())
    }

    addScore(score) {
        this.score += score
        store.dispatch(updateScore(this.score))
    }
}
