const name = "nmeasfdsfszsasxzef"
const age ='23'

// console.log(name+age)

const com =name+age
// string interpretation method `` symbol
console.log(`my name is ${name} and age is a ${age}`)


// another method to make string 
const name_1 =new String("dcjsifhishfoso")
console.log(name_1)

console.log(name_1.length)
console.log(name_1.toUpperCase())
//no chane in origional string 
console.log(name_1.indexOf('j'))

const currentDate =new Date();
let year =currentDate.getFullYear();
let month =currentDate.getMonth();
let day =currentDate.getDate();
let hour =currentDate.getHours();
let minute =currentDate.getMinutes();
let second =currentDate.getSeconds();

console.log(currentDate )
// console.log(second)


const arr =[1,3234,2,5]
console.log(arr.join(' '))

// const data = ['Jan', 'March', 'April', 'June'];
// // ,[12,343,234]
// const data_2 = ['Jn', 'arch', 'tu', 'une'];
// // ,[1,43,34]


const d_1 =[1,2,3,4,5];
const d_2 =[23,24,55,57];
const dd = d_1.concat(d_2);
console.log(dd)
 
// another method to  concatinate 
const demon = [...d_1,...d_2];
console.log(demon)


const jsuser ={
    name:"anaa",
    age :24,
    state :"uttrakhand"
}
// two method to access a object 
// 1. console.log(jsuser["name"])
// 2. console.log(jsuser.name)

let dage  =prompt("enter the age : ")
dage = Number.parseInt(dage); // prompt always take string value 

const validation =(dage)=>{
    return dage>=18?true:false 
   
} 
if(dage <0){
    console.log(alert("error please enter the valid age "));
   
}
if(validation(dage)){
    alert("yes, you can proceed")
}
else{
    alert("no, you can't proceed")
 
}

let colorc = prompt("enter the color type")
if (colorc ==="white" || colorc==="black"){
    console.log("valid",colorc)

}
else{
    console.log("valid",colorc)
}
document.body.style.background =colorc

