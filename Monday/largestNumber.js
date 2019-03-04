function largestNumber(arrayThing){
    console.log(Math.max(...arrayThing)); //testing purposes...going to actually use logic
    let largestNumber = arrayThing[0]; 
    for(let i = 0; i < arrayThing.length; i++){
        if(arrayThing[i] > largestNumber){
            largestNumber = arrayThing[i];
        }
    }
    console.log("The largest number in the array is " + largestNumber);
    return;
}


arrayTest1 = [1,4,2,6,10];

arrayTest2 = [55,34,1414,14];

largestNumber(arrayTest1);
largestNumber(arrayTest2);

