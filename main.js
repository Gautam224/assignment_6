'use strict';
/*
	WEB 230 Spring 2020
	Assignment 6b
	{}
*/

function delOrFade(e){
  console.log(e.target);

  if(e.target.classList == "todo-item"){
    e.target.classList.add("completed");
  }

  if(e.target.classList == "remove"){
    let targetParent = e.target.parentNode;
    targetParent.parentNode.removeChild(targetParent);
  }
}


function clickAdder(e){
  console.log("Added");

  create_Li();
  listAddInput.value = "";
}


function enterAdder(e){
  console.log("looking for input");

  if(e.key == "Enter"){
    create_Li();
    listAddInput.value = "";
  }
}

function create_Li(){
  let li = document.createElement("li");
  li.classList.add("todo-item");

  let span = document.createElement("span");
  span.classList.add("remove");

  li.appendChild(span);

  let textVal = listAddInput.value
  li.appendChild(document.createTextNode(textVal));

  list.appendChild(li);
}


let list = document.getElementsByTagName("ul")[0];
list.addEventListener('click', delOrFade);

let click_Add = document.getElementById("add-item");
click_Add.addEventListener('click', clickAdder);

let listAddInput = document.getElementById("new-item-text");
listAddInput.addEventListener('keydown', enterAdder);
