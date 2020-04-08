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


// Create an event listener for the DOM after it loads
document.addEventListener('DOMContentLoaded', () => {
  // place all your code here
})

// Step 2: Create function that will run the fetch request function
function fetchData() {

}

// Step 3: Write the fetch request

function fetchData() {
  fetch('http://localhost3000/quotes'); // is this the correct link?
}

// Step 4: Convert fetch promise into JSON

function fetchData() {
  fetch('http://localhost:3000/quotes')
  .then( response => response.json() )
}

// Step 5: Send JSON data into a callback function

function fetchData() {
  fetch('http://localhost:3000/quotes')
  .then( response => response.json() )
  .then( data => some_function(data))
}