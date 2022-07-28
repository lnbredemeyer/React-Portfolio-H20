import React from 'react';
import developerImage from '../../assets/leah/LeahPortrait.jpg';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <span>
            <img src={developerImage} style={{ width: "20% "}} alt="portfolio developer" />
            <div>I'm Leah, a photographer, graphic designer, Director of Online Product and Website Management, and future coder. 
                I've spent the past 19 years honing my craft and am still learning something new each day. Outside the office, 
                you'll find me with my husband biking on trails, camping in the wilderness and converting a bus into a tiny home. 
                I graduated with a BA in Journalism from Angelo State University in 2006 with a minor in Graphic Design. I have 
                spent over 15 years working in marketing departments as a Graphic Designer, product photographer, and most recently 
                as a Director of Online Product and Website Management. Currently, I'm learning coding through University of Arizona bootcamp.</div>
            </span>
        </div>
    )
}

export default About;