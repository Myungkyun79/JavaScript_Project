// let o1 = {name:'명균', score:[0,1]};
// let o2 = Object.assign({},o1);
//
// o2.score = o2.score.concat();
// o2.score.push(4);
// console.log(o1, o2, o1 === o2, o1.score === o2.score);


// function fn(person) {
//     person.name = "Yu"
// }
//
// let p1 = {name:"Kim"}
// fn(p1)
// console.log(p1);

// function fn2(person2) {
//     person2 = Object.assign({}, person2)
//     person2.name = 'MK';
//     return person2
// }
//
// let p3 = {name:'STO'}
// let p4 = fn2(p3);
// console.log(p3, p4);

function fn3(person3) {
    person3.name = 'Sto';
}

let p5 = {name:'Coffee'};
let p6 = Object.assign({}, p5);
fn3(p6);
console.log(p5, p6);