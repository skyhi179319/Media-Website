var CurrentURL = window.location.href;
function jquery(){
	$(document).ready(function(){
		$("section").each(function(){
			$(this).css("margin-left","4px");
		});
	});
}
if(CurrentURL == "http://127.0.0.1/Media-Website/Framework/App/Scripts/HTML/Featured.html"){
		jquery();
}
if(CurrentURL == "http://127.0.0.1/Media-Website/Framework/App/Scripts/HTML/MostUsed.html"){
		jquery();
}