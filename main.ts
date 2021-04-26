let kpo = 0
input.onGesture(Gesture.Shake, function () {
    kpo = randint(0, 2)
    if (kpo == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (kpo == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
