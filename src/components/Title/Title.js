import React from 'react';
import logo from '../../media/logo.png';
import './title.scss';

function Title(props){
    return (
        <div className='title'>
            <img src={logo} alt='Fire Emblem: Three Houses'/>
            <div className='title--text'>
            <h1 className='title--text--header1'>Hello, Professor!</h1>
            <p>Welcome to Fire Emblem: Three Houses.  Below, you will find all the tools required to facilitate and instruct your students.  Choose below to see detailed views of each student and their statistics.</p>
            <p>The adventure begins.  The path you take is yours alone, but there is help for you - if you know where to look</p>
            <p>Good luck, and enjoy the adventure!</p>
            <p style={{alignSelf:"flex-end"}}>- Garreg Mach Monastery</p>
            </div>
        </div>
    );
};

export default Title;
