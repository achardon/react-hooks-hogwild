import React from 'react';

function Organization( {onFilterGreased, greaseFilter, sortByName, onSortByName, sortByWeight, onSortByWeight} ) {
    
    return (
        <>
            <button
            onClick={onFilterGreased}
            >{greaseFilter? 'Show All Hogs' : 'Show Only Greased Hogs' }
            </button>
            <br/>
            <br/>
            <button
            onClick={onSortByName}
            >Sort by Name - {sortByName? <em>On</em> : <em>Off</em>}
            </button>
            -------
            <button
            onClick={onSortByWeight}
            >Sort by Weight - {sortByWeight? <em>On</em> : <em>Off</em>}
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Organization;

//from lecture 10/14/21
//const [like, setLike] = useState(false)
//setLike((currentLike) => !currentLike)
//in the above line, using the callback form of setState means that currentLike is the ACTUAL value of state in MEMORY, so if you need to pass it into another function BEFORE the re-render, then pass in currentLike INSTEAD of like. Before the re-render 'like' will still be the old state while 'currentLike' will be the new state.