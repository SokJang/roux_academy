$(function() {

	//highlight the current nav
	//Selects the elemtent: dependend on the page id (Home) and dependend on the content eg 'Home' between the a tag
								// adds class 'active' to the parent element which is li tag
	$("#home a:contains('Home')").parent().addClass('active');
	$("#schedule a:contains('Schedule')").parent().addClass('active');
	$("#artists a:contains('Artists')").parent().addClass('active');
	$("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
	$("#register a:contains('Register')").parent().addClass('active');


	//make menus drop automatically
	//Selects ul element with class nav and selcts from there the li element with the class dropdown
						// on hover the function triggers
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover

}); //jQuery is loaded