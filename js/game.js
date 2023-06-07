/* global Phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: June 2023
//This is the Phaser3 configuration file

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
        }
    },
    //set background color
    backgroundColor:0xFFB3E5FC,
    scale: {
        mode: Phaser.Scale.FIT,
        //we place it in the middle of the page
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

    const game = new Phaser.Game(config)
    console.log(game)
    