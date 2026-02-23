var a = parseFloat(prompt("Enter first number:"));
var b = parseFloat(prompt("Enter second number:"));
var c = parseFloat(prompt("Enter third number:"));
var max=(a>b)?((a>c)?a:c):((b>c)?b:c);
document.write(max);