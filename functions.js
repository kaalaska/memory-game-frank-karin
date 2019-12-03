/*Das gegebene Array data.js\cards wird mittels function shuffle
in ein neues randomArray shuffledCards ausgegeben. Mit diesem soll dann
weiter gearbeitet werden
*/
let shuffledCards = [];
  
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


 function createCardBoard(array){
    let cardsList = "";
    for(i=0; i< array.length; i++){
        cardsList += `<div> <button class="imgButton" onclick= matchCard(event)>
         <img class = "imgFront hiddenCard" src="./images/bg.png" alt="Boy"> 
         <img class= "imgBack " src="./images/${array[i].img}" alt="${array[i].name}">
          </button> </div>`;
    }
    document.getElementById("Spielfeld").innerHTML = cardsList;       
  }

  /* function matchCard(){
    const getAllCards = document.querySelectorAll(".imgButton");
    getAllCards.forEach(card => card.addEventListener("click", iWasclicked() ));

  } */
  let click1 = [];
  function matchCard(event){
      /* click1.push(event.target.getAttribute("alt"));
      
      //console.log(event.target.getAttribute("alt"));
      console.log("Click1 :" + click1);
      if(click1.length===2){
          console.log("Array 2 ist voll");
          if(click1[0]===click1[1]){
              alert("Die gewählet Teile Passen");
          }else{
              alert("Die Karten passen nicht zusammen");
          }
          click1 = [];
      } */
      console.log(event.currentTarget.querySelector(".imgBack"));
  }

  shuffle(cards);
  createCardBoard(shuffledCards);
  //console.log(document.getElementsByClassName("imgButton"));
  //matchCard();















