let a = 12 ;
let b = 15 ;

function abc(){
    console.log(b)
}
abc()
 
console.log(a)

interface abc{
    name : string,
    age : number,

}

function user (obj : abc){
    obj.age = 24;
    obj.name = "Akash"

}

user({name : "akash",age : 24})
