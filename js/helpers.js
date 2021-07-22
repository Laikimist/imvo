// Vanilla JavaScript, cause why not?


function hideLoader(){
	if(document.getElementById('loading_animation')){
		document.getElementById('loading_animation').style.display = 'none';
	}
}

function popupwindow(url, title, w, h) {
	var left = (screen.width/2)-(w/2); 
	var top = (screen.height/2)-(h/2); 
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left); 
}

function showHide(shID, hideSelf = true) {
	var eleToHide = document.getElementById(shID);
	var eleToggle = document.getElementById(shID +'-show');
	
	if (eleToHide) {
		if (eleToggle.style.display != 'none') {
			if(hideSelf) {
				eleToggle.style.display = 'none';
			}
			eleToHide.style.display = 'block';
		}
		else {
			eleToggle.style.display = 'inline';
			eleToHide.style.display = 'none';
		}
	}
}