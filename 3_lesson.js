function test(msg){
    if(test.language === "Magyar"){
        console.log("uzenet: ",msg);
        return;
    }
    console.log("message: ",msg);
}

let test2 = test;


test("first");
test.language = "Magyar";
test2("second");

function invokeCounterScope(){

    let count = 0;
    
    invokeCounter = function(){
        count += 1;
        console.log(count);
    }


    return invokeCounter;
}

const invokeCounterObject = invokeCounterScope();

invokeCounterObject();
invokeCounterObject();
invokeCounterObject();

function forEach(array, callback){
    for (let index = 0; index < array.length; index+=1) {
        const element = array[index];
        callback(element);
    }
}

const map = function(array,callback){
    const mappedArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        mappedArray.push(callback(element));
    }

    return mappedArray;
}

let testArray=["Asd","fgh","jkl","Qwe","rtz","uio","Yxc","vbn"]
let complexTestArray=[
    {name: "Gandalf",age:200,skill:["Maiar","Mage staff"]},
    {name: "Fingolfin",age:1500,skill:["Royal","Eldar"]},
    {name: "Manwe",age: NaN, skill:["Valar"]}
]

forEach(testArray, console.log);
forEach(complexTestArray, (person)=>{
    console.log(person.name)
});

forEach(map(complexTestArray,(person)=>{
    if(person.name.indexOf("Manwe")>-1){
        person.name += " the allmighty";
    }
    return person;
}),(person)=>{
    console.log(person.name)
});

complexTestArray.map((person)=>{
    if(person.name.indexOf("Manwe")>-1){
        person.name += " lord of Winds";
    }
    return person;
}).forEach((person)=>{
    console.log(person.name);
});

console.log(
    complexTestArray
    .map((person)=> person.age)
    .reduce((sum,age)=>{
    return sum += age || 0;
},0));

console.log(
    complexTestArray
    .filter(person => person.name.indexOf("Fingolfin")>-1)
    .map(person=> {
        person.name.replace("Fingolfin","Nolofinwe");
        return person;
    })
);

const varTest = function(){
    var arrayOfFunctions = [];
    for (var index = 0; index < 10; index++) {
        arrayOfFunctions.push(function(index){
            return ()=>{
                console.log(index);
            }
        }(index));
        arrayOfFunctions.push(()=>{
            console.log(index);
        })
    }

    for (let index2 = 0; index2 < arrayOfFunctions.length; index2++) {
        arrayOfFunctions[index2]();
    }
}

varTest();

