$(function() {
	// бургер
	var burger = document.querySelector('.burger-menu');
	var mobMenu = document.querySelector('.mobile-menu');
	burger.onclick = function() {
		this.classList.toggle('active'); 
		mobMenu.classList.toggle("show");
	}  

	
	var mobMore = document.querySelectorAll('.mobile-more__list'); 
	mobMore.forEach( mobMore => mobMore.onclick = function(){
			this.classList.toggle('show');  
	} )
	 
	// быстрый заказ
	$('.open-popup').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	}); 
	// plus
	// document.querySelector('.cart-box__minus').onclick = function() {
	// 	document.querySelector('cart-box__amount').val(parseInt(document.querySelector('cart-box__amount').val())-1);   
	// } 
	// выбор макета
	$('.maket-box__item').click(function() {
		$('.maket-box__item.active').removeClass("active");
		$(this).addClass("active");
		var choose = $(this).index() + 1 ; 
		$('#price-maket').text('270р');
		$('#field-maket').text("Макет № " + choose).addClass("text_blue"); 
	})
	// выбор продукта
	$('.product-select').click(function() {
		$('.product-select.active').removeClass("active");
		$(this).addClass("active"); 
		var choose = $('.rig-box>.product-select.active>.product-select__name').text() ; 
		var rigPrice = $('.product-select__price').val();  
		$('#price-rig').text(rigPrice);
		$('#field-rig').text(choose).addClass("text_blue"); 
	})
 
	// далее
	// if($("#price-maket").val().length > 0){
		$('.maket-box__btn').click(function() {
			$('.maket-box').hide();
			$('.rig-box').removeClass("hide");
			$('.rig-box').addClass("grid"); 
			$('.maket__title').text('Выберите оснастку (Шаг 2 из 3)');
		})
	// }
	
	$('.rig-box__btn').click(function() {
		var rigPrice = $('.rig-box>.product-select.active>.product-select__price').text(); 
		$("#price-rig").text(rigPrice);
		$('.rig-box').hide();
		$('.data-box').removeClass("hide");
		$('.data-box').addClass("grid")
		$('.maket__title').text('Введите данные (Шаг 3 из 3)');
		// итого 
		var maketSum = $('#price-maket').text() + rigPrice; 
		$('.maket-choose__value').addClass("text_blue").css('font-size', '24px');
		$('.maket-choose__value').text(parseInt(maketSum)+parseInt(rigPrice)+ 'Р');
	})
	
	

	//требования к макетам
	$('.layout__btn:nth-child(1)').click(function(){
		$('.layout__btn.active').removeClass("active"); 
		$(this).addClass('active');
		$('.layout__text-wrap_2').hide();
		$('.layout__text-wrap_3').hide();
		$('.layout__text-wrap').show();
	})
	$('.layout__btn:nth-child(2)').click(function(){
		$('.layout__btn.active').removeClass("active"); 
		$(this).addClass('active');
		$('.layout__text-wrap').hide();
		$('.layout__text-wrap_3').hide();
		$('.layout__text-wrap_2').show();
	})
	$('.layout__btn:nth-child(3)').click(function(){
		$('.layout__btn.active').removeClass("active"); 
		$(this).addClass('active');
		$('.layout__text-wrap').hide();
		$('.layout__text-wrap_2').hide();
		$('.layout__text-wrap_3').show();
	})
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
	//слайдер
	$('.slide').owlCarousel({
		items: 1,
		dots: false,
		nav: false,
		autoplay: true 

	});
	// о компании
	$('.about-slider').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		navText: ['<img style="position: absolute;top: 60%;" src="../img/left-arrow.svg">','<img style="position: absolute;top: 60%;" src="../img/right-arrow.svg">'],  
		autoplay: true 

	});
	// mask for form-call
	// $("input[name='phone']").inputmask("+7 (999) 999-99-99"); 
	

	// весь каталог только на главной
	var allCatalog = document.querySelector('.pop-pagination');
	allCatalog.onclick = function() {
		this.classList.toggle('active');  
		document.querySelector('.mobile-more').classList.toggle("show") 
	} 
});
