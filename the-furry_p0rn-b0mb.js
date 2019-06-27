function porn(){
    var body = document.body;
    var pic = document.createElement('img');
    pic.src = "https://cdnio.luscious.net/987/lusciousnet_000000top1_855317720.jpg";
    pic.width = 1024;
    pic.height = 755; // 1024 × 755
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
    porn();
}

start();