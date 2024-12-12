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
    

}