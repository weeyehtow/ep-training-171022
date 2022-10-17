let Start_Time = 0
let Stop_Time = 0
input.onPinPressed(TouchPin.P0, function () {
    Start_Time = 0
    Stop_Time = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(1000 + randint(0, 3000))
    if (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2))) {
        basic.showIcon(IconNames.Happy)
        Start_Time = input.runningTime()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
