//% weight=100 color=#0fbc11 icon=""
namespace custom {

    export function drawAimLine(sprite :Sprite, aimSprite:Sprite) {
        game.onShade(() => {
            console.log("drawing line")
            let canvas = image.create(160, 120)
            let camera = game.currentScene().camera
            canvas.drawLine(sprite.x - camera.offsetX, sprite.y - camera.offsetY,
                aimSprite.x - camera.offsetX, aimSprite.y - camera.offsetY, 1)
            screen.drawTransparentImage(canvas, 0, 0)
        })
    }
}
