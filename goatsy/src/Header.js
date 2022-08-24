import React from 'react';
import pfp from './Photos/pfp.png';
import Nav from './Nav';
import Navigation from './Nav';

const Header = () => {
    
    

    return (
        <>
            
                <div className="grid-container">
                    <header className="Navigation-section">
                        <div className="backimo">
                            <h1 className="name"> Sean Etienne </h1>
                            <img className="headpic" src={pfp} alt="Myself" />
                        </div>
                       <Navigation />
                        <section className="slogan">
                            <h1> Goatsy, Follow one course until succesful<br /></h1>
                            <h2 className="Focus"> F.O.C.U.S</h2>
                        </section>
                    </header>
                </div>
            
        </>
    );
};

export default Header;