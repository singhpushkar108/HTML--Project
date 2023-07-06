async function fetchDataFromAPIs() {
  try {
    const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error('Failed to fetch data from API');
    }
    
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();
    
    const combinedData = {
      todo: todoData,
      post: postData
    };
    
    console.log(combinedData);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

fetchDataFromAPIs();
