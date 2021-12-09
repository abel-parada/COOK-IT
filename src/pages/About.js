import React from 'react';
import {staff} from './../components/Staff';
import Circle from './../components/Circle';
import "./../styles/about.css"

const About = (props) => {

    return (
        <div>
            <header>
                <h2>Cook IT: Where passion for food and sofware meet</h2>
                <img src='https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt='ingredients'/>
            </header>
            <h1>Meet the CHEFS!</h1>
            <div className="wrapper">
            {staff.map((member) => (
                <Circle 
                key={member.id}
                pic={member.pic}
                name={member.name}
                job={member.job}
                github={member.github}
                />
            ))}
            </div>
            <div className="why"></div>
            <div className="partners"></div>

    </div>
    );
};

export default About;