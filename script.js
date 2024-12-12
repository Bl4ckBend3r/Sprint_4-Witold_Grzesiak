function newElement(){
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === ""){
        alert("You need to write smoething to make a To Do List 😏")
    }else{
        let ul =document.querySelector(".list ul")
        ul.appendChild(li)
    }
    
    document.getElementById("task").value = ""

    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.className = "editTask"
    editBtn.onclick = function(){
        let newTask = prompt("Edit task:", inputValue)
        if(newTask){
            li.firstChild.nodeValue = newTask.trim()
        }
    }
    li.appendChild(editBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "deleteTask"
    deleteBtn.onclick=function(){
        li.remove()
    }
    li.appendChild(deleteBtn)
    
}