function cal(p_in1,y_in1,p_in2, y_in2){
	if(p_in1 == "" || p_in1 == null)
	{
		p_in1 = 0;
	}
		if(p_in2 == "" || p_in2 == null)
	{
		p_in2 = 0;
	}
		if(y_in1 == "" || y_in1 == null)
	{
		y_in1 = 0;
	}
		if(y_in2 == "" || y_in2 == null)
	{
		y_in2 = 0;
	}/* Check to see if input is a num
 	if(isNaN(parseInt(p_in1)))
	{
		window.alert("Not a num");
	}
	else
	{
		window.alert("is a num");
	} */
	var pur_in1 = parseInt(p_in1); var yell_in1 = parseInt(y_in1);
	var pur_in2 = parseInt(p_in2); var yell_in2 = parseInt(y_in2);
	var p_total = pur_in1 + pur_in2;
	var y_total = yell_in1 + yell_in2;
	document.getElementById("purple").innerHTML=p_total;
	document.getElementById("yellow").innerHTML=y_total;
	if(p_total > y_total)
	{
		document.getElementById("winner").innerHTML="Purple";
	}
	else
	{
		document.getElementById("winner").innerHTML="Yellow";
	}

	document.getElementById("pur_1").innerHTML=pur_in1;
	document.getElementById("yel_1").innerHTML=yell_in1;
	document.getElementById("pur_2").innerHTML=pur_in2;
	document.getElementById("yel_2").innerHTML=yell_in2;
}