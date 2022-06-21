import React from 'react'
import Phaser from 'phaser'

import '../../App.css'
import Scene from "../game/scene";


export default function GameReady() {
    const CANVAS_WIDTH = 400
    const CANVAS_HEIGHT = 600

    const componentId = 'phaser-game'

    new Phaser.Game({
        type: Phaser.AUTO,
        parent: componentId,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        scene: Scene,

        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: {
                    y: 300,
                },
            },
        },
    })

    return <div id="{componentId}"/>
}
