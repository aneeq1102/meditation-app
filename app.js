const play = document.querySelector('.play')
const song = document.querySelector('.song')
let fakeDuration = 600
let timeLeft = document.querySelector('.time-remaining')
const replay = document.querySelector('.replay')
const timePicker = document.querySelectorAll('.time-picker button')
let remaining = 0;
const video = document.querySelector('.video')
play.onclick = () => {
    if(song.paused){
        song.play()
        video.play()
        play.src = './assets/svg/pause.svg'
        
    }
    else{
        song.pause()
        video.pause()
        play.src = './assets/svg/play.svg'
    }
}

song.ontimeupdate = () => {
    
    let currentTime = song.currentTime
    remaining = fakeDuration - currentTime
    let mins = Math.floor(remaining/60)
    let secs = Math.floor(remaining % 60)
    
    timeLeft.textContent = `${mins}:${secs}`
}

replay.onclick = () =>{
    song.currentTime = 0;
    video.currentTime = 0
}

timePicker.forEach(btn => {
    btn.addEventListener('click',function(){

        fakeDuration = this.getAttribute('data-time')
        remaining = 0;
        timeLeft.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`

    })
})

