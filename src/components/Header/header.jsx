import React from 'react';
import Subtract from '../../../public/img/Header/Subtract.png'; // Utilisez le chemin réel ici
import './Header.css'; // Importation du fichier CSS pour le composant Header

export const Header = () => {
    return (
       <>
            <div className='py-custom'>
                <div className='containerCustome flex'>
                    <div className='w-1/2'>
                        <h1>Discover your favorite place with us</h1>
                        <p>
                            Your journey begins here with our curated travel experiences.
                            Discover new horizons, create lasting memories, and explore 
                            the world with our expertly crafted itineraries.
                        </p>
                    </div>
                    <div className='w-1/2 customeImage'>
                        <img src={Subtract} alt="Subtract image " className=''/>
                    </div>
                </div>
            </div>
       </>
    );
}

export default Header;
