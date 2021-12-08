var addTodoButton = document.querySelector("button");
var input = document.querySelector("input")
var TodoContainer =  document.querySelector("div.todos")
let counter = 0;
addTodoButton.addEventListener("click", function(){
  
  var paragraph = document.createElement('p');
  paragraph.innerHTML = input.value;
  paragraph.setAttribute('key',counter++);
  TodoContainer.appendChild(paragraph);
  
  paragraph.addEventListener("click", function(){
    TodoContainer.removeChild(paragraph);

  })
  input.value = '';


})
