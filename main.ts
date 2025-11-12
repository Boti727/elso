music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    led.plot(0, 0)
    radio.setGroup(1)
})
