let o1 = {name:'Lee', age: 25};
Object.freeze(o1); // 원본 데이터 수정 불가.
o1.name = 'Kim';
console.log(o1);
