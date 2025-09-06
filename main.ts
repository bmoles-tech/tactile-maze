controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(assets.song`mario`), music.PlaybackMode.LoopingInBackground)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    music.stopAllSounds()
})
