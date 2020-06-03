import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
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
            <div className="header-text">Buscar unidades de consumo</div>
            
            <div className="cpf-conteiner">
                <section className="form">
                    <form onSubmit={buscar}>
                        <div className="input-group mb-3">
                            <input 
                                type="text"
                                className="form-control"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                placeholder="CPF" 
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                            
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            <ul className="unidades-conteiner">
                {unidades.map(unidade => {
                    return(
                        <div className="unidade-conteiner alert alert-secondary">
                            <Link to={`faturas/${unidade.uc}`} >
                            <li key={unidade.uc}>
                                <strong>UC: {unidade.uc}</strong>
                                <p>{unidade.endereco}</p>
                            </li>
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}