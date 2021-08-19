/* Note that there may be multiple forms on a page, so they are referenced by index or by name.  The form on the html page that uses this function has not been named, so the form is forms[0]. 

See form_validation_example2 for additional methods.

The HTML button element triggers   onclick
Note that msg is not part of the function but is initialized (primed) by the function each time the button is clicked.
*/

var msg;
function chkform() {
msg=""
switch(true){
	case (document.forms[0].username.value == "") || (document.forms[0].username.value == null): 
		msg="Please enter your name.";
		break;
	case(document.forms[0].zip.value == "") || (document.forms[0].zip.value == null) || 
		(document.forms[0].zip.value.length != 5) || (document.forms[0].zip.value *1 != document.forms[0].zip.value): 
		msg="<br/>Zip must be 5 digits.";
		break;
	case (document.forms[0].userage.value =="") || (document.forms[0].username.value == null) || 
	     (document.forms[0].userage.value <1) || (document.forms[0].userage.value *1 != document.forms[0].userage.value): 
		msg="<br/>Please enter your age.";
		break;
	case (document.forms[0].userage.value <18): 
		msg="<br/>Age is less than 18. You are not an adult and may be unable to order some items.";
}
if (msg !=""){
	document.getElementById("oops").innerHTML=msg;
}
else {
	document.getElementById("oops").innerHTML="You will now be redirected to an order form";
}
}