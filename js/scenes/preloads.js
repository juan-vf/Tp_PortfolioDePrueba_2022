// Clase Preloads, para separar los preloads y tener mejor orden
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    this.load.image("sad_cow", "/assets/images/sad_cow.png");
    this.load.image("phaser_logo", "/assets/images/phaser_logo.png");
    this.load.image(
      "mainmenu_bg",
      "/assets/images/main_menu_background.png"
    );
    // this.load.image("sky", "public/assets/images/sky.png");
    // this.load.image("ground", "public/assets/images/platform.png");
    this.load.image("star", "/assets/images/star.png");
    this.load.image("bomb", "/assets/images/bomb.png");
    this.load.spritesheet("dude", "/assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.tilemapTiledJSON("map", "/assets/tilemaps/map.json");
    this.load.image("tilesBelow", "/assets/images/sky_atlas.png");
    this.load.image("tilesPlatform", "/assets/images/platform_atlas.png");
    
    //Nivel 2 preloads
    this.load.tilemapTiledJSON("mapL2", "/assets/tilemaps/Level2.json" )
    //this.load.tilemapTiledJSON("mapL3", "public/assets/tilemaps/atlas2.json")
    this.load.image("fondo3", "/assets/images/sky22.png")
    //this.load.image("fondo02", "public/assets/images/sky2.png")
    this.load.image("plataforma02", "/assets/images/ground.png")
    this.load.image("luna", "/assets/images/luna.png")

    //Nivel 3 preloads
    this.load.tilemapTiledJSON("mapL3", "/assets/tilemaps/Level3.json" )
    this.load.image("fondo4", "/assets/images/Sky33.png")
    this.load.image("plataforma03", "/assets/images/waterP.png")

  }

  create() {
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
