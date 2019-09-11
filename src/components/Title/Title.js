import React, { useState } from 'react';
import logo from '../../media/title/logo.png';
import './title.scss';

function Title(props){

    const [ toggleText, setToggleText ] = useState(false);
    return (
        <div className='title' onAnimationEnd={() => setToggleText(true)}>
            <img src={logo} alt='Fire Emblem: Three Houses'/>

            <div className={`title__text ${toggleText && 'hidden'}`}>
                <h1 className='title__text-header1'>Hello, Professor!</h1>
                <p>Welcome to Fire Emblem: Three Houses.  Below, you will find all the tools required to facilitate and instruct your students.  Choose below to see detailed views of each student and their statistics.</p>
                <p>The adventure begins.  The path you take is yours alone, but there is help for you - if you know where to look</p>
                <p>Good luck, and enjoy the adventure!</p>
                <p style={{alignSelf:"flex-end"}}>- Garreg Mach Monastery</p>
            </div>

        </div>
    );
};

export default Title;
