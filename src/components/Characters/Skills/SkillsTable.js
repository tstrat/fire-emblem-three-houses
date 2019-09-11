import React from 'react';
import proficiencyUp from '../../../media/skills/proficiency-up.png';
import proficiencyDown from '../../../media/skills/proficiency-down.png';
import buddingTalent from '../../../media/skills/budding-talent.png';
import sword from '../../../media/skills/sword.png';
import lance from '../../../media/skills/lance.png';
import axe from '../../../media/skills/axe.png';
import bow from '../../../media/skills/bow.png';
import fighting from '../../../media/skills/fighting.png';
import reason from '../../../media/skills/reason.png';
import faith from '../../../media/skills/faith.png';
import authority from '../../../media/skills/authority.png';
import armor from '../../../media/skills/heavy.png';
import riding from '../../../media/skills/riding.png';
import flying from '../../../media/skills/flying.png';
import BuddingTalent from './BuddingTalent';

import './skills.scss'

let skills = ['Sword','Lance', 'Axe', 'Bow', 'Fighting', 'Reason', 'Faith', 'Authority', 'Heavy Armor', 'Riding', 'Flying' ]

function SkillsTable ({strengths, weaknesses, budding_talent}) {
    const topRow = (
        <thead>
            <tr>
                <th className='w'>Skills</th>
                <td><img src={sword} alt='sword'/></td>
                <td><img src={lance} alt='lance'/></td>
                <td><img src={axe} alt='axe'/></td>
                <td><img src={bow} alt='bow'/></td>
                <td><img src={fighting} alt='fighting'/></td>
                <td><img src={reason} alt='reason'/></td>
                <td><img src={faith} alt='faith'/></td>
                <td><img src={authority} alt='authority'/></td>
                <td><img src={armor} alt='heavy armor'/></td>
                <td><img src={riding} alt='riding'/></td>
                <td><img src={flying} alt='flying'/></td>
            </tr>
        </thead>
    )

    const row = skills.map(skill => {

        if (strengths.includes(skill)) {
            return (
                <td key={skill}>
                    <img src={proficiencyUp} alt='proficient'/>
                </td>
            )
        } else if (weaknesses.includes(skill)){
            return (
                <td key={skill}>
                    <img src={proficiencyDown} alt='not proficient'/>
                </td>
            )

        } else if (budding_talent.skill === skill) {
            return (
                <td key={skill}>
                    <img src={buddingTalent} alt='budding talent'/>
                </td>
            )
        } else {
            return <td key={skill}/>

        }
    })
    return (
        <div className='skills'>
            <table className='skills-table'>
                    {topRow}
                    <tbody>
                    <tr>
                        <th>Proficiency</th>
                        {row}
                    </tr>
                    </tbody>
            </table>
            <BuddingTalent icon={budding_talent.skill}{...budding_talent} />
        </div>
    );
};

export default SkillsTable;
