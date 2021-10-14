import React, { useCallback, useState } from 'react';

function Organization( {onFilterGreased, greaseFilter, setGreaseFilter} ) {
    
    // const [greaseFilter, setGreaseFilter] = useState('False')

    // function handleClick() {
    //     // setGreaseFilter(!greaseFilter)  --- move to App
    //     onFilterGreased()
    // }

    
    return (
        <>
            <button
            onClick={onFilterGreased}
            >
                {greaseFilter? 'Show All Hogs' : 'Show Only Greased Hogs' }
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Organization;