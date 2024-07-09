import { useState } from 'react';
import axios from 'axios';
import './assets/styles/agendamento.scss'

const EnviarDados = () => {
    const [serviceData] = useState({
        "title": "Agendamento de reunião com coordenador",
        "icon": "FaCalendar",
        "img": "https://live.staticflickr.com/65535/53846515469_1c5eb5bd29_b.jpg",
        "tagArea": "Acadêmica",
        "rate": "4,7",
        "tempo": "2 dias úteis",
        "route": "/service/agendamento"
    });

    const enviarDados = () => {
        axios.post('http://localhost:5000/services', serviceData)
            .then(response => console.log('Serviço registrado:', response.data))
            .catch(error => console.error('Erro ao registrar serviço:', error));
    };
    return (
        <div className='enviarDados-container'>
            <button
                onClick={enviarDados}
            >
                Enviar dados para o back-end
            </button>
        </div>
    )
}

export default EnviarDados
