$(document).ready(function() {

	$("#img2").hide();
	$("ul").hide();
	$("._money").hide();
	$("._multiply").hide();

	$("#img2").click(function(){
			$(this).hide();
			$("#img1").show(500);
			$(".coltop").css({
			"width":"100px",
			"transition" : "width .5s",
            "transition-delay" : ".1s"
		});
			$("._header").fadeIn(500);
			$("ul").slideUp();
			$("._money").hide();
			$("._multiply").hide();
	});

	$("#img1").click(function(){
			$(this).hide();
			$("#img2").show(500);
		$(".coltop").css({
			"width":"310px",
			"transition" : "width .5s",
            "transition-delay" : ".1s"
		});
		//$("._header").fadeOut(500);
		$("ul").fadeIn();
	});
	$("#link1").click(function(){

		$("._header").slideUp(500, function(){
			$("._money").slideDown(1000);
		});
	});

	$("#link2").click(function(){

		$("._header").slideUp(500, function(){
			$("._multiply").slideDown(1000);
		});
	});

});