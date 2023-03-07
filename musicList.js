var yakindaCalinan = document.getElementById("yakindaCalinan");
var denemeyeDeger = document.getElementById("denemeyeDeger"); 
var bugunDinlenen = document.getElementById("bugunDinlenen");
var oneCikanlar = document.getElementById("oneCikanlar");


const musicList = [
    {
        img : "https://i.scdn.co/image/ab67656300005f1f0bd5ac908a0dddd8c2ad220d",
        h2 : "Meksika açmazı",
        title : "by Mesut Süre"
    },
    {
        img : "https://i.scdn.co/image/ab67706f000000021b1da5df4f537b66db0d534f",
        h2 : "Türkçe Pop 2022",
        title : "Yılın favori pop şarkıları"
    },
    {
        img : "https://i.scdn.co/image/ab67706f00000002127e9c23180f0846552821a2",
        h2 : "OLAY",
        title : "Yılın olay yaratan pop.."
    },
    {
        img : "https://i.scdn.co/image/ab67706f00000002ce208a4bb4b5a6f35b119564",
        h2 : "Yılbaşı Özel",
        title : "Yeni yılın kutlu olsun!"
    },
    {
        img : "https://seed-mix-image.spotifycdn.com/v6/img/artist/4XP7cGw4t8BqZ8Du5q3bHg/tr/default",
        h2 : "Emir Can İğrek",
        title : "En güzel Emircan İğrek .."
    },
    {
        img :  "https://seed-mix-image.spotifycdn.com/v6/img/artist/3ZKkHPTZTq8z8pokwZiInd/tr/default",
        h2 : "KÖFN mix",
        title : "Emir Can İğrek, Buray, daha fazlası..."
    },
    {
        img :  "https://i.scdn.co/image/ab67706f0000000279e327df3c9d0dfa18be3b50",
        h2 : "Yabancı Pop",
        title : "Hit Pop trendleri"
    },
    {
        img :  "https://i.scdn.co/image/ab67706f00000002b007d62514fd4f329fee60fb",
        h2 : "Today's Top Hits",
        title : "Bizarra & Quevedo are on..."
    },
    {
        img :  "https://i.scdn.co/image/ab67706f0000000227b6666b04ab3c43052506be",
        h2 : "Türkçe Rock",
        title : "Gitar ve davulunu konuşturanlar.."
    },
    {
        img :  "https://i.scdn.co/image/ab67706f00000002db32a17c1f5291b19317b62e",
        h2 : "Mega Hit Mix",
        title : "A mega mix of 75 favorities.."
    },
    {
        img :  "https://i.scdn.co/image/ab67706f00000002514803e37d6afefafef4f1d6",
        h2 : "RapCaviar",
        title : "New music from Lil Uzi Vert, Meg..."
    },
    {
        img :  "https://i.scdn.co/image/ab67706f000000021b7dbd09e741f6754abb1c0c",
        h2 : "Üçüncü Yeniler",
        title : "Türk müziğinde yeni akımlar"
    },
    {
        img :  "https://charts-images.scdn.co/assets_generated/locale_tr/regional/weekly/region_global_default.jpg",
        h2 : "En Çok Dinlenen..",
        title : "En çok çalınan parça..."
    },
    {
        img :  "https://charts-images.scdn.co/assets_generated/locale_tr/regional/weekly/region_tr_default.jpg",
        h2 : "En Çok Dinlenen..",
        title : "En çok çalınan parça..."
    },
    {
        img :  "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        h2 : "En İyi 50 - Global",
        title : "En çok çalınan parça..."
    },
    {
        img :  "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_tr_default.jpg",
        h2 : "En İyi 50 - Türkiye",
        title : "En çok çalınan parça..."
    },
    {
        img :  "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
        h2 : "Viral 50 - Global",
        title : "En viral olan parçal..."
    },
    {
        img :  "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_tr_default.jpg",
        h2 : "Viral 50 - Türkiye",
        title : "En viral olan parçal..."
    },
];


yakindaCalinan.innerHTML = `
    <div class="col-12">
        <h1>Yakında Çalınanlar</h1>
    </div>
    <div class="col">
        <div class="card" style="width: 18rem;" id="1" onmousemove="visibleDiv(this)" onmouseleave="hiddenDiv(this)">
            <img src="https://i.scdn.co/image/ab67706f000000029573533c7344c23fbda956a6" class="card-img-top" alt="...">
            <button class="btn btn-success" id="button1" onclick="playMusic(this)"><i class="fa-solid fa-play" id="play1"></i></button>
            <div class="card-body">
                <h2>Türkçe Pop</h2>
                <p class="card-text">İsim isim isim</p>
            </div>
        </div>  
    </div>
`


denemeyeDeger.innerHTML = `
    <div class="col-12">
        <a href="#"><h1>Denemeye Değer Programlar</h1></a>
    </div>
`;

for(var i = 0; i < 6 ; i++){
    denemeyeDeger.innerHTML += `
    <div class="col">
        <div class="card" style="width: 18rem;" id="${i + 2}" onmousemove="visibleDiv(this)" onmouseleave="hiddenDiv(this)">
            <img src="${musicList[i].img}" class="card-img-top" alt="...">
            <button class="btn btn-success" id="button${i + 2}" onclick="playMusic(this)"><i class="fa-solid fa-play" id="play${i+2}"></i></button>
            <div class="card-body">
                <h2>${musicList[i].h2}</h2>
                <p class="card-text">${musicList[i].title}</p>
            </div>
        </div>
    </div>
    `
}



bugunDinlenen.innerHTML = `
    <div class="col-12">
        <a href="#"><h1>Bugünün en çok dinlenenleri</h1></a>
    </div>
`;

for(var i = 6; i < 12 ; i++){
    bugunDinlenen.innerHTML += `
    <div class="col">
        <div class="card" style="width: 18rem;" id="${i + 2}" onmousemove="visibleDiv(this)" onmouseleave="hiddenDiv(this)">
            <img src="${musicList[i].img}" class="card-img-top" alt="...">
            <button class="btn btn-success" id="button${i + 2}" onclick="playMusic(this)"><i class="fa-solid fa-play" id="play${i+2}"></i></button>
            <div class="card-body">
                <h2>${musicList[i].h2}</h2>
                <p class="card-text">${musicList[i].title}</p>
            </div>
        </div>
    </div>
    `
}


oneCikanlar.innerHTML = `
    <div class="col-12">
        <a href="#"><h1>Öne Çıkan Listeler</h1></a>
    </div>
`;

for(var i = 12; i < 18 ; i++){
    oneCikanlar.innerHTML += `
    <div class="col">
        <div class="card" style="width: 18rem;" id="${i+2}" onmousemove="visibleDiv(this)" onmouseleave="hiddenDiv(this)">
            <img src="${musicList[i].img}" class="card-img-top">
            <button class="btn btn-success" id="button${i+2}" onclick="playMusic(this)" ><i class="fa-solid fa-play" id="play${i+2}"></i></button>
            <div class="card-body">
                <h2>${musicList[i].h2}</h2>
                <p class="card-text">${musicList[i].title}</p>
            </div>
        </div>
    </div>
    `
}