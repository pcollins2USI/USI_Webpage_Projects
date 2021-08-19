/*Car rental - This is where the program was left by one of your earlier exercises. You willl need to tweak it for Task 1 of pptx4.  */

function rental(days, hours) {
	 document.getElementById('d_out').innerHTML =parseInt(days);	
	 document.getElementById('hr_out').innerHTML =parseInt(hours);
	var days_f = parseFloat(days); var hours_f = parseFloat(hours);
	 document.getElementById('d_cost').innerHTML =(days_f*75.3).toFixed(2);	 
	 document.getElementById('hr_cost').innerHTML =(hours_f*6.79).toFixed(2);
	 document.getElementById('tot_cost').innerHTML =((hours_f*6.79 + days_f*75.3).toFixed(2));
}

//Tweak so arguments are passed to/received by a function
 