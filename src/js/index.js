document.addEventListener('DOMContentLoaded', () => {

  const booksGridDiv = document.querySelector('.books-grid')

  fetch('http://localhost:4567/api/v1/books').then(function (response) {
    //The API call was succesfully!
    console.log('succes!', response)
  }).catch(function (err) {
    // There was an error
    console.log('Something went wrong', err)
  })

})