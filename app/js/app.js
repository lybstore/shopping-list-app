$(document).ready(function() {

	

	// TEXT FIELD INPUT CHECK
	$('.add-item').on('click', function() {
	     event.preventDefault();
	     var value = $('#items-field').val();
	     if (value!="") {
			 var c = $('.list-items:first').clone();
			 c.appendTo(".hidden-menu-inner #items").addClass('isVisible');
			 c.find(".product-title").text(value);
			 $('input').val("");
		  }
	});	


	// ITEM REMOVE FUNCTION
	$('#items').on('click', '.reset', function(){
		event.preventDefault();
		if($('.list-items').length > 1) {
			$('.list-items:last').remove();
			//alert('working');
		}
	})

	//ADD NOTIFICATION 
	//$('ul').on('click', '.add', function(){
	//	event.preventDefault();

	//})
 
});


