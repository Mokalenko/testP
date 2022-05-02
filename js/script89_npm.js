'use strict';
// урок 89
// npm
// npm install json-server // по умолчнаию локально -g - для глобальной
// npm install json-server  --save-dev - для дев устанавливает
// npm i - берет все с пакедж джейсон и устанавливает
// console.log('ran');
// fetch('dp.json')
//   .then(data => data.json())
//   .then(res => console.log(res));

// generateReturns() - вариант вызова

// const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}