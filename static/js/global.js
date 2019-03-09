//$("body").css("filter", "invert(100%)").css("background", "black");
//$("img.block").css("filter", "invert(100%)")


function titleAnimation() {
	$('header .container').addClass("animated bounceInDown");
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

titleAnimation();
menu();


