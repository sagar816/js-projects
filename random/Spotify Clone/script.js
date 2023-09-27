console.log("Welcome to Spotify")

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Bappa-Morya-Re-Prahlad-Shinde", filePath:"songs/1.mp3", coverPath: "covers/cover01.jpg"},
    {songName: "Aarti Kije Hanuman Lala Ki", filePath:"songs/2.mp3", coverPath: "covers/cover02.jpg"},
    {songName: "Aarti Kunj Bihari Ki", filePath:"songs/3.mp3", coverPath: "covers/cover01.jpg"},
    {songName: "Ganpati Apne Gaon Chale", filePath:"songs/4.mp3", coverPath: "covers/cover02.jpg"},
    {songName: "O - sherawali", filePath:"songs/5.mp3", coverPath: "covers/cover01.jpg"},
    {songName: "Om Jai Jagdish Hare", filePath:"songs/6.mp3", coverPath: "covers/cover02.jpg"},
    {songName: "Shirdi Wale Sai Baba", filePath:"songs/7.mp3", coverPath: "covers/cover01.jpg"},
    {songName: "Vighnaharta-Sukhkarta", filePath:"songs/8.mp3", coverPath: "covers/cover02.jpg"},
    {songName: "Sukhkarta-Dukharta", filePath:"songs/9.mp3", coverPath: "covers/cover01.jpg"},
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});



// let audioElement = new Audio('ps.m4a');
// audioElement.play();

// Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } 
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

//Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
    
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    })
});

document.getElementById('next').addEventListener('click', (e)=>{
    if(songIndex>=9){
        songIndex=0
    }
    else
    {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else
    {
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




















// addition
// pause-play change everywhere
// responsive - media query
// after song end - next song play - need to know which event to listen and play next song- do songIndex ++ - 
// integrate with backend
//favicon














