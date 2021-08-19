function usrname()  
{
	var user;
	user = prompt("Please enter your name");
	alert("Thank you," + user);
}

function todayis()
{
	document.getElementById("para").innerHTML=Date();
}

function dogyrs(age)
{
	age*=parseInt(prompt("what is your age?"));
	document.getElementById("dmyage").innerHTML=age;
}

function catyrs(age)
{
	age*=7;
	document.getElementById("myage").innerHTML=age;
}

function seeds(packets)
{
	packets*=1.9;
	document.getElementById("cost").innerHTML="At &#36;1.90 ea. your total cost will be &#36;" + packets.toFixed(2) + ".";
}

function veggieseeds(corn,peas)
{
	var total_cost;
	corn*=1.99;
	peas*=1.75;
	total_cost=corn+peas;
	document.getElementById("cost_corn").innerHTML
}