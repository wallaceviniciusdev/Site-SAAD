//$("body").css("filter", "invert(100%)").css("background", "black");
//$("img.block").css("filter", "invert(100%)")


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
	$("li.fechar").click(function(){
		$("#sidebar").animate({
			right: -400
		}, 100, function(e){
			$(this).hide();
		});
	});
}

function masonry() {
	$("#works .items .block").css("display", "none");
	$("#works .items .block").slice(0, 7).css("display", "inline-block");
	$("#loadMore").on('click', function (e) {
	    e.preventDefault();
	    $("#works .items .block:hidden").slice(0, 4).slideDown().css("display", "inline-block");
	    if ($("#works .items .block:hidden").length == 0) {
	        $("#loadMore").css("opacity", 0.5);
	    }
	    $('html,body').animate({
	        scrollTop: $(this).offset().top
	    }, 1500);
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

$("input.telefone").mask("(99) 9999-9999?9").focusout(function (event) {  
    var target, phone, element;  
    target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
    phone = target.value.replace(/\D/g, '');
    element = $(target);  
    element.unmask();  
    if(phone.length > 10) {  
        element.mask("(99) 99999-9999");  
    } else {  
        element.mask("(99) 9999-9999");  
    }  
});

var $input    = document.getElementById('input-file'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});

titleAnimation();
menu();


