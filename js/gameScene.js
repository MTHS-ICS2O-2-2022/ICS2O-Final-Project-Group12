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
    createCake() {
        const cakeXLocation = Math.floor(Math.random() * 1920) + 1
        let cakeXVelocity = Math.floor(Math.random() * 50) + 1
        cakeXVelocity = Math.round(Math.random()) ? 1 : -1
        const aCake = this.physics.add.sprite(cakeXLocation, -100, "cake1")
        aCake.body.velocity.y = 200
        aCake.body.velocity.x = cakeXVelocity
        this.cake.add(aCake)
    }

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
        this.load.image("cake1", "./assets/cake1.svg")
    }

    /**
     * Can be defined on your own scenes
     * Use it to create your game objects
     * @param {object} data- Any data passed via scenePlugin.add () or scenePlugin.start ()
     */
    create(data) {
        this.background = this.add.sprite(0, 0, "gameSceneBackground")
        this.background.setOrigin(0, 0)
        this.cakePlatter = this.physics.add.sprite(
        1920 / 2,
        1080 - 100,
        "cakePlatter"
        )
        this.cakePlatter.body.immovable = true

        // Add cake
        this.cake = this.add.group()
        this.cake.enableBody = true
        this.createCake()

        // collision between cake and cake platter
        this.physics.add.collider(
        this.cake,
        this.cakePlatter,
        function (cakeCollide, cakePlatterCollide) {
            //this.sound.play("splat.wav")
            // stop the cake from moving
            cakeCollide.body.velocity.y = 0
            cakeCollide.body.velocity.x = 0
            cakeCollide.body.acceleration.x = 0
            cakeCollide.body.acceleration.y = 0
            cakeCollide.body.immovable = true
            cakeCollide.body.setGravityY(0)
            cakeCollide.y = cakeCollide.y - 1
            this.createCake()
        }.bind(this)
        )

        // this.cake[0]
    }

    /**
     * Should be overridden on your own scenes
     * This method is called once per game step while the scene is running
     * @param {number} time - The current times
     * @param {number} delta - The delta time in ms since the last frame
     */
    update(time, delta) {
        const keyleftObj = this.input.keyboard.addKey("LEFT")
        const keyrightObj = this.input.keyboard.addKey("RIGHT")

        if (keyleftObj.isDown === true) {
        //console.log("left")
        var aSingleCake = this.cake.getLast(true)
        aSingleCake.x -= 15
        //if (this.cake1.x < 0) {
        //this.cake1.x = 0
        //}
        }

        if (keyrightObj.isDown === true) {
        //console.log("right")
        var aSingleCake = this.cake.getLast(true)
        aSingleCake.x += 15
        //if (this.cake1.x > 1920) {
        //   this.cake1.x = 1920
        //}
        }

        const numberOfCakes = this.cake.getLength()
        if (numberOfCakes > 1) {
        var lastCake = this.cake.getChildren()[numberOfCakes - 1]
        var secondLastCake = this.cake.getChildren()[numberOfCakes - 2]
        const testCollide = this.physics.overlap(
            this.cake.getChildren()[numberOfCakes - 1],
            this.cake.getChildren()[numberOfCakes - 2]
        )
        if (testCollide === true) {
            console.log("collide")
            this.cake.getChildren()[numberOfCakes - 1].body.immovable = true
            this.cake.getChildren()[numberOfCakes - 1].body.velocity.y = 0
            this.cake.getChildren()[numberOfCakes - 1].body.velocity.x = 0

            this.createCake()
            }   
        }
    }
}

export default GameScene