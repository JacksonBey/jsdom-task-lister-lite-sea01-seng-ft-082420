document.addEventListener("DOMContentLoaded", () => {
  //Defining a listener for our button, specifically, an onclick handler
  document.getElementById("add").onclick = function(event) {
    //First things first, we need our text:
    let text = document.getElementById("new-task-description").value; //.value gets input values
    //Now construct a quick list element
    let li = document.createElement("li");
    li.innerText = text
    //Now use appendChild and add it to the list!
    let ul = document.getElementById("tasks")
    // document.getElementById("tasks").appendChild(li);
    ul.appendChild(li);
    event.preventDefault()
  }
});
