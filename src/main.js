import 'phaser';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);
