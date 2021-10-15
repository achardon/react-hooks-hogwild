import React, {useState} from 'react';
import Details from './Details';

function Tile( {hog, handleHiddenPigs} ) {
    
    const {name, specialty, greased, image, weight} = hog
    //console.log(hog['highest medal achieved'])
    
    const [isClicked, setIsClicked] = useState('false')
    const [isHidden, setIsHidden] = useState('false')

    
    function handleClick() {
        setIsClicked(!isClicked)
    }

    //another state with hidden
    //if statement for showing or hiding
    function handleHidePig() {
        setIsHidden(!isHidden)
        handleHiddenPigs(name)
    }

    return (
        <div
        className = 'ui eight wide column'
        onClick={handleClick}
        >
            <h2>{name}</h2>
            <button
            onClick={handleHidePig}
            >Hide Pig</button>
            <br/>
            <br/>
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