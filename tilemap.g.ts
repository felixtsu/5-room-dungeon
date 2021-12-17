// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`28001000000023000d0024000000000000131414141f1414141414190000000000000000000000000000000000010808090808080200000000151b1b1b221b1b1b1b1b180000000000000000000000000000000000070909090909090600000000151b1b1b1b1b1b1b1b1b180000001314141414141414141419000000070909090909090600000000151b1b1b1b1b1b1b1b0018000000151b1b1b1b1b1b1b1b1b18000000070a090b090c090600000000151b1b1b1b1b1b1b00001d000000151b1b1b2e1b1b1b1b1b18000000030404040404040500000000151b1b1b1b1b1b00002118000000151b1b00000000001b1b1800000000000000000000000000000016171c17171717171e171a000000151b1b001b1b1b001b1b180000000000000000000000000000000000000000000000000000000000151b1b001b1b1b001b1b180000000000000000000000000000000000000000000000000000000000151b1b001b1b1b001b1b18000000000000000000000000000000262727272727272727272b000000150000001b0000001b1b18000000000000000000000000000000292525252525252525252800000015001b1b1b001b1b1b1b18000000000000000000000000000000292525252525252525252800000015001b0000001b1b1b1b18000000000000000000000000000000292525252525202525252800000016171c171717171717171a000000000000000000000000000000292525252525252525252800000000000000000000000000000000000000000000000000000000002925252525252525252528000000000000000000000000000000000e0f10111200000000000000002a2c1c2c2c2c2c2c2c2c2d00000000000000000000000000000000`, img`
22.2.2.222...22222222222................
2........2...2.........2................
2........2...2.........2...22222222222..
2........2...2........22...2.........2..
2........2...2.......2.2...2.........2..
2........2...2......2..2...2..22222..2..
2222222222...22.22222222...2..2...2..2..
...........................2..2...2..2..
...........................2..2...2..2..
.............22222222222...2222.222..2..
.............2.........2...22...2....2..
.............2.........2...22.222....2..
.............2.........2...22.22222222..
.............2.........2................
.............2.........2................
.............22.22222222................
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPink,sprites.dungeon.doorOpenNorth,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonTealDepressed,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenSwitchUp,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
