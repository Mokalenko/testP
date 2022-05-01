'use strict';
// урок 87
// API 
// DOM API

// fetch()
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

// GET
fetch('http://example.com/movies.json')
  .then((response) => {
    console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });

//   POST // or 'PUT'
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});