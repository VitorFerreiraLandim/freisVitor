import { useState } from "react";
import Header from '../../components/header'
import Linha from '../../components/linha'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Ex6() {
    const [nota1, setNota1] = useState('') 
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('') 
    const [total, setTotal] = useState('')

    function Calc() {
    
        
        const calculo = ((nota2 * nota3)/3600).toFixed(2);
        setTotal(calculo);
    }

    const linha = [
        {
            cor_linha: 'azul', 
            numEX: '06',
            titulo: 'leitura de livro'
        }
    ];

    return (
        <main>
            <Header />
            <div className="linha-container">
                {linha.map((item, index) => (
                    <div className="row1" key={index}>
                        <Linha
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}
                        />
                    </div>
                ))}
            </div>
            <div className="tit">
                <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
            </div>
            <div className="bloco">
                <div className="input-group">
                    <p htmlFor="bookName">Nome do livro</p>
                    <input
                        id="bookName"
                        type="text"
                        value={nota1}
                        onChange={e => setNota1(e.target.value)}
                        placeholder="Digite aqui"
                    />
                </div>
                <div className="input-group2">
                    <p htmlFor="pageCount">Quantidade de páginas</p>
                    <input
                        id="pageCount"
                        type="number"
                        value={nota2}
                        onChange={e => setNota2(e.target.value)}
                        placeholder="Digite aqui"
                    />
                </div>
                <div className="input-group3">
                    <p htmlFor="timePerPage">Tempo em segundos por página</p>
                    <input
                        id="timePerPage"
                        type="number"
                        value={nota3}
                        onChange={e => setNota3(e.target.value)}
                        placeholder="Digite aqui"
                    />
                </div>
                <button onClick={Calc}>EXECUTAR</button>
                
            </div>
            <p className="p">Você lerá {nota1} em {total} horas</p>
        </main>
    );
}