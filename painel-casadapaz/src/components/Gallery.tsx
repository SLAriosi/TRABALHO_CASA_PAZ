// src/components/Gallery.tsx
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Event {
    id: number;
    nome: string;
}

interface ImageFile {
    id: number;
    url: string;
    // other properties if needed
}

const URL_API = process.env.REACT_APP_API_URL;
const URL_IMAGE = process.env.REACT_APP_IMAGE_URL;

const Gallery: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [fileInputKey, setFileInputKey] = useState<number>(0);
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
    const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
    const navigate = useNavigate();

    // Carrega os eventos do banco de dados
    useEffect(() => {
        axios.get(`${URL_API}/eventos`)
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    // Carrega as imagens salvas do banco de dados
    useEffect(() => {
        axios.get(`${URL_API}/imagem-eventos`)
            .then(response => {
                setImageFiles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the images!', error);
            });
    }, []);

    const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setLoading(true);
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages((prevImages) => [...prevImages, reader.result as string]);
                setLoading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const removeImage = (index: number) => {
        const confirmDelete = window.confirm("Tem certeza que deseja remover esta imagem?");
        if (confirmDelete) {
            const newImages = images.filter((_, i) => i !== index);
            setImages(newImages);
        }
    };

    const saveGallery = () => {
        if (!selectedEvent) {
            alert("Selecione um evento antes de salvar.");
            return;
        }

        if (images.length === 0) {
            alert("Adicione pelo menos uma imagem antes de salvar.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        const fileInput = document.getElementById('image-upload') as HTMLInputElement;
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            formData.append('image', fileInput.files[0]);
        } else {
            alert('Nenhuma imagem selecionada.');
            setLoading(false);
            return;
        }
        formData.append('event_id', selectedEvent.toString());

        fetch(`${URL_API}/imagem-eventos/${selectedEvent}`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                alert(`Galeria salva com sucesso para o evento ID: ${selectedEvent}`);
                navigate('/dashboard/home');
            })
            .catch(error => {
                console.error('There was an error saving the gallery!', error);
                alert('Erro ao salvar a galeria. Tente novamente.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const deleteImageFile = (id: number) => {
        const confirmDelete = window.confirm("Tem certeza que deseja remover esta imagem?");
        if (confirmDelete) {
            axios.delete(`${URL_API}/imagem-eventos/${id}`)
                .then(() => {
                    setImageFiles((prevFiles) => prevFiles.filter(file => file.id !== id));
                    alert('Imagem removida com sucesso.');
                })
                .catch(error => {
                    console.error('There was an error deleting the image!', error);
                    alert('Erro ao remover a imagem. Tente novamente.');
                });
        }
    };

    return (
        <>
            <div className="gallery-container">
                <h2>Galeria de Imagens</h2>
                <div className="event-selection">
                    <label htmlFor="event-select">Escolha um evento:</label>
                    <select
                        id="event-select"
                        value={selectedEvent || ""}
                        onChange={(e) => setSelectedEvent(Number(e.target.value))}
                    >
                        <option value="" disabled>Selecione um evento</option>
                        {events.map((event) => (
                            <option key={event.id} value={event.id}>
                                {event.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div className="image-box" key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} className="gallery-image" />
                            <span className="delete-icon" onClick={() => removeImage(index)} title="Remover Imagem">
                                <FaTrashAlt />
                            </span>
                        </div>
                    ))}
                    <div className="image-box add">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={addImage}
                            style={{ display: 'none' }}
                            id="image-upload"
                            key={fileInputKey}
                        />
                        <label
                            htmlFor="image-upload"
                            className="add-icon"
                            title="Adicionar Imagem"
                            onClick={handleFileClick}
                        >
                            <FaPlus />
                        </label>
                    </div>
                </div>
                {loading && <div className="loading">Carregando...</div>}
                <button className="save-button" onClick={saveGallery}>
                    <FaSave /> Salvar
                </button>
            </div>
            <h1>Imagens Cadastradas</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {imageFiles.map((file, index) => (

                    console.log(file),

                    <div key={index} style={{ width: '150px', height: '300px', margin: '10px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s', cursor: 'pointer', position: 'relative' }} 
                         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

                        <img src={`${URL_IMAGE}${file.url}`} alt={`Imagem cadastrada ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <button onClick={() => deleteImageFile(file.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
