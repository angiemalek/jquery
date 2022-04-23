
//1. Adding a new item to the list:
function newItem() {

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}
//2. Crossing an item out:
function crossOut() {
  li.toggleClass("strike");
}

// Event for doubleclick
li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});
//3. Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

// Alert when enter key pressed
$('#input').keypress(function(event) {
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    alert('You pressed an "enter" key in the textbox. Screenshot your list before it is lost forever!');
  }
});

// On click even for cross out button
  crossOutButton.on("click", deleteListItem);
   function deleteListItem() {
		li.addClass("delete")
   	}

 $('#list').sortable();
}
