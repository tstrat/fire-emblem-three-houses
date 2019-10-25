import React, { useState } from 'react';
import './character-select.scss';
import Character from '../Characters/Character';

function CharacterSelect (props) {
    const [selected, setSelected] = useState('edleguard')


    const characters = [
        [ 'byleth-m', 'byleth-f'],
        [
            'edleguard', 'hubert', 'dorothea', 'ferdinand', 'bernadetta', 'caspar', 'petra', 'linhardt'
        ],
        [
            'claude', 'hilda', 'lorentz', 'raphael', 'lysithea', 'ignace', 'marianne', 'leonie'
        ],
        [
            'dimitri', 'doudou', 'felix', 'mercedes', 'ashe', 'annette', 'sylvain', 'ingrid'
        ],
    ]

    const blackEaglesBg = require(`../../media/banners/black-eagles-bg.jpg`)
    const blueLionsBg = require(`../../media/banners/blue-lions-bg.jpg`)
    const goldenDeerBg = require(`../../media/banners/golden-deer-bg.jpg`)

    const portraits = characters.map((house, i) => {
        let background = '';
        switch (i) {
            case 1:
                background = blackEaglesBg;
                break;
            case 2:
                background = goldenDeerBg;
                break;
            case 3:
                background = blueLionsBg;
                break;
            case 4:
            default:
                background = blackEaglesBg;
        }
        return <div key={i} className='character-select__house'>{house.map(name => (
            <img key={name}
                className={`character-select__house__character ${selected === name ? 'selected': ''}`}
                style={{background: `url(${background})`}}
                src={`https://res.cloudinary.com/travis-images/image/upload/t_400x400 limit/v1568761841/fire-emblem/${name}.png`} alt={`${name}`}
                onClick={() => setSelected(name)}
            />
        ))}</div>
    })

    return (
        <div className='character-select'>
            {portraits}
            <Character character={selected}/>
        </div>
    );
};

export default CharacterSelect;
