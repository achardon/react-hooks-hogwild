import React from 'react';

function Organization( {onFilterGreased, greaseFilter, onSortByName} ) {
    
    return (
        <>
            <button
            onClick={onFilterGreased}
            >
                {greaseFilter? 'Show All Hogs' : 'Show Only Greased Hogs' }
            </button>
            <br/>
            <br/>
            <button
            onClick={onSortByName}
            >
                Sort by Name
            </button>
            -------
            <button>
                Sort by Weight
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Organization;