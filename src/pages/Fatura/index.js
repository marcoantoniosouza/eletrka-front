import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Header from '../../Header';
import api from '../../services/api';

export default function Fatura() {
    const [fatura, setFatura] = useState({});

    const params = useParams();
    const uc = params['uc'];
    const ano = params['ano'];
    const mes = params['mes'];

    useEffect(() => {
        api.get(`faturas/${uc}/${ano}/${mes}`).then(response => {setFatura(response.data)});
    }, [uc, ano, mes]);

    return(
        <div>
            <Header />
                    
            <div className="fatura-conteiner">
                <strong>NF</strong>
                <p>{fatura.NF}</p>
                <strong>nome</strong>
                <p>{fatura.nome}</p>
                <strong>logradouro</strong>
                <p>{fatura.logradouro}</p>
                <strong>bairro</strong>
                <p>{fatura.bairro}</p>
                <strong>cep</strong>
                <p>{fatura.cep}</p>
                <strong>cidade</strong>
                <p>{fatura.cidade}</p>
                <strong>uf</strong>
                <p>{fatura.uf}</p>
                <strong>uc</strong>
                <p>{fatura.uc}</p>
                <strong>mes</strong>
                <p>{fatura.mes}</p>
                <strong>periodo</strong>
                <p>{fatura.periodo}</p>
                <strong>consumo</strong>
                <p>{fatura.consumo}</p>
                <strong>vencimento</strong>
                <p>{fatura.vencimento}</p>
                <strong>total</strong>
                <p>{fatura.total}</p>
                <strong>cod_barras</strong>
                <p>{fatura.cod_barras}</p>
                
            </div>
        </div>
    );
}