/* global Phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: June 2023
//This is the Game Scene

/**
 * This class is the Game Scene
 */
class GameScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
        super({ key: "gameScene" })
    }

    /**
     * Can be defined on your own scenes
     * This method is called by the scene manager when the scene starts
     * before preload () and create ()
     * @param {object} data- Any data passed via scenePlugin.add () or scenePlugin.start ()
     */
    init(data) {
        this.cameras.main.setBackgroundColor("#ffffff")
    }

    /**
     * Can be defined on your own scenes
     * Use it to load assets
     */
    preload() {
        console.log("Game Scene")
        this.load.image("gameSceneBackground", "./assets/pinkBackground.svg")
        this.load.image("cakePlatter", "./assets/cakePlatter.png")
    }

    /**
     * Can be defined on your own scenes
     * Use it to create your game objects
     * @param {object} data- Any data passed via scenePlugin.add () or scenePlugin.start ()
     */
    create(data) {
        this.background = this.add.sprite(0, 0, "gameSceneBackground")
        this.background.setOrigin(0, 0)
        this.cakePlatter = this.add.sprite(1920 / 2, 1080-100, "cakePlatter")
    }

    /**
     * Should be overridden on your own scenes
     * This method is called once per game step while the scene is running
     * @param {number} time - The current times
     * @param {number} delta - The delta time in ms since the last frame
     */
    update(time, delta) {
        //pass
    }
}

export default GameScene
