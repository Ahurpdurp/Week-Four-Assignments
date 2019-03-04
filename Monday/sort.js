function sortAscending(testList){
    let wasChanged = true;
    let ascendingList = testList;
    while(wasChanged){
        wasChanged = false;
    for (var i = 0; i < (testList.length - 1); i++){
        if(testList[i] > testList[i + 1]){
            var temp = testList[i];
            testList[i] = testList[i+1];
            testList[i+1] = temp;
            wasChanged = true;
        }
    }
    }
    console.log(testList);
}

function sortDescending(testList){
    let wasChanged = true;
    let ascendingList = testList;
    while(wasChanged){
        wasChanged = false;
    for (var i = 0; i < (testList.length - 1); i++){
        if(testList[i] < testList[i + 1]){
            var temp = testList[i];
            testList[i] = testList[i+1];
            testList[i+1] = temp;
            wasChanged = true;
        }
    }
    }
    console.log(testList);
}

let array1 = [3,4,56,7,8,1];
let array2 = [2,5,1,-23,4,1,534,12];
sortAscending(array1);
sortAscending(array2);
sortDescending(array1);
sortDescending(array2);