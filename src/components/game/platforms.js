import Phaser from 'phaser'
import Platform from "./platform";

export default class PlatformGroup extends Phaser.Physics.Arcade.StaticGroup {
    constructor(scene, platformCount) {
        super(scene.physics.world, scene);
        scene.add.existing(this)
        scene.physics.world.enable(this)
        new Array(platformCount)
            .fill(0)
            .map((_, index) => new Platform(this, index, platformCount))
    }
}