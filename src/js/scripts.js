$(document).ready(function(){

	//Altura Barra Menu Lateral
	heightBody = $(document).height() + "px";
	$(".menuBar").height(heightBody);

	//Exibição Menu Lateral
	$("#nav-toggle").click(function(){
		$(".bkgMenuBar").fadeIn("fast");
		setTimeout('$(".menuBar").animate({width:"toggle"},250);', 100);
		setTimeout('$(".closeBar, .contBar").fadeIn();', 400);
		//setTimeout('$(".").fadeIn("fast");', 600);		
	});

	//Fechar Menu Lateral
	$(".closeBar").click(function(){
		//setTimeout('$(".menuBar").animate({width:"toggle"},250);', 100);
		$(".bkgMenuBar, .menuBar, .closeBar, .contBar").fadeOut("fast");
	});
	
});