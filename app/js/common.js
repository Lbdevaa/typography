$(function() {
	// бургер
	var burger = document.querySelector('.burger-menu');
	var mobMenu = document.querySelector('.mobile-menu');
	burger.onclick = function() {
		this.classList.toggle('active'); 
		mobMenu.classList.toggle("show");
	}  

	// весь каталог
	document.querySelector('.pop-pagination').onclick = function() {
		this.classList.toggle('active');  
		document.querySelector('.mobile-more').classList.toggle("show") 
	} 
	var mobMore = document.querySelectorAll('.mobile-more__list'); 
	mobMore.forEach( mobMore => mobMore.onclick = function(){
			this.classList.toggle('show');  
	} )

	// plus
	// document.querySelector('.cart-box__minus').onclick = function() {
	// 	document.querySelector('cart-box__amount').val(parseInt(document.querySelector('cart-box__amount').val())-1);   
	// } 

	$(document).ready(function() {
		$('.cart-box__minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	});
});
