import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import Linha from '../../components/linha'



export default function Ex1() {
    const [input, setInput] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [criar, setCriar] = useState([]);
  
  
  
    const limpar = (index) => {
      const apagar= criar.filter((_,i) => i !== index)
      setCriar(apagar)
  
    }
  
    const Imc = () => {
      const alturaNum = parseFloat(altura); 
      const pesoNum = parseFloat(peso);     
  
      if (!alturaNum || !pesoNum) {
        setInput('Por favor, insira valores válidos');
        return;
      }
  
      let imc = pesoNum / (alturaNum ** 2); 
  
      if (imc < 18.5) {
        setInput('abaixo do peso');
      } else if (imc >= 18.5 && imc < 25) {
        setInput('normal');
      } else if (imc >= 25 && imc < 30) {
        setInput('acima do peso ');
      } else if (imc >= 30 && imc < 35) {
        setInput('obesidade grau I');
      } else if (imc >= 35 && imc <= 40) {
        setInput('obesidade grau II');
      }else if(imc > 40){
        setInput('obesidade grau III')
      }
  
    
      setCriar([...criar, {peso: peso, altura: altura, situ: input }]);
    };

    let linha = [
        
        {
            'cor_linha': 'laranja', 
            'numEX':'05',
            'titulo':'media'
         }
]
    

    

    return (
        <main>
       <div className="mae">
       
        <Header/>
        
        {linha.map((item, index) => (

<div className="row1">
    <Linha
        key={index}
      
        titulo={item.titulo}
        numEX={item.numEX}
        cor_linha={item.cor_linha}

    />
</div>



))}
<div className="tit">
<p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>
</div>  
        <div className="App">
          <div className='bloco1'>
              <div className='info'>
                  
                <div className='ip'>
                    <p>Peso</p>
                   <input type="text"  value={peso}  onChange={(e) => setPeso(e.target.value)}  placeholder="0"
                  />
                </div >
                  <div className='ip'>
                    <p>Altura</p>
                    <input type="text"value={altura}onChange={(e) => setAltura(e.target.value)} placeholder="0"
                  />
                </div>
              </div>
                  <button onClick={Imc}>Executar  </button>
          </div>
              <div className='card2'>
              {criar.map((item, index) => (
                    <div className="calc  " key={index}>
            
                      <p>Altura: {item.altura} | Peso: {item.peso} | {item.situ  }</p>            
                      <button onClick={e => limpar(index)}>apagar</button>
                    </div>
              
                  ))}
              </div>
                  
            </div>
            </div>
            </main>
            
          );
        }
    