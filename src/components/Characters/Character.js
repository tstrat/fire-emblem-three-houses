import React from 'react';
import axios from 'axios';
import './character.scss';
import SkillsTable from './Skills/SkillsTable';
import CrestContainer from './Crest/CrestContainer';
import Stats from './Stats/Stats';
import Gifts from './Gifts/Gifts';

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
        const { proficiencies }= stats;

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

                    <Stats {...stats}/>
                    <div className='character__details-items'></div>

                    <Gifts {...gifts}/>
                </section>

            </div>
        );
    }
};

export default Character;

function InfoItemBox({label, value}) {
    return (
        <tr className='character__info-box'>
            <th>{label}:</th><td>{value}</td>
        </tr>
    )
}