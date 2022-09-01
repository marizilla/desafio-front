import React from 'react'
import { Link } from 'react-router-dom';
import './AddVaga.css'

const AddVaga = () => {
  return (
    <React.Fragment>
      <section className="add-vaga">
        <div className="container-vaga">
        <div className='modal-title'>
              <h2 className="title">Nova Vaga</h2>
              <Link to={`/vagas/list`}><i className='fa-solid fa-circle-xmark'/></Link>
            </div>
          <div className="modal-card">           
            <div className="col-md-10">
              <form action="">
                <div className='top'>
                  <div className="tituloVaga">
                    <label htmlFor="">Título da vaga</label>
                    <input type="text" className='form-control' placeholder='Ex.Balconista'/>
                  </div>
                  <div className="salario">
                    <label htmlFor="">Salário</label>
                    <input type="text" className='form-control' placeholder='R$'/>
                  </div>
                </div>
                <label htmlFor="">Benefícios</label>
                <div className="checkbox">
                  <div className="left">
                    <div className=""><input type="checkbox" name="" id="" /><span>Vale Transporte (02 passagens por dia)</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Vale Transporte (04 passagens por dia)</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Vale Alimentação/Refeição</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Cesta Básica</span></div>
                  </div>
                  <div className="right">
                    <div className=""><input type="checkbox" name="" id="" /><span>Plano de Saúde</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Plano Odontológico</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Comissão</span></div>
                    <div className=""><input type="checkbox" name="" id="" /><span>Premiações</span></div>
                  </div>
                </div>
                <div className='bottom'>
                  <div className="atividades">
                      <label htmlFor="">Atividades a serem exercidas</label>
                      <input type="text" className='form-control' placeholder=''/>
                  </div>
                  <div className='flex'>
                    <div className="habilidades">
                        <label htmlFor="">Habilidades necessárias</label>
                        <input type="text" className='form-control' placeholder=''/>
                    </div>
                    <div className="experiencia">
                        <label htmlFor="">Experiência necessária</label>
                        <select name="actvites" id="actvites" className='form-select'>
                          <option value="actvite">Sem experiência</option>
                          <option value="actvite">6 meses a 1 ano</option>
                          <option value="actvite">1 a 2 anos</option>
                          <option value="actvite">Mais de 2 anos</option>
                        </select>
                    </div>
                  </div>
                  <div className="etapas">
                      <label htmlFor="">Etapas do processo seletivo</label>
                      <input type="text" className='form-control' placeholder=''/>
                  </div>
                </div>
                <button className='saveBtn'>Salvar</button>
                <Link to={`/vagas/list`} className="btn btn-dark p-5px ms-2">Cancelar</Link>
              </form>              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddVaga
