var container = document.querySelector(".container");
var nav = document.querySelector(".top-nav");

// Scroll

container.addEventListener("scroll", function() {
    var position = container.scrollTop;
    if(position > 100)
    {
        nav.classList.add("scrollNav");
    }
    else {
        nav.classList.remove("scrollNav");
    }
})


//Play Button





function visibleDiv(obj) {
    document.getElementById("button" + obj.id).classList.add("visibleBtn");
}

function hiddenDiv(obj) {
    if(document.getElementById("play"+ obj.id).classList.value == "fa-solid fa-play")
    {
        document.getElementById("button" + obj.id).classList.remove("visibleBtn");
    }
}

function playMusic(obj) {
    if(document.getElementById("play" + obj.id.slice(6)).classList.value == "fa-solid fa-play"){
        if(document.querySelector(".fa-pause"))
        {
            document.querySelector(".fa-pause").classList.add("fa-play");
            document.querySelector(".fa-pause").classList.remove("fa-pause");
            document.querySelector(".visibleBtn").classList.remove("visibleBtn");
            console.log("asdasd");
        }
        
        document.getElementById("play" + obj.id.slice(6)).classList.remove("fa-play");
        document.getElementById("play" + obj.id.slice(6)).classList.add("fa-pause");
        console.log(obj.id.slice(6));
    }
    else {
        document.getElementById("play" + obj.id.slice(6)).classList.toggle("fa-play");
    }
        }