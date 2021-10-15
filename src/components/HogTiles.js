import React from 'react';
import Tile from './Tile';

function HogTiles( {hogs, hiddenPigs, setHiddenPigs} ) {

    // const [hiddenPigs, setHiddenPigs] = useState([])

    function handleHiddenPigs(name) {
        //console.log(name)
        setHiddenPigs([...hiddenPigs, name])
    }

    //console.log(hiddenPigs)

    //new variable that returns only the pigs whose name does NOT match any of the pig names in the hiddenPigs array
    let unHiddenHogs = hogs.filter((hog) => (!hiddenPigs.find(x => x === hog.name)))

    //console.log(unHiddenHogs, 'unhidden hogs')

    return(
        <div
        className = "ui grid container"
        >
            {unHiddenHogs.map(hog => <Tile key={hog.name} hog={hog} handleHiddenPigs={handleHiddenPigs}/>)}
        </div>
    )
}

export default HogTiles;