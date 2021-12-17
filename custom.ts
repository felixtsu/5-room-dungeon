//% weight=100 color=#0fbc11 icon=""
namespace custom {

    class AimingLine {

        color:number
        fromSprite:Sprite
        towardsSprite:Sprite

        public constructor(fromSprite:Sprite, towardsSprite:Sprite, color:number) {
            this.fromSprite = fromSprite
            this.towardsSprite = towardsSprite
            this.color = color
        }

    }

    let aimingLines:AimingLine[] = []

    //%blockid=customcreateaimingline block="画出从 %fromSprite=variables_get(fromSprite) 到 %towardsSprite=variables_get(towardsSprite) 的瞄准线"
    //% blockSetVariable=aimingLine
    export function createAimingLine(fromSprite:Sprite, towardsSprite:Sprite) :AimingLine{
        let aimingLine = new AimingLine(fromSprite, towardsSprite, 0)
        aimingLines.push(aimingLine)
        return aimingLine
    }

    //%blockid=customdestoryaimingline block="消除瞄准线 %aimingLine=variables_get(aimingLine)"
    export function destroy(aimingLine:AimingLine) {
        aimingLines.removeElement(aimingLine)
    }

    
    game.onShade(() => {
        let canvas = image.create(160, 120)
        let camera = game.currentScene().camera
        for (let aimingLine of aimingLines) {
            let fromSprite = aimingLine.fromSprite
            let towardsSprite = aimingLine.towardsSprite
            canvas.drawLine(fromSprite.x - camera.offsetX, fromSprite.y - camera.offsetY,
                towardsSprite.x - camera.offsetX, towardsSprite.y - camera.offsetY, 1)
            screen.drawTransparentImage(canvas, 0, 0)
        }
    })

}
