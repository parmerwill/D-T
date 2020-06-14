'use strict'

//#1
let DateString=Date()
let DateObject=new Date()
console.log('#1 DateString: '+DateString)
console.log('#1 DateObject: '+DateObject)

let i = 123;
console.log('#2 Convert number to string: '+i.toString())

let n = '123';
console.log('#3 Convert string to number: '+parseInt(n))


let myBool=true,myUndefined,myNum=123,myString='abc',myNan=parseInt(myString)

let arr=[myBool,myUndefined,myNum,myString,myNan]

console.log('#4 '+myNan)

arr.forEach(function(val,i){   

  console.log('#4 '+typeof val)  
});

let Add2numbers=(a,b)=>{
  console.log(`#5 Add two numbers: ${a}+${b}=${a+b}`)
}

Add2numbers(2,3)

let RunIfBothTrue=(a,b)=>{
  if (a==true && b==true)
  {console.log(`#6 RunIfBothTrue: ${a} and ${b} are both true`)}
}

RunIfBothTrue(1,1)

let RunIfEitherTrue=(a,b)=>{
  if (a==true || b==true)
  {console.log(`#7 RunIfEitherTrue: either ${a} or ${b} is true`)}
}

RunIfEitherTrue(1,)

let RunIfBothFalse=(a,b)=>{
  if (a==false && b==false)
  {console.log(`#8 RunIfBothFalse: both ${a} and ${b} are false`)}
}

RunIfBothFalse(false,false)
