// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Administradores from './components/Administradores';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="home" element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="administradores" element={<Administradores />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
