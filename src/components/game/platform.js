import Phaser from 'phaser'
import getRandomInteger from "./utils";

export default class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(group, index, totalCount) {
        super(group.scene, 0, 0, 'platform');
        this.group = group
        this.setName(`platform-${index}`)
        this.index = index
        const image = group.scene.textures.get('platform').getSourceImage()
        this.minPositionX = image.width / 2
        this.minPositionY = image.height / 2
        this.maxPositionX = group.scene.game.config.width - this.minPositionX
        this.maxPositionY = group.scene.physics.world.bounds.height - this.minPositionY
        this.setPosition(getRandomInteger(this.minPositionX, this.maxPositionX), this.maxPositionY - index * this.maxPositionY / totalCount)
        group.add(this, true)
    }

    delayDestroy() {
        if (!this.destroyTween) {
            this.destroyTween = this.scene.tweens.add({
                targets: this,
                alpha: 0.1,
                delay: 1000,
                duration: 5000,
                onComplete: () => this.group.remove(this, true)
            });
        }
    }
}