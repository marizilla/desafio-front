import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask";
import { addVaga } from '../../../services/api';
import './AddVaga.css'


const initialValue = {
  tituloCargo: "",
  salario: "",
  atividadesCargo: "",
  beneficiosCargo: "",
  etapasProcesso: "",
  habilidadesCargo: "",
  experienciaID: "",
}

const AddVaga = () => {

  const [vagas, setVagas] = useState(initialValue);
    const {
      tituloCargo,
      salario,
      atividadesCargo,
      // beneficiosCargo,
      etapasProcesso,
      habilidadesCargo,
      // experienciaID
    } = vagas;

  const [listaBeneficios, setListaBeneficios] = useState({beneficios:[], response:[]})
  
    const history = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setVagas({...vagas, [e.target.name]: e.target.value});
       console.log(vagas);
    }

    const addVagaDetails = async () =>{
       await addVaga(vagas);
       //history.push('/vagas/list');
    }

    const handleChange = (e) => {
      const {value, checked} = e.target;
      const {beneficios} = listaBeneficios;
      console.log(beneficios)  
      if(checked){
        
        setListaBeneficios({
          beneficios: [...beneficios, value],
          response: [...beneficios, value]          
        });      
      } else {
        setListaBeneficios({
          beneficios: beneficios.filter((e) => e !== value),
          response: beneficios.filter((e) => e !== value)
        });     
      }
    };

  return (
    <React.Fragment>
      <section className="add-vaga">
        <div className="container-vaga">
        <div className='modal-title'>
              <h2 className="title">Nova Vaga</h2>
              <Link to={`/vagas/list`}><i className='fa-solid fa-circle-xmark'/></Link>
            </div>
          <div className="modal-card">           
            <div className="card-wrapper">
              <form action="." method='post'>
                <div className='top'>
                  <div className="tituloVaga">
                    <label htmlFor="">Título da vaga</label>
                    <input type="text" className='form-control' placeholder='Ex.Balconista'
                    onChange={(e) => onValueChange(e)} name="tituloCargo" value={tituloCargo}
                    />
                  </div>
                  <div className="salario">
                    <label htmlFor="">Salário</label>
                    <InputMask mask="R$ 9999,99" className='form-control' placeholder='R$'
                    onChange={(e) => onValueChange(e)} name="salario" value={salario}
                    />
                  </div>
                </div>
                <label htmlFor="">Benefícios</label>
                <div className="checkbox">
                  <div className="left">
                    <div className=""><input type="checkbox" name="beneficios" id="1" onChange={handleChange} value="Vale Transporte (02 passagens por dia)"/><span>Vale Transporte (02 passagens por dia)</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="2" onChange={handleChange} value="Vale Transporte (04 passagens por dia)e"/><span>Vale Transporte (04 passagens por dia)</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="3" onChange={handleChange} value="Vale Alimentação/Refeição"/><span>Vale Alimentação/Refeição</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="4" onChange={handleChange} value="Cesta Básica"/><span>Cesta Básica</span></div>
                  </div>
                  <div className="right">
                    <div className=""><input type="checkbox" name="beneficios" id="5" onChange={handleChange} value="Plano de Saúde"/><span>Plano de Saúde</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="6" onChange={handleChange} value="Plano Odontológico"/><span>Plano Odontológico</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="7" onChange={handleChange} value="Comissão"/><span>Comissão</span></div>
                    <div className=""><input type="checkbox" name="beneficios" id="8" onChange={handleChange} value="Premiações"/><span>Premiações</span></div>
                  </div>
                </div>
                <div className='bottom'>
                  <div className="atividades">
                      <label htmlFor="">Atividades a serem exercidas</label>
                      <input type="text" className='form-control' placeholder=''
                      onChange={(e) => onValueChange(e)} name="atividadesCargo" value={atividadesCargo}
                      />
                  </div>
                  <div className='flex'>
                    <div className="habilidades">
                        <label htmlFor="">Habilidades necessárias</label>
                        <input type="text" className='form-control' placeholder=''
                        onChange={(e) => onValueChange(e)} name="habilidadesCargo" value={habilidadesCargo}
                        />
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
                      <input type="text" className='form-control' placeholder=''
                      onChange={(e) => onValueChange(e)} name="etapasProcesso" value={etapasProcesso}
                      />
                  </div>
                </div>
                <Link to={`/vagas/list`} className='saveBtn' onClick={() => addVagaDetails()}>Salvar</Link>
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
