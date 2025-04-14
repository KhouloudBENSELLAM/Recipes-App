import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Log avant de supprimer l'élément pour s'assurer qu'il est là
        console.log('Avant la déconnexion:', localStorage.getItem('Mokeuser'));

        // Supprimer les données utilisateur de localStorage
        localStorage.removeItem('Mokeuser');

        
        console.log('Après la déconnexion:', localStorage.getItem('Mokeuser'));

        // Rediriger vers la page d'accueil
        navigate('/');
    };

    return (
        <button 
            onClick={handleLogout} 
            style={{
                position: 'sticky', 
                top: '1',
                right: '150px',
                padding: '10px 15px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                // cursor: 'pointer',
                fontSize: '20px'
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
