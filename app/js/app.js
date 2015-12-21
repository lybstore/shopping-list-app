$(document).ready(function() {

	$('#search').click(function(){
		$('.hidden-menu').toggleClass('isVisible');
	})


	// CHARACTER LIMIT CHECK
	$('#add-btn').on('click',function(){
		$('.list-items:first').clone().appendTo("#items").addClass('isVisible');
		$('#items-fields').val('');
	})

	// RESET BUTTON 
	$('.reset').on('click', function(){
		if( $('.list-items').length != 1);
		$('.list-items:last').remove();
		event.preventDefault();
	})

});