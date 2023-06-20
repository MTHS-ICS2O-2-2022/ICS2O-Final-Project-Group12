/* global Phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: June 2023
//This is the Splash Scene

/*
 *This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
  /*
   *This method is the constructor
   */
  constructor() {
    super({ key: "splashScene" })

    this.splashSceneBackgroundImage = null
    this.titleMusic = null
  }

  /**
   * Can be defined on your own scenes
   * This method is called by the scene manager when the scene starts
   *  before preload () and create ()
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
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")

    //sound
    this.load.audio("splashMusic", "./assets/them.wav")
  }

  /**
   * Can be defined on your own scenes
   * Use it to create your game objects
   * @param {object} data- Any data passed via scenePlugin.add () or scenePlugin.start ()
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2

    //music
    this.titleMusic = this.sound.add("splashMusic")
  }

  /**
   * Should be overridden on your own scenes
   * This method is called once per game step while the scene is running
   * @param {number} time- The current time
   * @param {number} delta- The delta time in ms since the last frame
   */
  update(time, delta) {
    if (time > 7000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
