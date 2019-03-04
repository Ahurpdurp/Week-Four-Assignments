function myFunction(nameList) {
  let newList = [];
  for(var i = 0; i < nameList.length; i++ ){
  if(!(newList.includes(nameList[i]))){
    newList.push(nameList[i]);  
    }}
  console.log(newList);
  return newList;
  
}

let nameList = ["John","Mary", "Alex", "Alex","Steve", "Mary", "John"]; 

myFunction(nameList)