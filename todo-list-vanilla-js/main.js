"use strict";

var addButton = document.querySelectorAll('button')[0];
addButton.onclick = function () {
  var input = document.querySelectorAll('input')[0];
  var inputValue = input.value;
  var li = document.createElement('li');
  li.innerText = inputValue + " ";
  var ol = document.querySelectorAll('ol')[0];
  ol.appendChild(li);
  input.value = '';
  var deleteButton = document.createElement('button');
  deleteButton.style.cssText = "font-size:12px;margin:2px;";
  deleteButton.innerText = "delete";
  li.appendChild(deleteButton);
  deleteButton.onclick = function () {
	li.remove();
  };
};