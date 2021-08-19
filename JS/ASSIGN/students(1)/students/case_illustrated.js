/* ---from options (drop-down combo)  OR  radio buttons;
      uses js for background color (see conditional2_if.js file for css styling option)
------ */ 

function choose_color(mycolor){
switch (true){
	case (mycolor=="blue"):
	    document.bgColor = "#00f";
		break;
	case (mycolor=="green"):
		document.bgColor = "#0f0";
		break;
	case (mycolor=="red"):
		document.bgColor = "#f00";
		break;
	case (mycolor=="yellow"):
		document.bgColor = "#ff0";
		break;		
	case (mycolor=="orange"):
		document.bgColor = "#fc6";
		break;			
	default:
		document.bgColor = "#fff";	
}}
