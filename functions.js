/*Das gegebene Array data.js\cards wird mittels function shuffle
in ein neues randomArray shuffledCards ausgegeben. Mit diesem soll dann
weiter gearbeitet werden
*/


let shuffledCards = [];
let reachedPoints = 0;
let startedPoints = 10;

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  shuffledCards = arra1;
  return shuffledCards;
}

function createCardBoard(array) {
  let cardsList = "";
  for (i = 0; i < array.length; i++) {
    cardsList += `<div> <button class="imgButton" onclick= matchCard(event)>
         <img class = "imgFront " src="./images/bg.png" alt="Boy"> 
         <img class= "imgBack hiddenCard" src="./images/${array[i].img}" alt="${array[i].name}">
          </button> </div>`;
  }
  document.getElementById("Spielfeld").innerHTML = cardsList;
}

function toggleHiddenCard(event) {
  console.log(event);
  let imgVar = event.currentTarget.getElementsByTagName("img");
  Array.from(imgVar).forEach(img => img.classList.toggle("hiddenCard"));
}



let clickedImgArray = [];

function matchCard(event){
        let clickedCard = event.currentTarget;
        clickedImgArray.push(clickedCard);
        // clickedImgArray.push(event.currentTarget.querySelector(".imgBack").getAttribute("alt"));
        console.log("clickedImgArray :" +clickedImgArray);
        toggleHiddenCard(event);
    
               
      
      console.log("Click1 :" + clickedImgArray);
      if(clickedImgArray.length===2){
          checkImgMatch(clickedImgArray);
      //console.log(event.currentTarget.querySelector(".imgBack"));
      array = [];
  }
}

function checkImgMatch(array){
  const card1 = array[0].querySelector(".imgBack").getAttribute("alt");
  const card2 = array[1].querySelector(".imgBack").getAttribute("alt");
  if(card1 === card2){
    console.log("Card1" + card1);
    console.log("Card2" + card2);
    reachedPoints +=1; 
    console.log(reachedPoints);
  }else{
    startedPoints -= 1; 
    console.log("Card1" + card1);
    console.log("Card2" + card2);
    console.log(startedPoints);
    //setTimeout(toggleHiddenCard(event), 10);
    //function toggleAutomated()    
        
    //console.log(array[0].getElementsByTagName("img"));
    //Array.from(array[0].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
    //Array.from(array[1].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
    
    toggleAutomated(array);
  }
  array = [];
} 



function toggleAutomated(array) {
  setTimeout(function() {
    Array.from(array[0].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
    Array.from(array[1].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
  },5000);
}



shuffle(cards);
createCardBoard(shuffledCards);

