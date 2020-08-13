radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 G B A F A C5 B ", 120)
        }
    } else if (receivedNumber == 2) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("E B C5 A B G A F ", 40)
        }
    } else if (receivedNumber == 3) {
        music.playMelody("C5 B C5 G A B C5 G ", 181)
    } else if (receivedNumber == 4) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("E B C5 A B G A F ", 99)
        }
    } else if (receivedNumber == 5) {
        for (let index = 0; index < 6; index++) {
            music.playMelody("A F E F D G E F ", 185)
        }
    } else if (receivedNumber == 6) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("G B A G C5 B A B ", 125)
        }
    } else if (receivedNumber == 7) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("G F G A - F E D ", 133)
        }
    } else if (receivedNumber == 8) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("E D G F B A C5 B ", 115)
        }
    } else if (receivedNumber == 9) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("F A C5 E C F E G ", 115)
        }
    } else if (receivedNumber == 10) {
        for (let index = 0; index < 8; index++) {
            music.playMelody("B A G A G F A C5 ", 106)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
radio.setGroup(1)
