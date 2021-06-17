function hide_kinder_garder_content(id) {
	let check = document.querySelector('#'+id);
	if (document.querySelector('#'+id).style.display !== 'none') {
		document.querySelector('#'+id).style.display = 'none';
	} else {
		document.querySelector('#'+id).style.display = 'block';
	}
}

function hide_elementry_school_content(id) {
	let check = document.querySelector('#'+id);
	if (document.querySelector('#'+id).style.display !== 'none') {
		document.querySelector('#'+id).style.display = 'none';
	} else {
		document.querySelector('#'+id).style.display = 'block';
	}
}