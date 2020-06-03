import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Header from '../../Header';
import api from '../../services/api';

export default function Unidades() {

    const [faturas, setFaturas] = useState([]);
    const params = useParams();
    const uc = params['uc'];

    useEffect(() => {
        api.get(`faturas/${uc}`).then(response => {setFaturas(response.data)});
    }, [uc]);

    //console.log(params['uc']);

    return(
        <div>
            <Header />
                    
            <div className="faturas-conteiner">
                <div className="fatura-conteiner">
                    <ul>
                        {faturas.map(fatura => {
                            return(
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
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}