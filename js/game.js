/* global Phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: June 2023
//This is the Phaser3 configuration file

//scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"

//create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()

/**
 * Start Phaser game
 */
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: "arcade",
        arcade: {
            debug : true,
        },
    },
    //set background color
    backgroundColor:0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        //we place it in the middle of the page
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

    const game = new Phaser.Game(config)
    console.log(game)

    //load scenes
    //Note: remember any "key" is global and CAN NOT be reused!
    game.scene.add("splashScene", splashScene)
    game.scene.add("titleScene", titleScene)
    game.scene.add("menuScene", menuScene)

    //the starting scene
    game.scene.start("splashScene")
    