
function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let toDoItem = $('input').val();
   let li = $('<li>' + toDoItem + '</li>')
   if (toDoItem.length < 1) {
     alert('please enter an item for the list');
   } else {
     $('#list').append(li);
   }

 //2. Crossing out an item from the list of items:

   function crossOut() {
 		$(this).toggleClass("strike");
 	  }

 	  li.dblclick(crossOut);

 //3(i). Adding the delete button "X":

  li.each(function (i) {
    let deleteButton = $('<span></span');
    deleteButton.append(document.createTextNode('X')).addClass('crossOutButton');
    $(this).append(deleteButton);
    deleteButton.click(deleteItem);
  });

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteItem(){
    li.addClass('delete');
	}

 // 4. Reordering the items:
   $('#list').sortable();

}
