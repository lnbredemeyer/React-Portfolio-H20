import React from 'react';
import instagram from '../../assets/icons/instagram-icon.png';
import gitHub from '../../assets/icons/github-icon.png';
import linkedIn from '../../assets/icons/linkedin-icon.png';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        <a href="https://www.instagram.com/lnbredemeyer/"><img src={instagram} style={{ width: "3% "}} alt=""/></a>
        <a href="https://github.com/lnbredemeyer"><img src={gitHub} style={{ width: "3% "}} alt=""/></a>
        <a href="https://www.linkedin.com/in/leah-bredemeyer-b16b6974/"><img src={linkedIn} style={{ width: "3% "}} alt=""/></a>
        <a href="https://www.instagram.com/adventuresoflnr/"><img src={instagram} style={{ width: "3% "}} alt=""/></a>
    </footer>
    )
}

export default Footer;