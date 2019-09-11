import React from 'react';
import './crest.scss';

function Crest({name, select, selected}) {
    const title = name.split(' ').pop().toLowerCase();
    const image = require(`../../../media/crests/${title}.png`);

    return (
        <div onClick={select} className={`crest ${selected ? 'selected': ''}`}>
            <img src={image} alt={`${name}`}/>
        </div>
    );
};

export default Crest;
