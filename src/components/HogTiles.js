import React from 'react';
import Tile from './Tile';

function HogTiles( {hogs} ) {

    console.log(hogs)

    return(
        <div
        className = "ui grid container"
        >
            {hogs.map(hog => {
                return <Tile 
                key={hog.name} 
                hog={hog}
                />
            })
        }
        </div>
    )
}

export default HogTiles;