// die Klasse Front soll beim click auf den Button vom 2. Image entfernt werden
// und dem 1. Image hinzugefügt werden

document.querySelector(".imgButton").onclick = function(event){
    let cappucino = event.currentTarget.getElementsByTagName("img");
    console.log(cappucino);
    Array.from(cappucino).forEach(img => img.classList.toggle("hiddenCard"));
    console.log(Array.from(cappucino));
};

document.querySelectorAll(".imgButton1").onclick = function(event){
    let cappucino = event.currentTarget.getElementsByTagName("img");
    console.log(cappucino);
   
    Array.from(cappucino).forEach(img => img.classList.toggle("hiddenCard"));
    console.log(Array.from(cappucino));
};

let array = ["imgButton", "imgButton1", "imgButton2"];
//console.log(array);

function toggle(array) {
    for (let i=0; i<array.length; i++) {
        array[i].img.classList.toggle(getElementsByTagName("img"));
        console.log(array);
    }
}

toggle(array);


    

