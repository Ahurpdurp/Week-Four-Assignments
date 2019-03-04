function fizzBuzz(){
    let fizzNumber = parseInt(prompt("Please enter an integer for the FizzBuzz test!"),10);

    if(fizzNumber%3 == 0 && fizzNumber%5==0){
        console.log("FizzBuzz");
        return;
    }
    else if(fizzNumber%3 == 0){
        console.log("Fizz");
        return;
    }
    else if(fizzNumber%5 == 0){
        console.log("Buzz");
        return;
    }
    else{
        console.log("None of the above :(")
        return;
    }
}

fizzBuzz();