
// var addTodo = document.getElementById("addBtn");
// addTodo.addEventListener("click", adding);
// i=0;
// function adding()
// {
//     let curele = document.createElement("p");
//     curele.setAttribute("key",i);
//     i++ 
//     curele.addEventListener("click",function(){   
//         this.remove()
//     }
//     );
//     let inp = document.getElementById("textinput").value;
//     curele.innerText = inp;  
//     let element = document.getElementsByClassName("todos")[0];
//     element.appendChild(curele)   
// }


var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/todos', false); // false for synchronous request
xmlHttp.send(null);
var todos = JSON.parse(xmlHttp.responseText)
console.log(xmlHttp.responseText);
var completedTodo = document.getElementById("compBtn");
completedTodo.addEventListener("click", displayComp);
index = 0;
function displayComp() {
    document.getElementsByClassName("todos")[0].innerHTML = ""
    for (let i = 0; i < 10; i++) { 
        if (todos[i].completed === true) {
         console.log("i am here")
            let curele = document.createElement("p");
            curele.setAttribute("key", i);
            index++
            curele.addEventListener("click", function () {
                this.remove()
            }
            );
            curele.innerText = todos[i].title;
            let element = document.getElementsByClassName("todos")[0];
            element.appendChild(curele)
        }
    }
}

var pendingTodo = document.getElementById("penBtn");
pendingTodo.addEventListener("click", displayPen);
index = 0;
function displayPen() {
    document.getElementsByClassName("todos")[0].innerHTML = ""
    for (let i = 0; i < 10; i++) {
        if (todos[i].completed === false) {
         console.log("i am here")
            let curele = document.createElement("p");
            curele.setAttribute("key", i);
            index++
            curele.addEventListener("click", function () {
                this.remove()
            }
            );
            curele.innerText = todos[i].title;
            let element = document.getElementsByClassName("todos")[0];
            element.appendChild(curele)
        }
    }
}