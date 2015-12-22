$(document).ready(function() {

	$('#search').on('click', function(){
		$('.hidden-menu').toggleClass('isVisible');
	})
	
	// TEXT FIELD INPUT CHECK
	$('.add-item').on('click', function(e) {
	     event.preventDefault();
	     var value = $('#items-field').val();
	     if (value!="") {
			 var c = $('.list-items:first').clone();
			 c.find("input").val("");  // find all inputs and clear
			 c.appendTo("#items").addClass('isVisible');
			 c.find("p").text(value);
			 $('input').val("");
		  }
	});	

	// RESET BUTTON 
	$('.reset').on('click', function(){
		if($('.list-items').length > 1) { // greater that one item delete
			$('.list-items:last').remove();
		}
	})
});


