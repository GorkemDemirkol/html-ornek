// var name="gorkem";
// var age=24;

// function go(name, age){
//     alert(name);
//     alert(age);

// }
// go('Gorkem',24);
// go('mete', 35);
// var name=prompt();
//--------------------------------------------
// function add(first, second) {
//     return first + second

// }
// var sum=add(3,4);
// alert(sum);
//alert(add(3, 4));
//------------------------------------------
// function go(name, age) {
//     if (age < 20) {
//         return name + " küçüktür";
//     } else {
//         return name + " büyüktür";
//     }
// }
// alert(go('görkem', 24));

//recursion javascript

let countDownFrom = (num) => {
    if (num < 0) return;
    console.log(num)
    countDownFrom(num - 1)
}
countDownFrom(10)



// let categories = [
//     { id: 'animals', 'parent': null },
//     { id: 'mammals', 'parent': 'animals' },
//     { id: 'cat', 'parent': 'mammals' },
//     { id: 'dog', 'parent': 'mammals' },
//     { id: 'labrodor', 'parent': 'dog' },
//     { id: 'husky', 'parent': 'dog' },
//     { id: 'persian', 'parent': 'cat' },
//     { id: 'exotic', 'parent': 'cat' }
// ]

// let makeTree = (categories, parent = null) => {
//     let node = {}
//     categories
//         .filter(x => x.parent == parent)
//         .forEach(x => { node[x.id] = makeTree(categories, x.id) })
//     return node;
// }
// console.log(
//     JSON.stringify(
//         makeTree(categories),
//         null,
//         2
//     )
// )
// {
//     animals: {
//         mammals: {
//             dog: {
//                 labrodor: null
//                 husky: null
//             }
//         }
//         mammals: {
//             cat: {
//                 persian: null
//                 exotic: null
//             }
//         }
//     }
// }

function go() {
    console.log(arguments);
};
go('text ');
ConsoleArguments(1, 2, 3, 4, 5, 6, 7)
function ConsoleArguments() {
    for (i = 0; i < arguments.length; i++) {
        console.log("argüman " + (i + 1) + " = " + arguments[i])

    }
}


let meyve = ['banana', 'berry']
meyve.push('armut');
console.log(meyve);
meyve.pop();
console.log(meyve);
let meyveler=['banana','berry'];
meyveler.unshift('apple');
console.log(meyveler);

// var obj=new Object();
var obj={};
obj.name="Ülker Holding";
var ogrenci=new Object();
ogrenci["ad"]="Görkem"
ogrenci["yas"]=24
console.log(ogrenci["ad"]);
console.log(ogrenci["yas"]);
console.log(obj.name);

var student={
    name:"görkem",
    lastname:"demirkol",
    age:24,
    address:{
        street:1486,
        city:"Denizli",
        country:"Türkiye"
    }
};
document.write("<br>"+student.name+"<br>");//document.body.innerHTML=(student.name) yeni Yazılışı
document.write(student.address.street);
var arryName=new Array(3);
arryName[0]=123;
arryName[1]=234;
arryName[2]=345;
arryName[3]=567;
document.write("<br>"+arryName);
console.log(arryName.length);


