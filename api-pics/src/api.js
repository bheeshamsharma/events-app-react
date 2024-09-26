import axios from "axios";

const searchImages = async (searchTerm) => {
   const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization : 'Client-ID NwvS0Em19IF3B7mK0OyFi0gMpw7bvxky-Sw8I2dehKk'
        },
        params : {
            query : searchTerm
        }
    })

    //console.log(response)
    return response.data.results
}

export default searchImages