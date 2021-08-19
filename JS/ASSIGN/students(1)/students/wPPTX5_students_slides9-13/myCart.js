var list = ["*****Shopping Cart****<br/>"];
function supplies(item)
{
	list.push(item + "<br/>");
}

function viewcart()
{
	var view = list.toString();
	document.getElementById("cart").innerHTML = view;
}
function emptycart()
{
	document.getElementById("cart").innerHTML = "";
}