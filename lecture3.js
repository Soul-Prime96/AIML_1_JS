// var count=0;
// document.write("Starting loop");
// while(count<10){

// }
// incomplete...



// var age=10;
// if(age>=18){
//     document.write("<b> You are an adult.</b>");
// }
// else{
//     document.write("<b>You are a minor.</b>")
// }



// var grade='A';
// document.write("Entering Switch block</br></br>");
// switch(grade){
//     case 'A':document.write("Good job </br>");
//     break;

//     case 'B':document.write("Pretty Job</br>");
//     break;

//     case 'C':document.write("Passed</br>");
//     break;

//     case 'D':document.write("Not so good </br>");
//     break;

//     case 'F':document.write("Failed</br>");
//     break;

//     default:document.write("Unknown grade</br>");
// }
// document.write("</br>Exiting switch block");



// function myFunction(){
//     alert("Hello World!");
// }


// function sayHello(name,age){
//     document.write(name+"is"+age+"year old.");
// }



// var res=mull(12,30);
// function mull(x,y){
//     return x*y;
// }
// document.write(res);



// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add2(102,20);

// var add3=(a,b)=>console.log(a+b);
// add3(30,20);


// var person={
//     name:"John Mac",
//     age:"30",
//     isMarried:true,
//     address:{
//         street:"Vinay nagar",
//         flatNo:201
//     }
// };
// // console.log(person);
// console.log(person["age"]);

var per=new Object();
per.name="Krishnakant";
per.age=32;
per.isMarried=true;
per.address={};
per.address.street="Vijay nagar";
per['address']['flatNo']=33;
// per.address.flatNo=33;
// console.log(per["isMarried"])
console.log(per);
