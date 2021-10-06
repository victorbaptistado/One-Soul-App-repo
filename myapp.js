var challenge = document.getElementById("challenge");
var challengeNum = document.getElementById("challengenum");
var btnStart = document.getElementById("btnStart");
var nextbtn = document.getElementById("nextbtn");
var returnbtn = document.getElementById("returnbtn");
var challengeImg = document.getElementById("image-challenge");

var currentChallenge = 0;


/*    ARRAYS    */

var challengeArray = [
    "Your journey to self-improvement is about to begin. \n Congratulation for taking this step. \n\n Each quest must be taken in a day, and once you accomplish the daily challenge,  click the NEXT button. If for any reason you're not able to realise the challenge, press the 'scape' button to jump to the next challenge. Once per day, dedicate yourself to each challenge. \n\n Now let's start!",
    "This challenge is more than a one day-challenge. It should be incorporated into your daily routine.",
    "Tre-bien",
    "New",
    "New2"
]

var challengeNumArray = [
    "Instructions",
    "Challenge 1 \n The Mind-Set Builder",
    "Challenge 3 \nThe elevator embarrassment", 
    "Challenge 3",
    "Fuck"
]

var challengeImgArray = [
    "",
    "Images/Challenges/01-Yoga-Lady.png",
    "Images/Challenges/02-Challenge-Demo.jpg",
    "",
    "",

]




function hideButton(){
    console.log(currentChallenge);
    if (currentChallenge > 0) {
        returnbtn.style.visibility = "visible";
    }
    else {
        returnbtn.style.visibility = "hidden";
    }
}

function nextChallenge(){

    if (currentChallenge < challengeNumArray.length - 1) {
    currentChallenge++;
    challengeNum.innerText = challengeNumArray[currentChallenge];
    challenge.innerText = challengeArray[currentChallenge];
    challengeImg.src = challengeImgArray[currentChallenge];

    hideButton();
    }
    else{
        return;
    }      
}
  
function previousChallenge(){

    if (currentChallenge > 0){
    currentChallenge--;
    challengeNum.innerText = challengeNumArray[currentChallenge];
    challenge.innerText = challengeArray[currentChallenge]; 
    challengeImg.src = challengeImgArray[currentChallenge];

    hideButton();
    }
    else{
        return;
    }
}




function main (){
  
    challenge.innerText = challengeArray[currentChallenge];
    challengeNum.innerText = challengeNumArray[currentChallenge];

returnbtn.style.visibility = "hidden";

nextbtn.addEventListener("click", nextChallenge);
returnbtn.addEventListener("click", previousChallenge);

}

main();



