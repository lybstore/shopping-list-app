$(document).ready(function() {

	$('#search').click(function(){
		$('.hidden-menu').toggleClass('isVisible');
	})


	
	// CHARACTER LIMIT CHECK
	$('#items-fields').keypress(function(e){

		if(e.which == 13) {

			if($(this).val().length > 3) {
				$('.list-items:first').clone().appendTo("#items").addClass('isVisible');
				$('#items-fields').val('');
			} else {
				alert('enter a valued item')
			}
		}
	})

	// RESET BUTTON 

	var eleClone = $('list-items').clone(true);

	$('.reset').on('click', function(){
		$('.list-items').replaceWith(eleClone.clone(true));
		//alert('working');
	})

});