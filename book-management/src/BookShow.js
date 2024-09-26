import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book, onDelete , onEdit}){
    const [showEdit, setShowEdit] = useState(false)

    const setShowEditState = () => {
        setShowEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit book = {book} onEdit={onEdit}/>
    }

    return (<div className="book-show"> 
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={setShowEditState}>Edit</button>

        </div>

     </div>)
}

export default BookShow