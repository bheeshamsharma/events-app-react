function ImageShow({image}){
    return ( <div >
            <img  src={image.urls.small} alt={image.alt_desription}/>
    </div>)
}

export default ImageShow;