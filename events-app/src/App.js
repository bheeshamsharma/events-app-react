import { useState } from "react"
import AnimalShow from "./AnimalShow";
import './App.css'


function getRamdomAnimal(){
    const animals = [ "birdImage",
        "catImage",
        "cowImage",
        "dogImage",
        "gatorImage",
        "horseImage"]
    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    let [animal, setAnimal] = useState([])

    const renderAnimals = animal.map((animal,index) => {
        return <AnimalShow key={index} type={animal}/>
    })

    const handleClick = () =>{
                   setAnimal([...animal,getRamdomAnimal()])
                }
    return <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">
                {renderAnimals}
            </div>
        </div>
}

export default App