
  /* -- Illustration from PowerPoint   */
  
function usrname()  {
var user;
user = prompt("Please enter your name");
	alert("Thank you, " + user);
}



/*  -- next function:  What is today's date? -- */		
function todayis(){
	document.getElementById('para').innerHTML=Date();
}




/* -- function with hard-coded argument:  Number of human years per dog year (7) -- */
function dogyrs(age){
	age*=parseInt(prompt("What is your age?"));  
	document.getElementById("dmyage").innerHTML=age;
}




/* -- function with value from textbox as argument:  User age -- */
function catyrs(age){
	age*=7;
	document.getElementById("myage").innerHTML=age;
}




/* -- function with argument from input box:  cost of seeds -- */
// &#36; is the character code for $
// toFixed rounds to number of decimals specified ... try numpackets*=.333 & order 3
function seeds(numpackets){
	numpackets*=1.9;
	document.getElementById("cost").innerHTML="At &#36;1.90 ea, your total cost will be &#36;"  + numpackets.toFixed(2) + ".";
}



/* -- function with arguments from 2 input boxes:  cost of seeds -- */
function veggieseeds(corn,peas){
	var total_cost;
	corn*=1.99;
	peas*=1.75;	
	total_cost=corn+peas;
	document.getElementById("cost_corn").innerHTML="At &#36;1.99 ea, the cost of the corn seed will be &#36;"  + corn.toFixed(2) + ".";	

	document.getElementById("cost_peas").innerHTML="At &#36;1.75 ea, the cost of the peas seed will be &#36;"  + peas.toFixed(2) + ".";	
	
	document.getElementById("tot_cost").innerHTML="The total cost of your order will be &#36;"  + total_cost.toFixed(2) + ".";
}
/* --
 same as above, but passing 4 variables:  qty & cost of seeds 
 will not need to parse prices because not coming from textbox
 

 
-- */
