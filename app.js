$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	var entry = $('#shopping-list-entry').val();
	var html = `<li> 
              <span class='shopping-item'>` + entry + `</span>
              <div class='shopping-item-controls'>
                <button class='shopping-item-toggle'>
                  <span class='button-label'>check</span>
                </button>
                <button class='shopping-item-delete'>
                  <span class='button-label'>delete</span>
                </button>
              </div>
            </li>`;
            
$('.shopping-list').prepend(html);
});

// $('.shopping-item-toggle').click(function(event) {
// 	//$('.shopping-item').toggleClass('shopping-item__checked');
// 	//console.log($(this).parent().siblings();
// 	//$(this).parent().siblings().toggleClass('shopping-item__checked');
// 	$('ul').on('click', 'li > span', function(event) {
// 	this.toggleClass('shopping-item__checked');
// 	});

//});

$('ul').on('click', '.shopping-item-toggle', function(event) {
	$(this).parent().siblings().toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(event) {
	$(this).parent().parent().remove();
});

