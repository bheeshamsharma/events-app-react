import { useState } from "react"
import BookList from "./BookList"

function App(){
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        let updatebooks = [
            ...books,{id : 123,title}
        ]
        setBooks(updatebooks)
    }

    const deleteBookById = (bookId) =>{
        let updatebooks = books.filter( (book) => {
            book.id != bookId
        })
        setBooks(updatebooks)
    }

    const editBookById = (updatedBook) =>{
        let updatedBooks = books.filter( (book) => {
            if(book.id == updatedBook.id){
                return {...book,title}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (<div className="app">
        <h1>Reading List</h1>
        <BookList onEdit = {editBookById} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>)
   
}

export default App