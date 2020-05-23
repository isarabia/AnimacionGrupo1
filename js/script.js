var odyn = document.getElementById("space");
var used = new Array();

divCreate(odyn);
var allFatherGrid = odyn.childNodes;
allFatherGrid.forEach(ele => divCreate(ele));

// startCreate();

setInterval(startCreate, 1500);

function startCreate(){
    var thorId = randomize();
    // var thorId = "5Espace";
    console.log(thorId);
    var thor = document.getElementById(thorId);
    thor.classList.add("star");
    // divCreate(thor);
    starAnimation(thor);
    setTimeout(function(){
        // console.log(used);
        thor.classList.remove("star");
        console.log("una estrella ha muerto");
        used.shift();
        // console.log(used);
    }, 7000);
}

function randomize(){
    var number = numberRandom();
    while(used.includes(number)){
        number = numberRandom();
        // console.log("numero usado");
    } 
    // var random = Math.round(Math.random() * (+max - +min) + +min);
    // var letter = String.fromCharCode(64 + random);
    // console.log(letter);
    used.push(number);
    var id = number + "E" + "space";
    return id;
}

function numberRandom(){
    var min=1; 
    var max=8;  
    var number = Math.round(Math.random() * (+max - +min) + +min);
    return number;
}

function divCreate(father){
    for (a = 1; a <= 9; a++){
        for(i = 1; i <= 9; i++){
            var pixel = father.appendChild(document.createElement("div"));
            var number = String.fromCharCode(i + 64);
            pixel.id = a + number + father.id;
            // console.log(pixel.id);
            // divCreate(pixel);
        }
    }
}

function starAnimation(father){
    // pixeles
    var pixel1 = new Array(document.getElementById("5E" + father.id));
    var pixel2 = new Array (document.getElementById("4E"+father.id), document.getElementById("6E"+father.id), document.getElementById("5D"+father.id), document.getElementById("5F"+father.id));
    var pixel3 = new Array (document.getElementById("3E"+father.id), document.getElementById("7E"+father.id), document.getElementById("5C"+father.id), document.getElementById("5G"+father.id));
    var pixel4 = new Array (document.getElementById("2E"+father.id), document.getElementById("8E"+father.id), document.getElementById("5B"+father.id), document.getElementById("5H"+father.id));
    var pixel5 = new Array (document.getElementById("1E"+father.id), document.getElementById("9E"+father.id), document.getElementById("5A"+father.id), document.getElementById("5I"+father.id));
    var pixel6 = new Array (document.getElementById("2B"+father.id), document.getElementById("8H"+father.id), document.getElementById("2H"+father.id), document.getElementById("8B"+father.id));
    var pixeles = new Array (pixel1, pixel2, pixel3, pixel4, pixel5, pixel6);
    // animaciones
    var time = 500;
    for(var i = 0; i < pixeles.length; i++){
            starInterval(i, time, pixeles);
            if (i == 4){
                pixeles[i].forEach(ele => ele.style.animationDuration = "2s");
            }
            time = time + 500;
            // console.log(time);
        }
    setTimeout(function(){
        pixeles.forEach(element => element.forEach(ele => ele.classList.remove("animated")));
    }, time);
    pixeles.reverse();
    for(var i = 0; i < pixeles.length; i++){
        starInterval(i, time, pixeles);
        if (i == 0){
            time -= 500;
        }
        time += 500;
        // console.log(time);
    }
    // setTimeout(father.classList.remove("star"), time);
}

function starInterval(a, counter, array) {
    var index = array[a];
    // console.log(index);
    setTimeout(function(){
        for(i = 0; i < index.length; i++){
            index[i].classList.add("animated");
        }
    }, counter);
} 