
// const menu = document.createElement('li');
// document.appendChild(menu);

// const lol = document.getElementsByTagName('label');
// lol.innerhtml('To Do list');

function addItem(){
	var ul = document.getElementById("myList");
  var newItem = document.getElementById("newItem");
  var li = document.createElement("li");
  li.setAttribute('id',newItem.value);
  li.appendChild(document.createTextNode(newItem.value));
  ul.appendChild(li);
}

function removeItem(){
	var ul = document.getElementById("myList");
  var newItem = document.getElementById("newItem");
  var item = document.getElementById(newItem.value);
  ul.removeChild(item);
}


