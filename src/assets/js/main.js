
let toggleBtn = document.querySelector('.toggle_icon');
let pageWrapper = document.querySelector('.virtunus__page_wrapper');
let bodyClass = document.querySelector('body');

let icon = document.querySelector('.fas');

icon.addEventListener('click', function() {
	
})
let classAdd = ['active', 'sidebar-icon-only']
toggleBtn.addEventListener('click', () => {
	
	for( var i = 0; i < classAdd.length; i++ ){
		bodyClass.classList.toggle(classAdd[i]);
	}
	
})



jQuery(document).ready(function(){

	hide = $('.dropdown_menu');

	hide.hide();

	$('.side_nav li a').on('click', function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	})
})

