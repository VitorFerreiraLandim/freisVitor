import { useState } from 'react'
import './index.scss'
import Header from '../../components/header'
import Linha from '../../components/linha'

export default function Ex5() {
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')
    const [total, setTotal] = useState('')
    const [resultado, setResultado] = useState('')

    const linha = [
        {
            cor_linha: 'roxo ',
            numEX: '05',
            titulo: 'media'
        }
    ]

    function Calc() {
        
        const num1 = parseFloat(nota1) || 0;
        const num2 = parseFloat(nota2) || 0;
        const num3 = parseFloat(nota3) || 0;

        const calculo = (num1 + num2 + num3) / 3;

        if (calculo < 6) {
            setResultado("não")
        } else {
            setResultado("sim")
        }
        setTotal(calculo.toFixed(2)) 
    }

    return (
        <main>
            <Header />
            <div className='mae'>
                {linha.map((item, index) => (
                    <div className="row1" key={index}>
                        <Linha
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}
                        />
                    </div>
                ))}

                <div className='sub'>
                    <h1>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</h1>
                </div>

                <div className='bloco'>
                    <p>Nota 1</p>
                    <input 
                        type="number" 
                        value={nota1} 
                        onChange={e => setNota1(e.target.value)} 
                        placeholder="Digite aqui" 
                    />
                    
                    <p>Nota 2</p>
                    <input 
                        type="number" 
                        value={nota2} 
                        onChange={e => setNota2(e.target.value)} 
                        placeholder="Digite aqui" 
                    />
                    
                    <p>Nota 3</p>
                    <input 
                        type="number" 
                        value={nota3} 
                        onChange={e => setNota3(e.target.value)} 
                        placeholder="Digite aqui" 
                    />
                    
                    <button onClick={Calc}>Executar</button>
                    
                   
                </div>
                <p className='p'>
                        Média é {total} <br />
                        O aluno passou? {resultado}
                    </p>
            </div>
        </main>
    )
}