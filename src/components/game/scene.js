import Phaser from "phaser";
import Player from "./player";
import PlatformGroup from "./platforms";
import Board from "./board";

const BACKGROUND_SCALE = 5

export default class GameScene extends Phaser.Scene {
    preload() {
        this.load.image('cloud', 'assets/images/cloud.png')
        this.load.image('player', 'assets/images/avatar3.png')
        this.load.image('platform', 'assets/images/platform.png')
    }

    create() {
        // Set up the camera and world bounds
        this.physics.world.setBounds(0, 0, this.game.config.width, this.game.config.height * BACKGROUND_SCALE)

        // create the background
        this.add.image(0, 0, 'cloud')
            .setOrigin(0)
            .setScrollFactor(0)

        // create platforms
        this.platforms = new PlatformGroup(this, 5 * BACKGROUND_SCALE)

        // create the main player
        this.player = new Player(this)

        // create the status board
        this.board = new Board(this)

        // setup collisions
        this.physics.add.collider(this.platforms, this.player, (player, platform) => player.onPlatformCollision(platform))

        // Set up the camera
        this.cameras.main.setBounds(
            this.physics.world.bounds.x,
            this.physics.world.bounds.y,
            this.physics.world.bounds.width,
            this.physics.world.bounds.height)
        this.cameras.main.startFollow(this.player, true)
    }

    update(time, delta) {
        if (this.player.isFalling) {
            this.board.decreaseRound()
            this.board.resetScore()
            if (this.board.rounds === 0) {
                this.scene.stop()
            } else {
                this.scene.restart()
            }
        } else {
            if (!this.input.activePointer.isDown && this.player.body.touching.down) {
                this.player.setVelocityX(0)
            }
        }
        this.board.refreshDisplay()
    }
}