function StyleNav(){
	var CurrentURL = window.location.href;
	function Right(){
		var x = document.getElementById("ComponentsLinks1");
		var y = document.getElementById("ComponentsLinks2");
		var z = document.getElementById("ComponentsLinks3");
		x.style.display = "block";
		y.style.display = "block";
		z.style.display = "block";
	}
	function Wrong(){
		var x = document.getElementById("ComponentsLinks1");
		var y = document.getElementById("ComponentsLinks2");
		var z = document.getElementById("ComponentsLinks3");
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
	}
	if(CurrentURL == "http://127.0.0.1/Media-Website/Pages/App.html"){
		Right();
	}
	if(CurrentURL == "http://127.0.0.1/Media-Website/Framework/App/Scripts/HTML/Featured.html"){
		Right();
	}
	if(CurrentURL == "http://127.0.0.1/Media-Website/Framework/App/Scripts/HTML/MostUsed.html"){
		Right();
	}
	if(CurrentURL == "http://127.0.0.1/Media-Website/Framework/App/Scripts/HTML/Advance.html"){
		Right();
	}
	else{
		Wrong();
	}
}