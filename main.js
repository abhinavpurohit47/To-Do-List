const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
const todoSearch = document.querySelector('.todo-search');


// no need for this class and constructor
class item{
    constructor(itemName){
        //Create the item div

    this.createDiv(itemName);
  /*  this.addToLocalStorage(itemName);*/
}
createDiv(itemName){
    let input = document.createElement('input');
    input.value=itemName;
    input.disabled=true;
    input.classList.add('item_input');
    input.type="text";

    let itemBox =document.createElement('div');
    itemBox.classList.add('item');


    let editButton = document.createElement('button');
    editButton.innerHTML="EDIT";
    editButton.classList.add('editButton');


    let removeButton = document.createElement('button');
    removeButton.innerHTML="REMOVE";
    removeButton.classList.add('removeButton');



    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    // here the remove button, is removing the eleement only in front end
    // you need to add a function which is run when delete button is clicked
    // this added function, will again get the array from local storage,
    // search the element which was clicked on, delete it, and then update the local
    // storage.
    editButton.addEventListener('click',() => this.edit (input));
    removeButton.addEventListener('click',() =>  this.remove (itemBox));
}



edit(input)
{
    input.disabled = !input.disabled;
}

    remove(item){
        container.removeChild(item);
    }
}

// here instead of using the class, you can just call the method
// of adding an item
function check(){
    if(input.value != "") {
        new item(input.value);
        input.value = "";

    }
}

// this function is not being called anywhere.
// this function should be called, whenever you want to add an item
// 'todos' the input parameter is an item to be added
// first this function should get the stored localStorage array
// which contains the items that have been added
// if there is no localStorage array, create  an empty array
// push the item to be added to the array and then reassign the array
// to local storage
// Also, why have you added the edit button, that functionality
// was not asked
     // function to add todos to local storage
function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
    // render them to screen
    renderTodos(todos);
  }

 /*
    function RetrieveLocalStorage(){

        var todos =localStorage.getItem("todos")

    }
*/

// this function should be called whenever the value in the
// search box changes
function filter(e) {
	search = todoSearch.value.toLowerCase();
	const todos = todoList.childNodes;
	// todos.forEach(function(todo) {
	// 	// let text = todo.childNodes[0].innerHTML;
	// 	console.log(todo.childNodes[0].innerHTML);
	// });

// this function is not being called anyewhere,
// this function should be called whenever the value in the
// search bar changes, so use the eventListener for change in
// value in searchbar, and then caal the function,
	todos.forEach(function(todo) {
		let text = todo.childNodes[0].innerHTML.toLowerCase();
		found = text.indexOf(search);
		if (search == '') {
			todo.style.display = 'flex';
		} else if (found == -1) {
			todo.style.display = 'none';
		} else {
			todo.style.display = 'flex';
		}
	});
}


    addButton.addEventListener('click', check);
