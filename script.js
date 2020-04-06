// Calling APIs using Fetch

// fetch is promise-based. Means you can use async await and .then
// fetch works if you send things with JSON.stringify
// You have to have a method, headers, and body. Body gets JSON.stringify

fetch('https://reqres.in/api/users' {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))