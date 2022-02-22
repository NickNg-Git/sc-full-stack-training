function add(a,b){
    return a+ b
}

console.log(add(22,33))

//Arrow function can contain parameters
//Single parameter let fun = a => a
//More than one parameter let fun = (a,b)=>a+b
//If only single statement then no need of explicit return
//More than one line the {}
//let fun = (a,b)=>{ console.log(a,b); return a+b}
let  arrowAdd = (a,b)=> a+b
console.log(arrowAdd(22,44))



var hotels = {
      resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
      print: function(delay=1000) {

        setTimeout(function() {
          console.log(this.resorts.join(","))
        }, delay)

      }
    }

    hotels.print()

var hotels = {
      resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
      print: function(delay=1000) {

        setTimeout(
          () => console.log(this.resorts.join(",")),
          delay
        )

      }
    }

    hotels.print()


var p = true
p = false
console.log("Variable p " + p)
const q = true
q = false
console.log("Constant q " + q)