function palidrome(myString){
    let newString = "";
    for(let i = myString.length - 1; i != -1; i --){
        newString += myString[i];
    }
    if(newString == myString){
        console.log("It's a palidrome!");
    }
    else{
        console.log("It's not a palidrome!");
    }
}

let stringHehe = "lool"; 
let stringLol  = "hawef"
let stringLmao = "asdfjjfdsa"
palidrome(stringHehe);
palidrome(stringLol);
palidrome(stringLmao);