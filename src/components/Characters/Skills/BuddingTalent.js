import React from 'react';
import buddingTalent from '../../../media/skills/budding-talent.png';

const BuddingTalent = ({ skill, name, effect }) => {
    return (
        <div className='skills__talent'>
            <div className='skills__talent-flex'>
                <h1>Budding Talent</h1>
                <img src={buddingTalent} alt='budding talent'/>
            </div>
            <div className='skills__talent-flex'>
                <h2>Skill:</h2>
                <h2>{skill}</h2>
            </div>
            <div className='skills__talent-flex'>
                <h2>Name:</h2>
                <h2>{name}</h2>
            </div>
            <div className='skills__talent-flex'>
                <h2>Effect:</h2>
                <h2>{effect}</h2>
            </div>
        </div>
    );
};

export default BuddingTalent;
