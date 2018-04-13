var button = document.getElementById('enter');
var delButton = document.getElementsByClassName('delete');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	var but = document.createElement('button');
	li.appendChild(document.createTextNode(input.value + " "));
	but.appendChild(document.createTextNode('Delete'));
	li.appendChild(but);
	ul.appendChild(li);
	input.value = '';
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function toggleDone(){
	this.classList.toggle("done");
}

function deleteItem() {
	console.log(delButton, this);
	for (var j in delButton) {
		if(delButton[j] === this) {
			ul.removeChild(lis[j]);
			// update vars holding the list
			ul = document.querySelector('ul');
			lis = document.querySelectorAll('li');
		}
	}
}

// Event listeners
for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', toggleDone);
	delButton[i].addEventListener('click', deleteItem);
}
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);