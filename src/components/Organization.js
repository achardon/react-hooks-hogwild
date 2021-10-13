import React, { useCallback, useState } from 'react';

function Organization( {onFilterGreased, greaseFilter, setGreaseFilter} ) {
    
    // const [greaseFilter, setGreaseFilter] = useState('False')

    function handleClick() {
        //debugger;
        console.log('filter')
        setGreaseFilter(!greaseFilter)
        onFilterGreased()
    }

    
    return (
        <>
            <button
            onClick={handleClick}
            >
                {greaseFilter? 'Show Only Greased Hogs' : 'Show All Hogs'}
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Organization;