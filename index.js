$(function(){ 
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault();
        const item = ($(event.currentTarget).find('input[name="shopping-list-entry"]').val());
        console.log("Item to Add to List:"+ item);
      $('.shopping-list').append(
    '<li>' +
    `<span class="shopping-item">${item}</span>` + 
    '<div class="shopping-item-controls">' +
    '<button class="shopping-item-toggle">' +
    '<span class="button-label">check</span>' +
    '</button>' +
    '<button class="shopping-item-delete">' +
    '<span class="button-label">delete</span>' +
    '</button>' +
    '</div>' +
    '</li>'
  );
  $('#js-shopping-list-form')[0].reset();
});

 //$('.shopping-item-toggle').click(event =>{
   //let label = $(event.currentTarget).closest('li')//.find($('.shopping-item'));
   //label.toggleClass("shopping-item__checked");
   //console.log("Checked off item:" + label);

$('ul').on('click', '.shopping-item-toggle', function(event) {
  let label = $(event.currentTarget).closest('li').find($('.shopping-item'));
  label.toggleClass("shopping-item__checked");
  console.log("Checked off item:" + label);
  
 })

 //This doesn't work for new items...
//$('.shopping-item-delete').click(event =>{
  //let itemDelete = $(event.currentTarget).closest('li');
  //itemDelete.remove();

$('ul').on('click', '.shopping-item-delete', function(event) {
  let itemDelete = $(event.currentTarget).closest('li');
  itemDelete.remove();
});
});
