import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/agendamento.scss'
import Agendamento from './Agendamento.tsx'
import EnviarDados from './EnviarDados.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Agendamento />} />
        <Route path='enviar' element={<EnviarDados />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)