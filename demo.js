var tempFahrenheit=99; 
                   
let TempFahrenheit=99; 
//let TempFahrenheit=99; Redeclaration is not allowed 

const TEMP_CELSIUS = 38;  
const NORMAL_FAHREN = TEMP_CELSIUS*1.8+32;
let celsiusScale=0;
celsiusScale=NORMAL_FAHREN-32*0.5556
					
// document.write() is used to write content onto the HTML page
document.write("Default temperature (var) is: <span class=\"blinking\">"+tempFahrenheit+"</span>"); 
document.write("<br/>"); 
document.write("Default temperature (let) is: <span class=\"blinking\">"+TempFahrenheit+"</span>"); 
document.write("<br/>"); 
document.write("Normal body temperature in Celsius is: <span class=\"blinking\">" + TEMP_CELSIUS +  "</span>"); 
document.write("Normal temperature and calculated temperature in celsius." + celsiusScale +  "</span>");                