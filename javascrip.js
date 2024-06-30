
let car={
    carname:"honda",
    carcolor:"black",
    carprice:2009737
}
console.log(car.carcolor)
for(let x in car){
    console.log(car[x])
    document.write(car[x])
}
let a=5
let b=10
console.log( "the addition of" + a + "and"+ b + "is" + a+b)
let age=50
if(age>18){
console.log("eligible to vote")
document.write("elegible")
}
else{
    console.log("not eligible")
}
var str="spoeixhjjsjsjkshjk"
console.log(str.length)
console.log(str.slice(3,7))
console.log(str.substring(5,9))
console.log(str.substr(3,str.length))
var s=new Array();
s[0]="mathi"
s[1]="deva"

console.log(s[0])
var animals=["tiger","lion","cheetha"]
console.log(animals)
console.log(animals[0])
console.log(animals.sort())
// function
function run()
{
    var animal=["tiger","lion","cheetha"]
    console.log(animal)
}
run()
let muFunction=()=>{
    var animal=["tiger","lion","cheetha"]
    console.log(animal)
}
muFunction()



