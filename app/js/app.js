$(document).ready(function() {

	$('#search').on('click', function(){
		$('.hidden-menu').toggleClass('isVisible');
	})

	
	
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

	// RESET BUTTON 

	//$('#reset').on('click', function(){
	//	event.preventDefault();
	//	if($('.list-items').length > 1) { // greater that one item delete
	//	   $('.list-items:last').remove();
	//		alert('working');
	//	}
	//})

	$('ul').on('click', '.reset', function(){
		event.preventDefault();
		if($('li').length > 1) {
			$('li:last').remove();
			alert('working');
		}
		
	})
 
});


