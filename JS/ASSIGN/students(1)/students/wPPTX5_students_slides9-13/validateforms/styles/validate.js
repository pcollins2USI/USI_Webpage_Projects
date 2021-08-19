
 function validateForm() {
if (document.forms["custinfo"].pw.value.length != 7){
	window.alert("Password must be 7 characters.");
	return false;
	}

 if (document.forms["custinfo"].fname.value == ""){
	alert("First name is required.");
	return false;
	}
if (document.forms["custinfo"].lname.value==""){
	alert("Last name is required.");
	return false;
	} 
if (document.forms["custinfo"].zip.value=="" ||  document.forms["custinfo"].zip.value== null ||
    document.forms["custinfo"].zip.value *1 != document.forms["custinfo"].zip.value  ||
    document.forms["custinfo"].zip.value.length !=5 && document.forms["custinfo"].zip.value.length !=9 ){
	alert("A 5- or 9-digit zip code is required.");
	return false;
	}
if (document.forms["custinfo"].street.value==""){
	alert("Street is required.");
	return false;
	}
if (document.forms["custinfo"].city.value==""){
	alert("City is required.");
	return false;
	}
if (document.forms["custinfo"].state.value==""){
	alert("A two-character state abbreviation is required.");
	return false;
	}
if (document.forms["custinfo"].em.value==""){
	alert("Please provide a valid email address.");
	return false;
	}
/* 
alert("Your information has been successfully submitted.");   
return true;
} 

function validateForm() { */
if (document.forms["custinfo"].html.checked == false  &&
    document.forms["custinfo"].css.checked == false  &&
	document.forms["custinfo"].js.checked == false  &&
	document.forms["custinfo"].php.checked == false  )  {
	alert("Select at least one class.");
	return false;
	}
if (document.forms["custinfo"].classification.value != "fr" &&
    document.forms["custinfo"].classification.value != "so" &&
	document.forms["custinfo"].classification.value != "jr" &&
	document.forms["custinfo"].classification.value != "sr"  &&
	document.forms["custinfo"].classification.value != "gr" 	)  {
	alert("Select classification.");
	return false;
	}	

alert("Your information has been successfully submitted.");
return true;
} 