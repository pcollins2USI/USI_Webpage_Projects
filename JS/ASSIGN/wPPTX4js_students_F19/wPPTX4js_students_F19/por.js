var button;
function hidecar(){
	document.getElementById("car_pic").style.display = "none";
	button="<input type='button' value='Show Car' onclick='viewcar()'/>";
	document.getElementById("insert_btn").innerHTML=button;

}
function viewcar(){
	document.getElementById("car_pic").style.display = "";
	button="<input type='button' value='Hide Car' onclick='hidecar()'/>";
	document.getElementById("insert_btn").innerHTML=button;
}