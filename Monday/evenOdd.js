function evenOdd(){
    let inputNumber = parseFloat(prompt("Please enter an integer for the Even Odd test!"));
    if(inputNumber == 0){
        console.log("The number is 0, so neither even or odd.")
        return;
    }
    if(inputNumber % 1 != 0){
        console.log("The number isn't an integer, so neither even or odd");
        return;
    }
    if(inputNumber % 2 == 0){
        console.log("The number is even!");
        return;
    }
    else if(inputNumber % 2 == 1){
        console.log("The number is odd!");
        return;
    }
}

evenOdd();