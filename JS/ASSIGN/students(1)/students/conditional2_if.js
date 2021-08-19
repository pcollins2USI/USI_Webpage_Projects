
/* --- COMPARISONS (not assignments) --- */

/*-- 4---from input box--check length--onclick----------------------- */
function checkacct(usernum){
if (usernum.length == 7)
	document.getElementById("getacct").innerHTML="Thank you; we have your information.";		
else
	document.getElementById("getacct").innerHTML="Your account number must be 7 characters, like 'xx-xxxx'.";
}




/*-- 5---from input box--  existance  numeric  length  --onblur------------ */
/*  null, blank, empty, void...  there are differences in programming.  */
function zipcode(zip5){
	
//prime message before checking input
document.getElementById("zip_msg").innerHTML="";  
if (zip5 == "" || zip5 == null || zip5*1 != zip5  || zip5.length != 5)
	document.getElementById("zip_msg").innerHTML="zip should be 5-digit numeric";
}




/*-- 6---from combo box----onchange------IF-----------------
      ---uses css styling for background color (see case_illustrated file for 'switch case' solution) ------ */ 
function pgcolor(color){
if (color=="green"){
	document.body.style.backgroundColor="#0f0";	
}else if (color=="yellow"){
	document.body.style.backgroundColor="#ff0";
}else if (color=="blue"){
	document.body.style.backgroundColor="#00f";
}else if (color=="red"){
	document.body.style.backgroundColor="#f00";
}else 
	document.body.style.backgroundColor="#fff";	
}
/*-- 6---from combo box----onchange------CASE-- from case_illustrated file ------------ 
function pgcolor(color){
switch (true){
	case (color=="green"):
		document.body.style.backgroundColor="#0f0";
		break;
	case (color=="yellow"):
		document.body.style.backgroundColor="#ff0";
		break;
	case (color=="blue"):
		document.body.style.backgroundColor="#00f";
		break;	
	case (color=="red"):
		document.body.style.backgroundColor="#f00";
		break;			
	default:
		document.body.style.backgroundColor="#fff";	
}}	
*/


