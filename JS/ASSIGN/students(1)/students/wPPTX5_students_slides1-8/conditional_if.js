//Function call in HTML to trigger these if statements
/*-- from pptx slide ------------------------------------- 
  Note that the function includes all of the if statemments  ---*/

function if_examples()  {
/* 1---- Comparisons (==) not assignments (=) --------------*/
  

if ((20/2)==10){
 document.write("true" + "<br>");
} else{
 document.write("false" + "<br>");
} 	  
/* 2--------------------------------------------------------------*/	 
if ((20/2)!=10){
  document.write("true" + "<br>");
} else{
  document.write("false" + "<br>");
} 	 
/* 3--------------------------------------------------------------*/ 
if ((20/3)!=10){
  document.write("true" + "<br>");
} else{
  document.write("false" + "<br>");
} 	  
/* 4--------------------------------------------------------------*/
if ((20/2)>=10){
  document.write("true" + "<br>");
} else{
  document.write("false" + "<br>");
}
/* 5--------------------------------------------------------------*/
  
/* --- assignments  /  comparison  ---  */  
var value1="Jennifer"; var value2="jennifer"      //upper & lower case not the same

if (value1==value2){
  document.write("true" + "<br>");
} else{
  document.write("false" + "<br>");
} 
}