import axios from "axios";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App(){
    const [images, setImages] = useState([])

    const handleSubmit = async (searchTerm) => {
        const result = await searchImages(searchTerm)
        setImages(result)
    }

    return <div style={{display : "flex", flexDirection : "column", padding: 10}}>
        <SearchBar onSubmit = { handleSubmit }/>
        <ImageList images = { images } />
    </div>
}

export default App;