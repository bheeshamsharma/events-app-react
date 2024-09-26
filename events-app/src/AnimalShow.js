import birdImage from './images/bird.svg';
import catImage from './images/cat.svg';
import cowImage from './images/cow.svg';
import dogImage from './images/dog.svg';
import gatorImage from './images/gator.svg';
import horseImage from './images/horse.svg';
import heartImage from './images/heart.svg';
import { useState } from 'react';
import './AnimalShow.css'

let animalImages = {
    birdImage,
    catImage,
    cowImage,
    dogImage,
    gatorImage,
    horseImage
}

function AnimalShow({type}){

    let [countClick, setCountClick] = useState(0)

    const handleClick = () => {
        setCountClick(countClick + 1)
    }

   return <div className="animal-show" onClick={handleClick}>
        <img className="animal" src={animalImages[type]} alt='images' />
        <img className ="heart" src={heartImage} alt='images' style={{
            width : 20 + 20 * countClick +'px'
        }} />
    </div>
}

export default AnimalShow