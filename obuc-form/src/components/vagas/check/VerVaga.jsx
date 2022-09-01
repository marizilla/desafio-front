import React from 'react';
import { Link } from 'react-router-dom'

const VerVaga = () => {
  return (
    <React.Fragment>
      <section className="check-title">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">Vizualizar Vaga</p>
            </div>
          </div>
        </div>
      </section>
      <section className="check-vaga mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <ul className='list-group'>
              <li className='list-group-item list-group-item-action'>
                Cargo : <span className='fw-bold'>Balconista</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Salário : <span className='fw-bold'>R$1500,00</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Atividades : <span className='fw-bold'>Atendimento ao público, vendas</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Benefícios : <span className='fw-bold'>Vale Alimentação/Refeição, Plano de Saúde, Plano Odontológico</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Etapas da Seleção : <span className='fw-bold'>Análise de Currículo, Entrevista, Teste, Contratação</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Habilidades Necessárias : <span className='fw-bold'>Boa comunicação, boa oratória, receptividade</span>
              </li>
              <li className='list-group-item list-group-item-action'>
                Experiência : <span className='fw-bold'>6 meses a 1 ano</span>
              </li>
            </ul>
            </div>
            <div className="row">
              <div className="col">
                <Link to={`/vagas/list`} className='btn btn-warning mt-3 fw-bold'>Voltar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default VerVaga
