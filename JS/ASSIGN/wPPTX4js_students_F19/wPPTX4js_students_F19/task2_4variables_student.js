function cal(qty_corn,qty_peas){
	var corn = 1.99 * parseFloat(qty_corn);
	var peas = 1.75 * parseFloat(qty_peas);
	var total = corn + peas;
	document.getElementById("tot").innerHTML=total;
}