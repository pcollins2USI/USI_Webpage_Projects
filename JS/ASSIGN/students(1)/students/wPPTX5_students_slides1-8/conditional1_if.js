//Functions AND if statements
/*-- from pptx slide (onClick)------------------------------------- */

function prompt_quantity()  {
var quantity = prompt("Please enter a quantity greater than 0");
if (parseInt(quantity) <= 0)    {
	alert("Quantity is not greater than 0.");
} 
else {
	alert("Thank you for entering a quantity greater than 0.");
} 
}

/*-- 1---from input box (onBlur)------------------------------------------- */
/*-- Notice that there is no  else  in the following--------------- */

function samestate(st){
/* enter IN first; then KY.  Comment out the following prime statement and retry.  */
document.getElementById("message").innerHTML="";
	
/*  solution 1.... how many variations are there???
if (st == "IN" || st=="in" || st=="INDIANA" || st=="Indiana" || st=="indiana" || st=="IND" || st=="Ind" || st=="ind")

    solution 2.... convert each option to upper case
if (st.toUpperCase() == "IN" || st.toUpperCase()=="INDIANA" || st.toUpperCase()=="IND")
	
    Final solution.... convert the content of the variable to upper case and use the converted variable
*/
var st_cap = st.toUpperCase();
if (st_cap == "IN" || st_cap=="INDIANA" || st_cap=="IND")
{
document.getElementById("message").innerHTML="Indiana residents are required to pay sales tax.";		
}
}

/*-- 2---from input box  (onClick)------------------------------------ */
function checkmath(useranswer){
if (parseInt(useranswer) == 4){
	document.getElementById("feedback").innerHTML="You're Right!";	
}	
else {
	document.getElementById("feedback").innerHTML="Try Again.";
}
}

/*-- 3---from input box (onClick)----------------IF version------------------------ --*/

function check_age(userage){
if (userage=="" || userage == null) {
	document.getElementById("ageinfo").innerHTML="Please enter an age."
}
else if (parseInt(userage) >= 16){
	document.getElementById("ageinfo").innerHTML="You're 16 or over; old enough to drive with a valid license.";
}	
else if (parseInt(userage) == 15){
	document.getElementById("ageinfo").innerHTML="You're 15; old enough to drive with learner's permit and supervision.";
}
else {
var yearstilldrive=15-parseInt(userage);
	document.getElementById("ageinfo").innerHTML="You're not old enough to drive. try again in " + yearstilldrive + " years.";
}}


/*-- 3---from input box  (onClick)------------------CASE  version-------------------- 
     alternative to multiple  else if  statements
 --------------------------------------------------------------
function check_age(userage){
switch (true){
	case (userage=='' || userage== null):
		document.getElementById("ageinfo").innerHTML="Please enter an age.";
		break;
	case (parseInt(userage)>=16):
		document.getElementById("ageinfo").innerHTML="You're 16 or over; old enough to drive with a valid license.";
		break;
	case (parseInt(userage)==15):
		document.getElementById("ageinfo").innerHTML="You're 15; old enough to drive with learner's permit and supervision." ;
		break;			
	case (parseInt(userage)<15):
		var yearstilldrive=15-userage;
		document.getElementById("ageinfo").innerHTML="You're not old enough to drive. Try again in "+yearstilldrive+" years." ;
		break;		
	default:
		document.getElementById("ageinfo").innerHTML="There was a problem processing your request.";	
}}
--*/

/*-- 3---One more twist:  What if at age 90 it was manditory that individuals relinquish their drivers license?
Could add a case to test >=90
Could change cases to be >=16 && <90
Might want to rearrange cases knowing that testing stops with a true case

STUDENTS DO NOT HAVE THIS "FIX":


	case (parseInt(userage)>=16 && parseInt(userage)<90):
 ----------------------------------------------------------------*/