import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaExclamationTriangle } from 'react-icons/fa';
import './Login.css';

const URL_API = process.env.REACT_APP_API_URL;

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${URL_API}/login`, { email, password });

            if (response.status === 200 && response.data.token) {
                localStorage.setItem('auth_token', response.data.token);
                
                navigate('/dashboard');
            } else {
                setError(response.data.message || 'Login falhou. Verifique suas credenciais.');
            }
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;

            setError(
                error.response?.data?.message || 'Erro de conexão. Tente novamente.'
            );
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-logo-container">
                    <img src="/logo.png" alt="Logo Casa da Paz" className="login-logo" />
                    <h2>Painel Administrativo</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="login-input-group">
                        <label>Email</label>
                        <div className="input-with-icon">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="login-input-group">
                        <label>Senha</label>
                        <div className="input-with-icon">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">
                        Entrar
                    </button>
                    {error && (
                        <div className="login-error-container">
                            <FaExclamationTriangle className="error-icon" />
                            <p className="login-error">{error}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
