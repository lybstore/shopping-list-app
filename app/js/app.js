$(document).ready(function() {

	

	// TEXT FIELD INPUT CHECK
	$('.add-item').on('click', function() {
	     event.preventDefault();

	     // SET VERIABLES 
	     var value = $('#items-field').val();
	     var limit = 12;
	     var c = $('.list-items:first').clone();

	     // CONDITIONAL STATEMENT
	     if (value!="" && $("ul").length < limit) {
			 c.appendTo(".hidden-menu-inner #items").addClass('isVisible');
			 c.find(".product-title").text(value);
			 $('input').val("");
			 alertify.success("Item Added");
		  } else {
		  	alertify.error("You have reached you limited");
		  }
	});	


	// ITEM REMOVE FUNCTION
	$('#items').on('click', '.reset', function(){
		event.preventDefault();
		if($('.list-items').length > 1) {
			$('.list-items:last').remove();
			//alert('working');
		}
		alertify.error("Item Removed");
	})
 
});


