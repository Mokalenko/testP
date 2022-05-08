'use strict';
// урок 100
// инкапсуляция

function User(name,age){
  this.name = name;
  let userAge = age; // свойствоб с наружи нет к нему доступа, только с нутри

  this.say = function(){
    console.log(`Name: ${this.name}`);
  };

  this.getAge = function(){
    return userAge;
  };

  this.setAge = function(age){
    if(typeof(age)==="number" && age >0 && age <110){
      userAge = age;
    }else{
      console.log('error!');
    }
  };
}

const ivan = new User('Ivan',27);
console.log(ivan.getAge());
console.log(ivan.setAge(300));
console.log(ivan.setAge(30));
console.log(ivan.getAge());
console.log(ivan.name);
ivan.say();

class User2{
  constructor (name,age){
    this.name = name;
    this._userAge = age; // _ - на начале указываем как не доступным (только по оф стандарту)
  }

  surname = 'Dfdefdf'; // по фвкту можно указать свойство которое не будет менятся
  // может работать только в новых браузерах!

  say(){
    console.log(`Name: ${this.name}`);
  }

//  getAge(){
//     return  this._userAge;
//  }

 get age(){
  return  this._userAge;
}
  // setAge(age){
  //   if(typeof(age)==="number" && age >0 && age <110){
  //     this._userAge = age;
  //   }else{
  //     console.log('error!');
  //   }
  // }

  set age(age){
    if(typeof(age)==="number" && age >0 && age <110){
      this._userAge = age;
    }else{
      console.log('error!');
    }
  }
}