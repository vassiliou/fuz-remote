input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let Channel = 20
radio.setGroup(Channel)
basic.showString("DCRL FUZbot V1.1")
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . . .
    . . . . .
    # # . . .
    . . . . .
    . # . . .
    `)
basic.showLeds(`
    . # # . .
    . . . . .
    # # # . .
    . . . . .
    . # # . .
    `)
basic.showLeds(`
    . # # # .
    . . . . .
    # # # . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . . .
    # # # . #
    . . . . .
    . # # # .
    `)
