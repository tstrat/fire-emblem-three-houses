import React, { useState } from 'react';
import Crest from './Crest';

function CrestContainer({crests}) {
    const [selected, setSelected] = useState(crests[0])
    if (!crests.length) {
        return (
            <div className='crests'>
                <h3>This character has no crests</h3>
            </div>
        )
    }

    const crestsMap = crests.map(crest => (
        <Crest select={() => setSelected(crest)} selected={selected.name === crest.name} {...crest} key={crest.name}/>
    ))

    const selectedInfo = selected ?
        (<div className='crest-display__info'>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <h3>{selected.abilities}</h3>
        </div>)
        : null
    return (
        <div className='crest-display'>
            <div className='crest-container'>
                {crestsMap}
            </div>
            {selectedInfo}
        </div>

    );
};

export default CrestContainer;
