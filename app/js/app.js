$(document).ready(function() {

	$('#search').on('click', function(){
		$('.hidden-menu').toggleClass('isVisible');
	})

	// CAPHCA STORE ITEM NAMES
	

	// CHARACTER LIMIT CHECK
	$('.add-item').click(function(){
		$('.list-items:first').clone().appendTo("#items").addClass('isVisible');
		$('#items-fields').val('');
	})

	// RESET BUTTON 
	$('.reset').on('click', function(){
		if($('.list-items').length > 1) {
			$('.list-items:last').remove();
		}
	})
});