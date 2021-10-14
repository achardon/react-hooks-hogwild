import React from 'react';

function Details ( {specialty, weight, greased, medal }) {
    return (
        <>
            <p>
                Specialty: {specialty}
                <br/>
                Weight: {weight} pounds
                <br/>
                Greased: {greased? 'Yes' : 'No'}
                <br/>
                Highest Medal Achieved: {medal}
            </p>
        </>
    )
}

export default Details;