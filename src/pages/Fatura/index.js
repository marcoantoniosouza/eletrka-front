import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { FiChevronLeft, FiPrinter } from 'react-icons/fi';

import Header from '../Header';
import api from '../../services/api';

import './styles.css'

export default function Fatura() {
    const [fatura, setFatura] = useState({});

    const history = useHistory();

    const params = useParams();
    const uc = params['uc'];
    const ano = params['ano'];
    const mes = params['mes'];

    function voltar() {
        history.push(`/faturas/${uc}`)
    }

    useEffect(() => {
        api.get(`faturas/${uc}/${ano}/${mes}`).then(response => {setFatura(response.data)});
    }, [uc, ano, mes]);

    return(
        <div>
        <Header />
        <div className="conteiner alert alert-secondary">


            <button className="back btn btn-info" onClick={voltar}><FiChevronLeft/>Voltar para lista de faturas</button>
            <form action="http://2via.equatorialalagoas.com.br:8081/segundavia/fatura.php" method="post" target="_blank">
                <input hidden type="text" name="uc" id="uc" value={uc}/>
                <input hidden type="text" name="fd" id="fd" value="0"/>
                <input hidden type="text" name="mes_ano" id="mes_ano" value={`${mes}/${ano}`}/>
                <button className="btn btn-info" type="submit"><FiPrinter/>Imprimir Boleto</button>
            </form>

            <div className="fatura-detail-conteiner">
                <div className="fatura-header">
                    <strong className="nome-tag">Nome: </strong>
                    <p className="nome-value">{fatura.nome}</p>
                    <strong className="endereco-tag">Logradouro: </strong>
                    <p className="endereco-value">{fatura.logradouro}</p>
                    <div>
                        <strong>Bairro: </strong>
                        <p>{fatura.bairro}</p>
                    </div>
                    <div>
                        <strong>CEP: </strong>
                        <p>{fatura.cep}</p>
                    </div>
                    <div>
                        <strong>Cidade: </strong>
                        <p>{fatura.cidade}</p>
                    </div>
                    <div>
                        <strong>UF: </strong>
                        <p>{fatura.uf}</p>
                    </div>
                </div>
                <div className="fatura-dados">
                    <strong>Número Nota Fiscal: </strong>
                    <p>{fatura.NF}</p>
                    <strong>Unidade: </strong>
                    <p>{fatura.uc}</p>
                    <strong>Mês: </strong>
                    <p>{fatura.mes}</p>
                    <strong>Período de Consumo: </strong>
                    <p>{fatura.periodo}</p>
                    <strong>Consumo kWh: </strong>
                    <p>{fatura.consumo}</p>
                    <strong>Data de Vencimento: </strong>
                    <p>{fatura.vencimento}</p>
                </div>
                <div className="fatura-total">
                    <strong>Valor Total da Fatura: </strong>
                    <p>{fatura.total}</p>
                </div>
                <div className="fatura-codigo-barras">
                    <strong>Código de Barras</strong>
                    <p>{fatura.cod_barras}</p>
                </div>
                
            </div>
        </div>
        </div>
    );
}