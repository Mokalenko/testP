'use strict';
// урок 111
// функции генераторы

function* generator(){
  yield 'S';
  yield 'c';
  yield 'i';
  yield 'p';
  yield 't';
}

const str = generator();

console.log(str.value);
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* count(n){
  for (let i =0; i <=n; i++){
    yield i;
  }
}

const conter = count(7);

console.log(conter.next().value);
console.log(conter.next().value);
console.log(conter.next().value);
console.log(conter.next().value);