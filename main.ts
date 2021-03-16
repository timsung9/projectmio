input.onButtonPressed(Button.A, function () {
    rest = 1
    music.playMelody("E B C5 A B G A F ", 250)
    music.setVolume(154)
    basic.showIcon(IconNames.Pitchfork)
    basic.showString("REST")
    rest = rest - 1
    time = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("RESET")
    basic.showIcon(IconNames.Confused)
    time = 1
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    basic.pause(2000)
    basic.showString("RESETED")
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(time)
})
let e = 0
let time = 0
let rest = 0
basic.showString("Owan Sung")
basic.showString("2D 16")
basic.forever(function () {
    e = 4
    time = 4
    for (let index = 0; index < 2; index++) {
        basic.showString("KEEP ON WORKING")
        basic.pause(1000 * 60 * 25)
        time += time - 1
        if (time > 0) {
            rest = 1
            music.playMelody("E B C5 A B G A F ", 166)
            music.setVolume(154)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.pause(1000 * 60 * 3)
            basic.showString("REST")
            rest = rest - 1
            e = e - 1
        }
        if (e == 0) {
            rest = 2
            music.playMelody("G B A G C5 B A B ", 166)
            music.setVolume(154)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.pause(1000 * 60 * 15)
            basic.showString("REST")
            rest = rest - 1
            e = 2
            time = 1
        }
    }
    time = 1
})
