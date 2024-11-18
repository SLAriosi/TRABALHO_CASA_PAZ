import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // Adicionado useNavigate
import { FaHome, FaNewspaper, FaCalendarAlt, FaImages, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        // Verifica se o auth_token está presente no localStorage
        if (!localStorage.getItem('auth_token')) {
            // Redireciona para a página de login se o token não estiver presente
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove o token de autenticação
        localStorage.removeItem('auth_token');
        
        // Redireciona o usuário para a página de login
        navigate('/');
    };

    const users = [
        { name: 'User 1', email: 'user1@example.com' },
        { name: 'User 2', email: 'user2@example.com' },
        // Adicione mais usuários conforme necessário
    ];

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <div className="dashboard-logo">
                    <img src="/logo.png" alt="Logo Casa da Paz" />
                </div>
                <nav className="dashboard-nav">
                    <NavLink to="/dashboard/home" className="nav-link">
                        <FaHome className="nav-icon" /> Início
                    </NavLink>
                    <NavLink to="/dashboard/events" className="nav-link">
                        <FaCalendarAlt className="nav-icon" /> Eventos
                    </NavLink>
                    <NavLink to="/dashboard/gallery" className="nav-link">
                        <FaImages className="nav-icon" /> Galeria
                    </NavLink>
                    <NavLink to="/dashboard/administradores" className="nav-link">
                        <FaNewspaper className="nav-icon" /> Administradores
                    </NavLink>
                </nav>
                <button className="dashboard-logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="logout-icon" /> Sair da Conta
                </button>
            </aside>
            <main className="dashboard-content">
                <Outlet /> {/* Este componente vai renderizar as páginas filhas do Dashboard */}
            </main>
        </div>
    );
};

export default Dashboard;
