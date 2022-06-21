import Phaser from 'phaser'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 0, 0, 'player');
        const platform = scene.platforms.children.get(0)
        const image = scene.textures.get('player').getSourceImage()
        this.minPositionX = image.width / 2
        this.minPositionY = image.height / 2
        this.setPosition(platform.x, platform.y - platform.minPositionY - this.minPositionY)
        scene.add.existing(this)
        scene.physics.world.enable(this)
        this.setName('player')
        this.setCollideWorldBounds(true)
        this.setBounce(0.2)
        this.jumpSpeed = 1.7
        this.lastJumpPlatform = platform
        this.lastJumpTimestamp = Date.now()
        this.lastJumpPositionY = this.y
        this.setInteractive({draggable: true})
            .on('dragstart', (pointer) => this.onPlayerDragStart(pointer))
            .on('dragend', (pointer) => this.onPlayerDragEnd(pointer))
    }

    onPlayerDragStart({x, y}) {
        if (!this.isDragging && this.body.touching.down) {
            this.position = {x, y}
            this.isDragging = true
        }
    }

    onPlayerDragEnd({x, y}) {
        if (this.isDragging) {
            const ratio = {
                x: this.position.x - x,
                y: (this.position.y - y) * this.jumpSpeed,
            }
            this.setVelocity(ratio.x, ratio.y)
            this.isDragging = false
        }
    }

    onPlatformCollision(platform) {
        if (this.body.touching.down) {
            if (this.lastJumpPlatform !== platform) {
                if (platform.index > this.lastJumpPlatform.index) {
                    this.updateScore(Date.now() - this.lastJumpTimestamp)
                }
                platform.delayDestroy()
                this.lastJumpPlatform = platform
                this.lastJumpPositionY = this.y
            }
        }
    }

    get isFalling() {
        return this.y - this.lastJumpPlatform.minPositionY > this.lastJumpPositionY
    }

    updateScore(timestampDiff) {
        const scoreBasis = 10
        let multiplier = 1
        if (timestampDiff < 500) {
            multiplier = 2
        }
        this.scene.board.addScore(scoreBasis * multiplier)
    }
}