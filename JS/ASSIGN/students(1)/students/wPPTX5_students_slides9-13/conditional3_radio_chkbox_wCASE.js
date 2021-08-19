/*-- 7---from radio buttons--trigger event--onChange event-----------------------
---------could use if  else if  rather than case ------------------------- */

function vehicle(whichmake){
switch(true){
	case (whichmake=="buick"):
		document.getElementById("result").innerHTML="<br>Available Models include:<br>Regal<br>LaCrosse<br>Enclave<br>Encore";
		break;
	case (whichmake=="ford"):
		document.getElementById("result").innerHTML="<br>Available Models include:<br>Mustang<br>Focus<br>Fiesta<br>Edge";
		break;
	case (whichmake=="volkswagen"):
		document.getElementById("result").innerHTML="<br>Available Models include:<br>Passat<br>Golf<br>Beetle<br>Jetta";
		break;
	case (whichmake=="toyota"):
		document.getElementById("result").innerHTML="<br>Available Models include:<br>Prius<br>Corolla<br>RAV4<br>Land Cruiser";
		break;		
	default:
		document.getElementById("result").innerHTML="<br>There was a problem processing your request.";		
}
} 
	
/*-- 8---from checkboxes --trigger event--onClick-----------------------
	Note, however, that EACH CLICK (on or off) triggers the event and adds 
	to note */

/* The variable "note" is NOT part of a function but is available for all of the functions to use.  
   When a function is called, "note" retains its value.   
*/
var note="";
var head="<br>Available Selections:";

function cheese_chkd(item){
if(item){note+="<br>cheese"          // if(item)  is the same as  if(item=="true")
}
document.getElementById("listhead").innerHTML=head;
document.getElementById("list").innerHTML=note;
}
//  since the values are being sent to separate functions, the if isn't really necessary
function meat_chkd(item){
{note+="<br>meat"                    
}
document.getElementById("listhead").innerHTML=head;
document.getElementById("list").innerHTML=note;
}
function milk_chkd(item){
{note+="<br>milk"
}
document.getElementById("listhead").innerHTML=head;
document.getElementById("list").innerHTML=note;
}
function pizza_chkd(item){
if(item){note+="<br>pizza"
}
document.getElementById("listhead").innerHTML=head;
document.getElementById("list").innerHTML=note;
}


/*-- 8---from checkboxes --------"fix" for above---------------   

// "Prime" the variables so each starts with the "false" value
//    One variable for each checkbox   
 
var chcheese="false";   var chmeat="false";
var chmilk="false";     var chpizza="false";

// When a checkbox is clicked (changed), it calls the function and stores the item's value in the variable 
function item(whichitem){
	
// Check to see which item has been changed (checked) and reverse its state (true to false  or  false to true)  
switch(true){
	case (whichitem=="cheese"):
		if (chcheese=="true") {chcheese="false"; }	else {(chcheese="true"); }
		break;
	case (whichitem=="meat"):
		if (chmeat=="true"){chmeat="false"; }	    else {(chmeat="true"); }	
		break;
	case (whichitem=="milk"):
		if (chmilk=="true"){chmilk="false"; }	    else {(chmilk="true"); }	
		break;
	case (whichitem=="pizza"):
		if (chpizza=="true"){chpizza="false"; }	    else {(chpizza="true"); }	
		break;		
	default:
		document.getElementById("list").innerHTML="<br>There was a problem processing your request.";
};

// Prime the note variable that will be used to collect all of the checked items 
var note=" ";

// See which variables are true (item checked) and populate the list 
if (chcheese=="true") {note+="<br>cheese"; };
if (chmeat=="true") {note+="<br>meat"; };
if (chmilk=="true") {note+="<br>milk"; };
if (chpizza=="true") {note+="<br>pizza"; };

// Put result in the html and display 
document.getElementById("listhead").innerHTML="<br>Selections:";		
document.getElementById("list").innerHTML=note;
}
*/
 