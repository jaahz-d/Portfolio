//toggle dark/light mode
let icon = document.getElementsByClassName("icon-wrapper")[0];
let container = document.getElementsByClassName("container")[0];
icon.addEventListener("click", function(){ 
  container.classList.toggle("dark");
});


//add item to list
let input = document.getElementById("input");
let ul = document.getElementById("ul"); 
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();  
   let li = document.createElement("li");
   let label = document.createElement("label");
   let checkmark = document.createElement("span");  
   let checkbox = document.createElement("input");
   let item =  document.createElement("span");
   
   checkbox.type = 'checkbox';
   li.setAttribute("class", "list-item");
   label.setAttribute("class", "checkbox");
   checkmark.setAttribute("class", "checkmark");   
   item.setAttribute("class", "item");
   item.appendChild(document.createTextNode(input.value));
   label.append(checkbox, checkmark, item);   
   li.appendChild(label);
   ul.prepend(li);
  }
});
