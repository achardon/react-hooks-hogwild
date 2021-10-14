import React from 'react';
import Tile from './Tile';

function HogTiles( {hogs} ) {

    return(
        <div
        className = "ui grid container"
        >
            {hogs.map(hog => <Tile key={hog.name} hog={hog}/>)}
        </div>
    )
}

export default HogTiles;