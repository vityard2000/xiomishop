(function () {

	var x =true;
	document.getElementById('nav-bar').onclick = function() { 
    	if(x) {x=!x; document.getElementById('vb').style.cssText = 'visibility: visible; display:block;'} 
    	else{x=!x; document.getElementById('vb').style.cssText = 'visibility: hidden; display:none;'}
	}


	    function red (id, text, price)
	    {
	    	var content = document.createElement("div"),
				dishes = document.getElementById("dishes");
		content.id=id;
		content.setAttribute("style","background-image: url(img/"+id+".jpg);");
		content.innerHTML = "<div><div id=\"description\"><span>"+text+"</span><div id=\"price\">"+price+"<i class=\"fa fa-ruble\" aria-hidden=\"true\"></i></div></div></div>";
		dishes.appendChild(content);

		}
		red ( "1" , "Блины с<br>красной икрой" , "250");
		red ( "2" , "Блины с<br>красной икрой" , "250");
		red ( "3" , "Блины с<br>красной икрой" , "250");
		red ( "4" , "Блины с<br>красной икрой" , "250");
		red ( "5" , "Блины с<br>красной икрой" , "250");
		red ( "6" , "Блины с<br>красной икрой" , "250");
		red ( "7" , "Блины с<br>красной икрой" , "250");
		red ( "8" , "Блины с<br>красной икрой" , "250");
		red ( "9" , "Блины с<br>красной икрой" , "250");
		red ( "10" , "Блины с<br>красной икрой" , "250");
		red ( "11" , "Блины с<br>красной икрой" , "250");
		red ( "12" , "Блины с<br>красной икрой" , "250");
		red ( "8" , "Блины с<br>красной икрой" , "250");
		red ( "9" , "Блины с<br>красной икрой" , "250");
		red ( "10" , "Блины с<br>красной икрой" , "250");
		
})();


//<div><div id="description"><span>Блины с<br>красной икрой</span><div id="price">250<i class="fa fa-ruble" aria-hidden="true"></i></div></div></div>//