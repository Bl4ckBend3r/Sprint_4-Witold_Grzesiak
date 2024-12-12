function newElement(){
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value.trim()

    if(inputValue === ""){
        alert("You need to write smoething to make a To Do List 😏")
    }else{
        let ul = document.querySelector(".list ul")
        ul.appendChild(li)
    }
    
    document.getElementById("task").value = ""

    let taskText = document.createElement("span")
    taskText.textContent = inputValue
    taskText.className = "taskText"
    li.appendChild(taskText)

    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.className = "editTask"
    editBtn.onclick = function(){
        if(editBtn.innerHTML === "Edit"){
            let editInput = document.createElement("input")
            editInput.type = "text"
            editInput.value = taskText.textContent
            li.insertBefore(editInput, taskText)
            li.removeChild(taskText)
            editBtn.innerHTML = "Confirm"
        }else{
            let editInput = li.querySelector("input")
            taskText.textContent = editInput.value.trim()
            li.insertBefore(taskText, editInput)
            li.removeChild(editInput)
            editBtn.innerHTML = "Edit"
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

    let ul = document.querySelector(".list ul")
    ul.appendChild(li)
    
}