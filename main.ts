controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    music.stopAllSounds()
})
