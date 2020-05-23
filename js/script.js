// var odyn = document.getElementById("space");
// var used = new Array();

// divCreate(odyn);
// var allFatherGrid = odyn.childNodes;
// allFatherGrid.forEach(ele => divCreate(ele));

// // startCreate();

// setInterval(startCreate, 1500);

// function startCreate(){
//     var thorId = randomize();
//     // var thorId = "5Espace";
//     console.log(thorId);
//     var thor = document.getElementById(thorId);
//     thor.classList.add("star");
//     // divCreate(thor);
//     starAnimation(thor);
//     setTimeout(function(){
//         // console.log(used);
//         thor.classList.remove("star");
//         console.log("una estrella ha muerto");
//         used.shift();
//         // console.log(used);
//     }, 7000);
// }

// function randomize(){
//     var number = numberRandom();
//     while(used.includes(number)){
//         number = numberRandom();
//         // console.log("numero usado");
//     } 
//     // var random = Math.round(Math.random() * (+max - +min) + +min);
//     // var letter = String.fromCharCode(64 + random);
//     // console.log(letter);
//     used.push(number);
//     var id = number + "E" + "space";
//     return id;
// }

// function numberRandom(){
//     var min=1; 
//     var max=8;  
//     var number = Math.round(Math.random() * (+max - +min) + +min);
//     return number;
// }

// function divCreate(father){
//     for (a = 1; a <= 9; a++){
//         for(i = 1; i <= 9; i++){
//             var pixel = father.appendChild(document.createElement("div"));
//             var number = String.fromCharCode(i + 64);
//             pixel.id = a + number + father.id;
//             // console.log(pixel.id);
//             // divCreate(pixel);
//         }
//     }
// }

// function starAnimation(father){
//     // pixeles
//     var pixel1 = new Array(document.getElementById("5E" + father.id));
//     var pixel2 = new Array (document.getElementById("4E"+father.id), document.getElementById("6E"+father.id), document.getElementById("5D"+father.id), document.getElementById("5F"+father.id));
//     var pixel3 = new Array (document.getElementById("3E"+father.id), document.getElementById("7E"+father.id), document.getElementById("5C"+father.id), document.getElementById("5G"+father.id));
//     var pixel4 = new Array (document.getElementById("2E"+father.id), document.getElementById("8E"+father.id), document.getElementById("5B"+father.id), document.getElementById("5H"+father.id));
//     var pixel5 = new Array (document.getElementById("1E"+father.id), document.getElementById("9E"+father.id), document.getElementById("5A"+father.id), document.getElementById("5I"+father.id));
//     var pixel6 = new Array (document.getElementById("2B"+father.id), document.getElementById("8H"+father.id), document.getElementById("2H"+father.id), document.getElementById("8B"+father.id));
//     var pixeles = new Array (pixel1, pixel2, pixel3, pixel4, pixel5, pixel6);
//     // animaciones
//     var time = 500;
//     for(var i = 0; i < pixeles.length; i++){
//             starInterval(i, time, pixeles);
//             if (i == 4){
//                 pixeles[i].forEach(ele => ele.style.animationDuration = "2s");
//             }
//             time = time + 500;
//             // console.log(time);
//         }
//     setTimeout(function(){
//         pixeles.forEach(element => element.forEach(ele => ele.classList.remove("animated")));
//     }, time);
//     pixeles.reverse();
//     for(var i = 0; i < pixeles.length; i++){
//         starInterval(i, time, pixeles);
//         if (i == 0){
//             time -= 500;
//         }
//         time += 500;
//         // console.log(time);
//     }
//     // setTimeout(father.classList.remove("star"), time);
// }

// function starInterval(a, counter, array) {
//     var index = array[a];
//     // console.log(index);
//     setTimeout(function(){
//         for(i = 0; i < index.length; i++){
//             index[i].classList.add("animated");
//         }
//     }, counter);
// }


// new debugged code

var odyn = document.getElementById("space");
var stars = new Array();
var arrays = new Array();
var counter = 0;

starCreation(odyn);

stars.forEach(function(ele){divCreation(ele)});

var ele;

var i = 2;

var used = new Array(i);

var interval = setInterval(() => {
    starAnimation(arrays[i]);
    stars[i].classList.add("animated");
    if (i == arrays.length){
        clearInterval(interval);
    }
    i = randomize();
    if (used.find(function(ele){return ele == i})){
        console.log(i + "found");
    }
    used.push(i);
    // console.log(used);
}, 1000);

function starAnimation(boye) {
    var f = 0;
    var percent = 400;
    var y = percent;
    var z = 0;
    for (x = 0; x < boye.length; x++){
        // arrays[i][x].style.transform = "translate("+z+"%, "+y+"%)";
        boye[x].animate([
            { //from
                transform: "translate(0%, 0%)",
                background: "transparent"
            },
            { //to
                transform: "translate("+z+"%, "+y+"%)",
                background: "white"
            }
        ], {
            duration: 2000,
            iterations: Infinity,
            direction: "alternate"
        });
        if (x == 0){
            z += percent;
        } else if (x == 1){
            y -= percent;
        } else if (x == 2){
            y -= percent;
        } else if (x == 3){
            z -= percent;
        } else if (x == 4){
            z -= percent;
        } else if (x == 5){
            y += percent;
        } else if (x == 6){
            y += percent;
        } else {
            z += percent;
        }
    }
}

function starCreation(father){
    for (a = 1; a <= 9; a++){
        for(i = 1; i <= 1; i++){
            var pixel = father.appendChild(document.createElement("div"));
            pixel.classList.add("star");
            pixel.style.gridArea = a + " / 2 / auto / auto";
            stars.push(pixel);
        }
    }
}

function divCreation(father){
    arrays[counter] = new Array();
    for(i = 1; i <= 8; i++){
        var div = father.appendChild(document.createElement("div"));
        arrays[counter].push(div);
    }
    counter++;
}

function randomize(){
        var min=0; 
        var max=8;  
        var number = Math.round(Math.random() * (+max - +min) + +min);
        console.log(number);
        return number;
    }