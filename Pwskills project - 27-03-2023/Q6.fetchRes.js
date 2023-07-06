
function fetchDataFromAPI() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log('Error:', error.message);
    });
}

 fetchDataFromAPI();