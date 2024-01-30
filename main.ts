scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zero_Two.isHittingTile(CollisionDirection.Bottom)) {
        Zero_Two.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Right`,
    200,
    true
    )
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Zero_Two.setPosition(7, 40)
    info.changeLifeBy(-1)
})
let Movimiento_Zero_two = false
let Zero_Two: Sprite = null
scene.setBackgroundColor(15)
Zero_Two = sprites.create(assets.image`Zero Two`, SpriteKind.Player)
let DITF_Enemy = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f 8 8 . . . . . . f 8 e e 8 
    f f 8 8 . . . . . . f 8 e e 8 . 
    f 8 f 8 . . . . . . f e 8 8 8 . 
    f f f 8 8 . 8 8 . f 8 e e 8 8 . 
    f f 8 2 8 8 2 8 8 f e 8 e e 8 . 
    f f e 2 e 8 2 e 8 f e 8 8 e 8 . 
    . 8 e e e e e e 8 e e 8 8 8 . . 
    . 8 a e e e a e e 8 8 8 8 . . . 
    8 e e e e e e e e e 8 8 . . . . 
    8 e 8 e e e 8 e e e e f . . . . 
    f e 1 f f f 1 e e e e f 8 . . . 
    f e e e e e e e e e e f 8 8 . . 
    . f e e e e e e e e 8 f . . . . 
    . . f e e e e e e 8 f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
DITF_Enemy.follow(Zero_Two, 50)
Zero_Two.setPosition(7, 40)
controller.moveSprite(Zero_Two, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Zero_Two)
tiles.placeOnRandomTile(DITF_Enemy, assets.tile`myTile15`)
Zero_Two.ay = 300
info.setLife(3)
game.setGameOverMessage(false, "Good Luck Next Time!")
game.setGameOverMessage(true, "You Are So TryHard")
game.onUpdate(function () {
    if (Zero_Two.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        Zero_Two.setPosition(7, 40)
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    Movimiento_Zero_two = controller.left.isPressed() || controller.right.isPressed()
    if (!(Movimiento_Zero_two)) {
        animation.stopAnimation(animation.AnimationTypes.All, Zero_Two)
    }
})
