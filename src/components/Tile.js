import React, {useState} from 'react';
import Details from './Details';

function Tile( {hog} ) {
    
    const {name, specialty, greased, image, weight} = hog
    //console.log(hog['highest medal achieved'])
    
    const [isClicked, setIsClicked] = useState('false')

    function handleClick() {
        setIsClicked(!isClicked)
    }

    return (
        <div
        className = 'ui eight wide column'
        onClick={handleClick}
        >
            <h2>{name}</h2>
            <img 
            src={image} 
            alt={name}
            width='300'
            ></img>
            {!isClicked ?
            <Details 
            specialty={specialty}
            weight={weight} 
            greased={greased}
            medal={hog['highest medal achieved']}
            />
            :null }
        </div>
    )
}

export default Tile;