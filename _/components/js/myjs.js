$(function() {

	//activate schedule tabs

	var hash = window.location.hash;
	// if hash exists and ul with class nav exists with an anchor tag
	// look for the hash and show it
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');

	// controlling opening of accordions
	$('#monday.accordion-body').addClass('in');

	$('#artists #tuesday.accordion-body').addClass('in');
	$('#artists #wednesday.accordion-body').addClass('in');
	$('#artists #thursday.accordion-body').addClass('in');
	$('#artists #friday.accordion-body').addClass('in');

	$('#register #monday.accordion-body').removeClass('in');

	// bootstrap classes to photos
	$('.abouttheartists img').addClass('img-circle');
	$('aside.photosfromlastyear img').addClass('img-thumbnail');
	$('.artistinfo .photogrid img').addClass('img-thumbnail');

	//highlight the current nav
	//Selects the elemtent: dependend on the page id (Home) and dependend on the content eg 'Home' between the a tag
								// adds class 'active' to the parent element which is li tag
	$("#home a:contains('Home')").parent().addClass('active');
	$("#schedule a:contains('Schedule')").parent().addClass('active');
	$("#artists a:contains('Artists')").parent().addClass('active');
	$("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
	$("#register a:contains('Register')").parent().addClass('active');


	//make menus drop automatically
	//Selects ul with class nav and selects li with class dropdown 
	//triggers on hover a function to element with the class dropdown-menu
	//on hover the element fades in
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
		// on hover out dropdown-menu hovers out
		}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover

	//show tooltips
	$("[data-toggle='tooltip']").tooltip({ animation:true });

	//modal photos
	$('.modalphotos img').on('click', function() {
		$('#modal').modal({
			show: true,
		})

		var mysrc = this.src.substr(0, this.src.length-7) + '.jpg';

		$('#modalimage').attr('src', mysrc);

		$('#modalimage').on('click', function() {
			$('#modal').modal('hide');
		})
	});

}); //jQuery is loaded