import React, { useState } from 'react';
import './gifts.scss'
function Gifts({like, dislike, lost_items}) {

    const [ view, setView ] = useState(0);

    let items = view === 0 ? like : view === 1 ? dislike : lost_items;
    let itemList = items.map((item, i) =>
        <li key={i}>{item}</li>
    )

    return (
        <div className='gifts'>
            <h1>Items</h1>
            <div>
                <h1 className={view === 0 ? 'active' : ''} onClick={() => setView(0)}>Liked</h1>
                <h1 className={view === 1 ? 'active' : ''} onClick={() => setView(1)}>Disliked</h1>
                <h1 className={view === 2 ? 'active' : ''} onClick={() => setView(2)}>Lost</h1>
            </div>
            <ul>{itemList}</ul>
        </div>
    );
};

export default Gifts;
