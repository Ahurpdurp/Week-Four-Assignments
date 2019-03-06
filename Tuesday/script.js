var btnAddTask = document.getElementById("btnAddTask");
var pendingTasks = document.getElementById("pendingTasks");
var completedTasks = document.getElementById('completedTasks')
var inputText = document.getElementById("inputText");

btnAddTask.addEventListener("click",() => {
    var checkCompleted = document.createElement("input");
    checkCompleted.setAttribute('type','checkbox');
    var addedItem = document.createElement("LI");
    var itemValue = document.createElement("span");
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    itemValue.innerHTML = document.getElementById("inputText").value;
    addedItem.appendChild(checkCompleted);
    addedItem.appendChild(itemValue);
    addedItem.appendChild(removeButton);
    addedItem.setAttribute('draggable', "true");
    document.getElementById("pendingTasks").appendChild(addedItem);
    inputText.value = "";
    removeButton.onclick = function(){
        var row = this.parentElement;
        //row.style.display = "none";
        row.remove();
    }
    checkCompleted.onclick = function(){
        if(checkCompleted.checked == true){
            document.getElementById("completedTasks").appendChild(addedItem);
        }
        else{
            document.getElementById("pendingTasks").appendChild(addedItem);
        }

    }
})

function changePending(){
    for(let i = 0;i < pendingTasks.length;i++){
        pendingTasks[i].checkCompleted.checked = false;
    }
}

