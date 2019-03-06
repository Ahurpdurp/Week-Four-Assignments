let foodMenuUL = document.getElementById('foodMenu');
let selectMenu = document.getElementById('selectMenu');
let menuTitle = document.getElementById('menuTitle');

function displayMenuItems(list){
    newList = list.map(post => {
    return`<li>
    <div><img src = "${post.imageURL}"></div>
    <div>
    <h1>${post.title}</hi>
    <p>${post.description}</p>
    </div>    
    <span><h2>${post.price}</h2></span>
    </li>`
})
    return newList
}  


selectMenu.addEventListener('change', filterMenu)


function filterMenu(){
    let selectionValue = selectMenu.value;
    if(selectionValue == "All"){
        foodMenuUL.innerHTML = displayMenuItems(dishes).join("");   
        menuTitle.innerHTML = "";
    }
    else{
    let filteredDishes = dishes.filter(row => row.course == selectionValue);
    foodMenuUL.innerHTML = displayMenuItems(filteredDishes).join("");
    menuTitle.innerHTML = selectionValue;
    }
}
