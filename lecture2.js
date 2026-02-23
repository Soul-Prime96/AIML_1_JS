// var a=10;
// var b=20;
// var lb="<br/>";
// document.write("(a==b)=>");
// result=(a==b);
// document.write(result);
// document.write(lb);
// document.write("(a>b)=>");
// result=(a>b);
// document.write(result);
// document.write(lb);
// document.write("(a< b)=>");
// result=(a<b);
// document.write(result);
// document.write(lb);
// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(lb);



// var count;
// document.write("Starting loop" + "<br/>");
// for(count=0;count<10;count++){
//     document.write("Current Count:"+ count);
//     document.write("<br/>");
// }


const person={
    fname:"Ajay",
    lname:"Singh",
    age:25
};
for(let x in person){
    console.log("person details:"+x+":"+person[x])
}