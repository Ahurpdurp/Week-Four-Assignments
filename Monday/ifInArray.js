function ifInArray(testString, testArray){
    for(let i = 0; i < testArray.length; i++){
        if(testArray[i] == testString){
            console.log("Item is in the array!");
            return;
        }
    }
    console.log("Item is not in the array!");
    return
}

let test1 = "John";
let array1 = ["John","hi",9]

let test2 = "John";
let array2 = ["hi","bye","Mary"];

ifInArray(test1, array1);
ifInArray(test2, array2);
