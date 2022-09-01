import React from 'react';
import { Link } from 'react-router-dom';
import './ListVagas.css';

const ListVagas = () => {
  return (
    <React.Fragment>
      <section className="buscar-vaga p-3">
        <div className="container">
          <div className="grid">
            <div className="col">
              <p className="h3 novaVaga-btn">
                <Link to={'/vagas/add'} className='novaVaga'>
                  <i className='fa fa-plus me-2'/>
                  Criar Vaga</Link>
              </p>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form className='row'>
                <div className="col">
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Buscar Vagas'/>
                  </div>
                </div> 
                <div className="col">
                  <div className="mb-2">
                    <input type="submit" className='btn btn-outline-dark' value='Buscar'/>
                  </div>
                </div>               
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="vagas-list">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    {/* <div className="col-md-4">
                      <img src="https://images.vexels.com/media/users/3/197550/isolated/preview/e8295bb54c156b10e1409305d1c8a60d-valentine-cupcake-pink.png" alt="" className='vaga-img'/>
                    </div> */}
                    <div className="col-md-10">
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                          Vaga : <span className='fw-bold'>Balconista</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Salário : <span className='fw-bold'>R$1500,00</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Atividades : <span className='fw-bold'>Atendimento ao público, vendas</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Experiência : <span className='fw-bold'>6 meses a 1 ano</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={`/vagas/check/:vagaId`}className='btn btn-warning my-1'>
                        <i className='fa fa-eye'/>
                      </Link>
                      <Link to={`/vagas/edit/:vagaId`}className='btn btn-primary my-1'>
                        <i className='fa fa-pen'/>
                      </Link>
                      <button className='btn btn-danger my-1'>
                        <i className='fa fa-trash'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ListVagas
