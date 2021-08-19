//Javascript file for js_Exercise9_tshirts_students.html
function blurFunction(qty)
{

	if(qty == "" || qty == null || isNaN(qty))
	{
		
	}
	else
	{
	var qty_num = parseFloat(qty); var ship; var t_shirt; var total;
	ship = 1.05 * qty_num;
	t_shirt = 14.99 * qty_num;
	total = ship + t_shirt;
	document.getElementById("t_total").innerHTML = t_shirt.toFixed(2);
	document.getElementById("s_cost").innerHTML = ship.toFixed(2);
	document.getElementById("o_total").innerHTML = total.toFixed(2);
	}
}
function blurFunction2(state)
{
	var answer;var s_Up = state.toUpperCase;
	if(state == "" || state ==null)
	{
		answer = ""
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
	else if(s_Up == "MISSOURI" || s_Up == "ILLINOIS" || s_Up == "IL" || s_Up =="MO")
	{
		answer = "3-5 days"
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
	else
	{
		answer = "3-20 days"
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
}