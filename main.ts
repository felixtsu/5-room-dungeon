namespace SpriteKind {
    export const Firewood = SpriteKind.create()
    export const Candle = SpriteKind.create()
    export const OrbBase = SpriteKind.create()
    export const Orb = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    if (pressButton(1)) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        tiles.setTileAt(location, sprites.dungeon.buttonPinkDepressed)
        revealTreasureIfAllButtonActivated()
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(4, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
function enterRoom2 () {
    currentRoomNumber = 2
    multilights.toggleLighting(true)
    tiles.placeOnTile(princessSprite, tiles.getTileLocation(15, 4))
}
function pressButton (answer: number) {
    if (game.askForNumber("?", 1) == answer) {
        activatedButton += 1
        return true
    } else {
        return false
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    enterRoom1()
})
function toggleLight () {
    if (currentRoomNumber != 1) {
        if (torchOn) {
            multilights.removeLightSource(princessSprite)
        } else {
            torchIndicatorShown = true
            multilights.addLightSource(princessSprite, 12)
        }
        torchOn = !(torchOn)
    }
}
function toggleLever () {
    if (leverUp) {
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.greenSwitchDown)
        for (let 值 of sprites.allOfKind(SpriteKind.Candle)) {
            multilights.addLightSource(值, 10)
        }
    } else {
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.greenSwitchUp)
        for (let 值2 of sprites.allOfKind(SpriteKind.Candle)) {
            multilights.removeLightSource(值2)
        }
    }
    leverUp = !(leverUp)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Firewood, function (sprite, otherSprite) {
    otherSprite.sayText("A", 500, false)
    if (controller.A.isPressed()) {
        if (lightFirewoodShown || game.ask("点燃柴火？")) {
            lightFirewoodShown = true
            otherSprite.destroy(effects.fire, 2000)
            multilights.addLightSource(otherSprite, 6)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OrbBase, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        aimingOrb = true
        aimingLine = custom.createAimingLine(princessSprite, otherSprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    enterRoom4()
})
function enterRoom3 () {
    currentRoomNumber = 3
    multilights.toggleLighting(true)
    tiles.placeOnTile(princessSprite, tiles.getTileLocation(15, 14))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (princessSprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp) || princessSprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchDown)) {
        if (game.ask("拨动开关?")) {
            toggleLever()
        }
    }
    if (princessSprite.tileKindAt(TileDirection.Center, sprites.dungeon.chestClosed)) {
        if (game.ask("打开宝箱？")) {
            tiles.setTileAt(tiles.getTileLocation(7, 1), sprites.dungeon.chestOpen)
            game.splash("一股邪恶的诅咒落在你的头上")
        } else {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    enterRoom3()
})
function revealTreasureIfAllButtonActivated () {
    if (activatedButton == 3) {
        tiles.setTileAt(tiles.getTileLocation(7, 1), sprites.dungeon.chestClosed)
    }
}
function enterRoom1 () {
    tiles.placeOnTile(princessSprite, tiles.getTileLocation(4, 1))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    toggleLight()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    sprite.sayText("?", 100, false)
})
function enterRoom4 () {
    currentRoomNumber = 4
    multilights.toggleLighting(false)
    tiles.placeOnTile(princessSprite, tiles.getTileLocation(29, 11))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    if (pressButton(3)) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        tiles.setTileAt(location, sprites.dungeon.buttonOrangeDepressed)
        revealTreasureIfAllButtonActivated()
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(4, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (aimingOrb) {
        orbSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 3 2 2 . . . . . . 
            . . . . 2 2 3 1 3 2 2 . . . . . 
            . . . . 2 3 1 1 1 3 2 . . . . . 
            . . . . 2 2 3 1 3 2 2 . . . . . 
            . . . . . 2 2 3 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Orb)
        multilights.addLightSource(orbSprite, 8)
        orbSprite.lifespan = 2000
        orbSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        orbSprite.setPosition(princessSprite.x, princessSprite.y)
        cubicbird.moveTowards(orbSprite, orbBase, 80)
        custom.destroy(aimingLine)
        aimingOrb = false
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    enterRoom2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    if (pressButton(2)) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        tiles.setTileAt(location, sprites.dungeon.buttonTealDepressed)
        revealTreasureIfAllButtonActivated()
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(4, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
let orbSprite: Sprite = null
let aimingOrb = false
let aimingLine :custom.AimingLine = null
let torchOn = false
let orbBase: Sprite = null
let firewoodSprite: Sprite = null
let princessSprite: Sprite = null
let lightFirewoodShown = false
let torchIndicatorShown = false
let activatedButton = 0
let currentRoomNumber = 0
let leverUp = false
leverUp = true
currentRoomNumber = 1
activatedButton = 0
torchIndicatorShown = false
lightFirewoodShown = false
tiles.setTilemap(tilemap`级别1`)
princessSprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(princessSprite)
controller.moveSprite(princessSprite)
enterRoom1()
for (let index = 0; index < 8; index++) {
    firewoodSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . e . . . . . . 
        . . e e . . . . e e . . . . . . 
        . . . e e d d e d . . . . . . . 
        . . . . d e d e d d d e . e . . 
        . . e . d d e e d e e e d e . . 
        . . e e e e e e d e e . d e . . 
        . . . f f e d e e e d d d f f . 
        . . f . e d d e d e e d d e f . 
        . . f f f f e e . e d e f f f . 
        . . . e . f f f f f f f f . . . 
        . . . e d e d e d e e e e e . . 
        . . e . d . . e d e . e e e . . 
        . . . . . . . e . e . . e . . . 
        . . . . . . . . . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Firewood)
    tiles.placeOnRandomTile(firewoodSprite, sprites.dungeon.floorDark2)
}
firewoodSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . e . . . . . . 
    . . e e . . . . e e . . . . . . 
    . . . e e d d e d . . . . . . . 
    . . . . d e d e d d d e . e . . 
    . . e . d d e e d e e e d e . . 
    . . e e e e e e d e e . d e . . 
    . . . f f e d e e e d d d f f . 
    . . f . e d d e d e e d d e f . 
    . . f f f f e e . e d e f f f . 
    . . . e . f f f f f f f f . . . 
    . . . e d e d e d e e e e e . . 
    . . e . d . . e d e . e e e . . 
    . . . . . . . e . e . . e . . . 
    . . . . . . . . . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Firewood)
tiles.placeOnRandomTile(firewoodSprite, assets.tile`myTile`)
let candleSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Candle)
tiles.placeOnRandomTile(candleSprite, sprites.dungeon.greenOuterEast2)
candleSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Candle)
tiles.placeOnRandomTile(candleSprite, sprites.dungeon.greenOuterSouth2)
orbBase = sprites.create(assets.image`myImage`, SpriteKind.OrbBase)
multilights.addLightSource(orbBase, 16)
tiles.placeOnTile(orbBase, tiles.getTileLocation(32, 7))
game.onUpdateInterval(2000, function () {
    if (currentRoomNumber == 2 && !(torchOn)) {
        if (!(torchIndicatorShown)) {
            game.splash("B使用火把")
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (currentRoomNumber == 2 && !(torchOn)) {
        if (!(torchIndicatorShown)) {
            game.splash("B使用火把")
        }
    }
})
