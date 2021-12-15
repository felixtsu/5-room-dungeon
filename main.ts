scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    if (pressButton(1)) {
        tiles.setTileAt(location, sprites.dungeon.buttonPinkDepressed)
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(3, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
function enterRoom2 () {
    multilights.toggleLighting(true)
}
function pressButton (answer: number) {
    return game.askForNumber("?", 1) == answer
}
function enterRoom1 () {
    tiles.placeOnTile(princessSprite, tiles.getTileLocation(3, 1))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    if (pressButton(3)) {
        tiles.setTileAt(location, sprites.dungeon.buttonOrangeDepressed)
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(3, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    enterRoom2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    if (pressButton(2)) {
        tiles.setTileAt(location, sprites.dungeon.buttonTealDepressed)
    } else {
        tiles.placeOnTile(princessSprite, tiles.getTileLocation(3, 1))
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    }
})
let princessSprite: Sprite = null
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
controller.moveSprite(princessSprite)
enterRoom1()
