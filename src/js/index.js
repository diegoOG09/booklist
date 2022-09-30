document.addEventListener('DOMContentLoaded', () => {

  const booksGridDiv = document.querySelector('.books-grid')

  fetch('http://localhost:4567/api/v1/books', {
    method: 'get',
    headers: { 'Acces-Control-Allow-Origin': '*' }
  })
    .then((response) => { return response.json() })
    .then((data) => {
      console.log(data)
      let books = data

      books.map(function (book) {
        let div = document.createElement('div')
        let title = document.createElement('h2')
        let author = document.createElement('h3')
        let isbn = document.createElement('span')
        let image = document.createElement('img')
        let imageURL = document.createElement('span')
        image.src = book.image

        title.innerHTML = `${book.title}`
        author.innerHTML = `${book.author}`
        isbn.innerHTML = `${book.isbn}`
        image.innerHTML = `${book.image}`

        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(author)
        div.appendChild(isbn)
        booksGridDiv.appendChild(div)
      })
    })

})