document.addEventListener('DOMContentLoaded', () => {

  const booksGridDiv = document.querySelector('.books-grid')

  fetch('http://localhost:4567/api/v1/books', {
    method: 'get',
    headers: {'Acces-Control-Allow-Origin': '*'}
  })
    .then((response) => response.json())
    .then((data) => console.log(data))

})