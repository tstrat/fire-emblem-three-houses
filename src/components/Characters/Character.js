import React from 'react';
import axios from 'axios';
import './character.scss';
import SkillsTable from './Skills/SkillsTable';
import Crest from './Crest/Crest';
import CrestContainer from './Crest/CrestContainer';

class Character extends React.Component {
    constructor(){
        super();
        this.state= {
            character: {}
        }
    }

    componentDidMount() {
        axios.get('/api/v1/characters').then(res => {
            this.setState({ character: res.data[0]})
        })
    }

    render() {
        const {
            name,
            full_name: fullName,
            age,
            birthday,
            biography,
            nationality,
            house,
            crests,
            noble,
            stats,
            personal_skill: personalSkill,
            gifts
        } = this.state.character


        if (!name) {
            return <></>
        }

        console.log(this.state.character);
        const { growth_rate: growthRate, base, max, proficiencies }= stats;

        // Setting up dynamic background for houses
        let imgurl = house.toLowerCase().split(' ').join('-');
        const background = require(`../../media/banners/${imgurl}-bg.jpg`)
        // ----------------------------------------

        return (
            <div className='character'>
                <section className='character__info'>
                    <h1>{name}</h1>
                    <img
                        className='portrait'
                        src={`https://res.cloudinary.com/travis-images/image/upload/v1565734100/fire-emblem/${name}.png`}
                        alt={`${name} character art`}
                        style={{background: `url(${background})`}}
                    />
                    <table>
                        <tbody>
                        <InfoItemBox label='Full Name' value={fullName}/>
                        <InfoItemBox label='Age' value={age}/>
                        <InfoItemBox label='Birthday' value={birthday}/>
                        <InfoItemBox label='Nationality' value={nationality}/>
                        <InfoItemBox label='House / Faction' value={house}/>
                        </tbody>
                    </table>

                    <CrestContainer crests={crests}/>


                </section>
                <section className='character__details'>
                    <p>{biography}</p>
                    <h1>Starting class: <label className='character__details-class'>{noble? 'Noble': 'Commoner'}</label></h1>


                    <SkillsTable {...proficiencies}/>
                    <div className='character__details-skills-personal'>
                        <div>
                            <h1>Personal Skill: </h1>
                            <h1>{personalSkill.name}</h1>
                        </div>
                        <h2>{personalSkill.effect}</h2>
                    </div>

                    <div className='character__details-stats'>
                        <table>
                            <thead>
                            <tr>
                                <th className='w'>Stats</th>
                                <td>HP</td>
                                <td>STR</td>
                                <td>DEX</td>
                                <td>MAG</td>
                                <td>SPD</td>
                                <td>LUCK</td>
                                <td>DEF</td>
                                <td>RES</td>
                                <td>CHA</td>
                            </tr>
                            </thead>
                            <tbody>
                                <TableRow rowTitle='Growth Rate' rowObject={growthRate}  />
                                <TableRow rowTitle='Base Stats' rowObject={base} />
                                <TableRow rowTitle='Max Stats' rowObject={max} />
                            </tbody>
                        </table>
                    </div>
                    <div className='character__details-items'></div>
                </section>

            </div>
        );
    }
};

export default Character;


// Helper components
function TableRow({rowTitle, rowObject}) {
    let stats = ['hp','str','dex','mag','spd','luck','def','res','cha']
    return (
        <tr>
        <th>{rowTitle}</th>
        { stats.map(stat => <td key={`${rowTitle}-${stat}`}>{rowObject[stat]}</td>) }
        </tr>
    )

}

function InfoItemBox({label, value}) {
    return (
        <tr className='character__info-box'>
            <th>{label}:</th><td>{value}</td>
        </tr>
    )
}
