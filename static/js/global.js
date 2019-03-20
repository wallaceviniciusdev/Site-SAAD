function titleAnimation() {
	$('header .container').addClass("animated bounceInDown");
	$('#events').addClass("animated fadeInDown");
}

function menu(){
	$("#sidebar").hide();
	$("#icon-menu").click(function(){
		$("#sidebar").show().animate({
			right: -22
		}), 100;
	});
}

function closeSidebar(){
	$(document).click(function(e){
		if(!$(e.target).is("#sidebar") && !$(e.target).is("#icon-menu")){
			$("#sidebar").animate({
				right: -400
			}, 100, function(e){
				$(this).hide();
			});
		}
	});
}

function buttonTop(){
	var btn = $('#toTop');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
}

function telefoneMask(){
	$("input.telefone").mask("(99) 9999-9999?9").focusout(function(event) {  
		var target, phone, element;
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;
		phone = target.value.replace(/\D/g, '');
		element = $(target);  
		element.unmask();  

		if(phone.length > 10){  
			element.mask("(99) 99999-9999");  
		}else{  
			element.mask("(99) 9999-9999");  
		}  
	});
}

function nameFile(){
	var input = $('#input-file');
	var fileName = $('#file-name');

	input.change(function(){
		fileName.text($(this).val());
	});
}

nameFile(); //coloca o nome do arquivo selecionado no <span> da página de eventos > submição de trabalhos
telefoneMask(); //coloca máscara no input de telefone
titleAnimation(); //faz a animação de entrada do topo
menu(); //função que abre o menu
closeSidebar(); //função que fecha o menu


