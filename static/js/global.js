function titleAnimation() {
	$('header .container').addClass("animated bounceInDown")
	$('#events').addClass("animated fadeInDown")
}

function menu(){
	$("#sidebar").hide()
	$("#icon-menu").click(function(){
		$("#sidebar").show().animate({
			right: -22
		}), 100
	})
}

function closeSidebar(){
	$(document).click(function(e){
		if(!$(e.target).is("#sidebar") && !$(e.target).is("#icon-menu")){
			$("#sidebar").animate({
				right: -400
			}, 100, function(e){
				$(this).hide()
			})
		}
	})
}

function roller(){
	$('li.item:nth-child(2)').click(function() {
		$('html, body').animate({
		scrollTop: $('saad').offset().top
		}, 1000)
	})

	$('li.item:nth-child(3)').click(function() {
		$('html, body').animate({
		scrollTop: $('#sistema').offset().top
		}, 1000)
	})

	$('li.item:nth-child(4)').click(function() {
		$('html, body').animate({
		scrollTop: $('#contact').offset().top
		}, 1000)
	})
}

function buttonTop(){
	var btn = $('#toTop')

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show')
		} else {
			btn.removeClass('show')
		}
	})

	btn.on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({scrollTop:0}, '300')
	})
}

/*function telefoneMask(){
	$("input.telefone").mask("(99) 9999-9999?9").focusout(function(event) {  
		var target, phone, element
		target = (event.currentTarget) ? event.currentTarget : event.srcElement
		phone = target.value.replace(/\D/g, '')
		element = $(target)
		element.unmask()

		if(phone.length > 10){  
			element.mask("(99) 99999-9999")
		}else{  
			element.mask("(99) 9999-9999")  
		}  
	})
}*/

function nameFile(){
	var input = $('#input-file')
	var fileName = $('#file-name')

	input.change(function(){
		fileName.text($(this).val())
	})
}

function openEvent(){
	var event = $(".clicked-event")
	var item = $(".item-event")
	var close = $(".close-event")

	event.hide()
	item.click(function(){
		event.fadeIn(100)
	});

	close.click(function(){
		event.fadeOut(100)
	})


}


function menuFixo(){
	$(document).ready(function() {
	if($(window).scrollTop() > 400){
		console.log("oi anitta")
	}
	})
}

menuFixo()
roller()
openEvent() //abre ou fecha um evento
nameFile() //coloca o nome do arquivo selecionado no <span> da página de eventos > submição de trabalhos
titleAnimation() //faz a animação de entrada do topo
menu() //função que abre o menu
closeSidebar() //função que fecha o menu


