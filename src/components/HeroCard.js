import React from 'react';
import "./HeroCard.scss"

const HeroCard = () => {
    return (
        <div className="HeroCard">
            <h1>Canada - Central Asia Connections</h1>
            <p>We faciliate, organize, and promote mutually beneficial business relationships between Canadian and Central Asian companies.</p>
            <button onClick={() => {
                const element = document.getElementById("about");
                element.scrollIntoView();
            }}>FIND OUT MORE</button>
        </div>
    );
};

export default HeroCard;