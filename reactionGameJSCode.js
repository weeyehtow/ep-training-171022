let Start_Time = 0
let Stop_Time = 0
/**
 * Define Variables
 * 
 * Start_Time
 * 
 * Stop_Time
 */
input.onPinPressed(TouchPin.P0, function () {
    // reset start time to 0 after each run
    Start_Time = 0
    // reset stop time to 0
    Stop_Time = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    // randomize timing to show smile face
    basic.pause(1000 + randint(0, 3000))
    // point out the faster player
    if (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2))) {
        basic.showIcon(IconNames.Happy)
        // show elapsed time
        Start_Time = input.runningTime()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Start_Time == 0) {
        basic.showIcon(IconNames.No)
    } else {
        // point to faster player and show time taken
        Stop_Time = input.runningTime()
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showNumber(Stop_Time - Start_Time)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Start_Time == 0) {
        basic.showIcon(IconNames.No)
    } else {
        // point to faster player and show time taken
        Stop_Time = input.runningTime()
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showNumber(Stop_Time - Start_Time)
    }
}}
