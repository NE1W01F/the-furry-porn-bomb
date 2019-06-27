function porn(url){
    var pic = document.createElement('img');
    pic.src = url;
    pic.width = 1024;
    pic.height = 755;
}

function playSound(url){
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    document.body.appendChild(audio);
}

function start(){
    playSound("https://raw.githubusercontent.com/NE1W01F/the-furry-porn-bomb/master/Amazon.mp3");
    porn("https://www.photobox.co.uk/my/photo/full?photo_id=501956460720");
}

start();
