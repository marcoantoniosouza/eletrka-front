import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Header';
import api from '../../services/api';

import './styles.css'

export default function Home() {
    const [cpf, setCpf] = useState('');
    const [unidades, setUnidades] = useState([]);

    async function buscar(e){
        e.preventDefault();

        const response = await api.get('unidades', { params : { "cpf": cpf } });

        setUnidades(response.data);
    }

    return(
        <div>
            <Header />
                    
            <div className="cpf-conteiner">
                <section className="form">
                    <strong>Buscar unidades de consumo</strong>
                    <form onSubmit={buscar}>
                        <input 
                            placeholder="CPF" 
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}/>

                        <button type="submit">Buscar</button>
                    </form>
                </section>
            </div>

            <ul>
                <div className="unidade-conteiner">
                    {unidades.map(unidade => {
                        return(
                            <Link to={`faturas/${unidade.uc}`} >
                            <li key={unidade.uc}>
                                <strong>Unidade</strong>
                                <p>{unidade.uc}</p>

                                <strong>Endereço</strong>
                                <p>{unidade.endereco}</p>
                            </li>
                            </Link>
                        );
                    })}
                </div>
                <div className="unidade-conteiner">
                <li>
                    <strong>Unidade</strong>
                    <p><Link to={`faturas/123`} >123</Link></p>

                    <strong>Endereço</strong>
                    <p>asdhushdushdu</p>
                </li>
                </div>
            </ul>
        </div>
    );
}