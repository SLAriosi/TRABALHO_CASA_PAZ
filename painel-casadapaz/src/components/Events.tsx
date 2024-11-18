// src/components/Events.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'; // Importando ícones

type Event = {
    id: number; // Adicionando id ao tipo Event
    nome: string;
    date: string;
    descricao: string; // Adicionando descrição ao tipo Event
};

const URL_API = process.env.REACT_APP_API_URL;

const Events: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [nome, setNome] = useState(''); // Estado para nome do evento
    const [date, setDate] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para mensagens de erro
    const [descricao, setDescricao] = useState(''); // Estado para descrição do evento

    useEffect(() => {
        axios.get(`${URL_API}/eventos`)
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    console.log('===========');
    console.log(events);
    console.log('===========');

    const addEvent = () => {
        if (nome.trim() === '' || descricao.trim() === '') {
            setError('Por favor, preencha todos os campos.'); // Mensagem de erro se campos vazios
            return;
        }

        axios.post(`${URL_API}/eventos`, { nome, date, descricao })
            .then(response => {
                setEvents([...events, response.data]);
                setNome('');
                setDate('');
                setDescricao(''); // Limpa a descrição após adicionar
                setError(null); // Limpa o erro após adicionar
            })
            .catch(error => {
                console.error('There was an error creating the event!', error);
                setError('Erro ao criar evento. Tente novamente.');
            });
    };

    const removeEvent = (index: number) => {
        const eventToRemove = events[index];
        axios.delete(`${URL_API}/eventos/${eventToRemove.id}`)
            .then(() => {
                setEvents(events.filter((_, i) => i !== index));
            })
            .catch(error => {
                console.error('There was an error deleting the event!', error);
                setError('Erro ao deletar evento. Tente novamente.');
            });
    };

    return (
        <div className="events-container">
            <h2>Gerenciamento de Eventos</h2>
            {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nome do Evento"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descrição do Evento"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button onClick={addEvent}>
                    <FaPlus /> Adicionar Evento
                </button>
            </div>
            <ul className="events-list">
                {events.map((event, index) => (
                    <li className="events-list-item" key={index}>
                        <div className="event-card">
                            <h3 className="event-title">{event.nome}</h3>
                            <p className="event-description" style={{ marginBottom: '20px' }}>{event.descricao}</p>
                            <button
                                className="remove-button"
                                onClick={() => removeEvent(index)}
                                style={{ backgroundColor: '#cc0000' }}
                            >
                                <FaTrashAlt /> Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
