let obj1 = {}
obj1['name'] = 'vishwa'
obj1['age']=40
obj1['doestraining'] = function(){
    console.log("Does teaching")
}


let obj2={name:"vishwa",age:40,doestraining:function(){
    console.log('Performs training')
}}


console.log(obj1.name)
console.log(obj1.age)
obj1.doestraining()