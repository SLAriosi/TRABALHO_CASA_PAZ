// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaUsers } from 'react-icons/fa'; // Importando ícones
import axios from 'axios';

const URL_API = process.env.REACT_APP_API_URL;

const Home: React.FC = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        axios.get(`${URL_API}/users`)
            .then(response => {
                setUserCount(response.data.length);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">Bem-vindo ao Painel Administrativo</h1>
            <div className="home-stats justify-content-center">
                <div className="home-stat-box">
                    <FaUsers className="stat-icon" />
                    <h2 className="stat-title">Usuários Cadastrados</h2>
                    <p>{userCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
