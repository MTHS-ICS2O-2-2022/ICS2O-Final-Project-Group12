/* global Phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: June 2023
//This is the Title Scene

/** 
    *This class is the Title Scene
    */
class TitleScene extends Phaser.Scene {
    /*
    *This method is the constructor
    */
    constructor() {
        super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
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
        console.log("Title Scene")
        this.load.image("titleSceneBackground", "./assets/cakeStackerStartPage.svg")
    }

    /**
     * Can be defined on your own scenes
     * Use it to create your game objects
     * @param {object} data- Any data passed via scenePlugin.add () or scenePlugin.start ()
     */
    create(data) {
        this.titleSceneBackgroundImage = this.add
        .sprite(0, 0, "titleSceneBackground")
        .setScale(1)
        this.titleSceneBackgroundImage.x = 1920 / 2
        this.titleSceneBackgroundImage.y = 1080 / 2

    }



    /**
     * Should be overridden on your own scenes
     * This method is called once per game step while the scene is running
     * @param {number} time- The current time
     * @param {number} delta- The delta time in ms since the last frame
     */
    update(time, delta) {
        //pass
    }
}

export default TitleScene
