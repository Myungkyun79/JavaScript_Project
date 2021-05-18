var o1 = {name:'mk'};
var o2 = Object.assign({},o1); // o1 의 객체를 복사하여 만듬.
o2.name = 'Lee'
console.log(o2.name);
console.log((o1.name));