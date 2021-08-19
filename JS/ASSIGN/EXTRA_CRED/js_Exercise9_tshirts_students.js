//Javascript file for js_Exercise9_tshirts_students.html
function blurFunction(qty)
{

	if(qty == "" || qty ==null)
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
	var answer;
	if(state == "" || state ==null)
	{
		answer = ""
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
	else if(state.toLowerCase() == "missouri" || state.toLowerCase() == "illinois")
	{
		answer = "3-5 days"
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
	else
	{
		answer = "20 days"
		document.getElementById("d_date").innerHTML = answer.fontcolor("red");
	}
}