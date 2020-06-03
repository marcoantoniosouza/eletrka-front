import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import Header from '../Header';
import api from '../../services/api';

import './styles.css'

export default function Faturas() {

    const [faturas, setFaturas] = useState([]);
    const params = useParams();
    const uc = params['uc'];

    useEffect(() => {
        api.get(`faturas/${uc}`).then(response => {setFaturas(response.data)});
    }, [uc]);

    return(
        <div>
            <Header />
                    
            <ul className="faturas-conteiner">
                {faturas.map(fatura => {
                    const status = fatura.status === 'Pago' ? "fatura-conteiner alert alert-success" : " fatura-conteiner alert alert-warning"
                    return(
                        <div className={status}>
                            <Link to={`${fatura.uc}/${fatura.ano}/${fatura.mes}`} >
                                <li key={fatura.mes_ano}>
                                    <strong>Mês Referencia</strong>
                                    <p>{fatura.mes}/{fatura.ano}</p>
                                    <strong>Vencimento</strong>
                                    <p>{fatura.vencimento}</p>
                                    <strong>Valor</strong>
                                    <p>{fatura.valor}</p>
                                    <strong>Status</strong>
                                    <p>{fatura.status}</p>
                                </li>
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </div>
            
    );
}