
let maximumValue = parseInt(prompt("Enter the Maximum value"));

while(!maximumValue){
    maximumValue = parseInt(prompt("Enter a valid value"));
}

let randomNumber = Math.floor(Math.random() * maximumValue) + 1;
console.log(`Maximum Random Number between 0 - ${maximumValue} is - ${randomNumber}`);



let guessValue = prompt("Enter guess value, press q to exit");


while(parseInt(guessValue) !== randomNumber){

   if(guessValue == "q"){
        break;
   }else if(guessValue > randomNumber){
        guessValue = prompt("GuessValue > randomNumber, Try Again.., press q to exit");
   }else if(guessValue < randomNumber){
    guessValue = prompt("GuessValue < randomNumber, Try Again.., press q to exit");
   
   }else{
    guessValue = prompt("InValid input , Try Again, press q to exit");
   }
}

if(guessValue == "q"){
    console.log("Quit");
}else{
    console.log("You win!!!");
}

