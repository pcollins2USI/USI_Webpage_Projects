/* Note that there may be multiple forms on a page, so they are referenced by index or by name.  The form on the html page using this function has been named custinfo, so the form is forms["custinfo"].  

The first function, which validates a password, does only that one thing.  The same logic could be applied to all of the other entries... one function to check one element.

The second function checks several form elements in response to clicking a submit button.  Note that items are checked in sequence and when one is "false", processing stops.  Clicking the submit button again starts the process over.  When the test gets all the way through the IF statements without encountering a "false", a message is displayed and "true" is returned to the code within the submit button, which allows it to clear all of the elements in the form.

Notice that  onsubmit  is in the HTML form element, not the submit button element.
*/

function ckpw(pw) {
if (pw.length !=7 || pw*1 != pw) {
	alert("password must be 7 numeric characters");
	}
}

function validateForm() {
if (document.forms["custinfo"].fname.value == ""){
	alert("First name is required.");
	return false;
	}
if (document.forms["custinfo"].lname.value==""){
	alert("Last name is required.");
	return false;
	}
if (document.forms["custinfo"].state.value.length !=2){
	alert("A two-character state abbreviation is required.");
	return false;
	}
if (document.forms["custinfo"].zip.value.length<5){
	alert("A 5- or 9-digit zip code is required.");
	return false;
	}
if (document.forms[0].userPhone.value.length != 13) {
    alert("Phone should be like (123)456-7890");
    return false;
}
if (document.forms[0].quantity.value * 1 != document.forms[0].quantity.value || document.forms[0].quantity.value=="" 
	|| document.forms[0].quantity.value<1) {
    alert("Quantity must be numeric, greater than 0.");
    return false;
}	
alert("Your information has been successfully submitted.");
return true;
}