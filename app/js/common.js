$(function() {
	// бургер
	document.querySelector('.burger-menu').onclick = function() {
		this.classList.toggle('active'); 
		document.querySelector('.mobile-menu').classList.toggle("show") 
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
});
