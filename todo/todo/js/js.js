let newItemInput = document.getElementById('newitem');
var idCount = 6;
newItemInput.addEventListener("keydown", function(event){
    if (event.keyCode == 13) {
        console.log(newItemInput.value);
        addElement(newItemInput.value);
    }
});

let listElements = document.getElementById("todoList");
function handleChange (checkbox) {
    let span = document.getElementById(checkbox.value);
    if(checkbox.checked == true) {
        span.classList.add("done");
    }
    else {
        span.classList.remove("done");
    }
}

function addElement(text) {
    var newEntry = document.createElement("li");
    var inputElement = document.createElement("input");
    var spanText = document.createElement("span");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("name", "todo");
    inputElement.setAttribute("value", idCount);
    inputElement.setAttribute("onChange", "handleChange(this)");
    spanText.innerHTML = text;
    spanText.setAttribute("id", idCount);
    newEntry.appendChild(inputElement);
    newEntry.appendChild(spanText);
    var divList = document.getElementById("todoList");
    divList.appendChild(newEntry);
    idCount++;
}