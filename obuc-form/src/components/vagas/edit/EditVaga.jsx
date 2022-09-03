import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  BrowseRouter as Router,
  Route,
} from "react-router-dom";
import InputMask from "react-input-mask";
import { editVaga, getVaga } from "../../../services/api.js";

const initialValue = {
  tituloCargo: "",
  salario: "",
  atividadesCargo: "",
  beneficiosCargo: "",
  etapasProcesso: "",
  habilidadesCargo: "",
  experienciaID: "",
};

const EditVaga = () => {
  const [vaga, setVaga] = useState(initialValue);
  const {
    tituloCargo,
    salario,
    atividadesCargo,
    beneficiosCargo,
    etapasProcesso,
    habilidadesCargo,
    experiencia,
  } = vaga;

  const { vagaId } = useParams();

  useEffect(() => {
    loadVagaData();
  }, []);

  const loadVagaData = async () => {
    const response = await getVaga(vagaId);
    setVaga(response.data);
  };

  const history = useNavigate();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setVaga({ ...vaga, [e.target.name]: e.target.value });
    console.log(vaga);
  };

  const editVagaDetails = async () => {
    await editVaga(vagaId, vaga);
    history.push("/vagas/list");
  };

  return (
    <React.Fragment>
      <section className="add-vaga">
        <div className="container-vaga">
          <div className="modal-title">
            <h2 className="title">Editar Vaga</h2>
            <Link to={`/vagas/list`}>
              <i className="fa-solid fa-circle-xmark" />
            </Link>
          </div>
          <div className="modal-card">
            <div className="col-md-10">
              <form action="">
                <div className="top">
                  <div className="tituloVaga">
                    <label htmlFor="">Título da vaga</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Balconista"
                      onChange={(e) => onValueChange(e)}
                      name="tituloCargo"
                      value={tituloCargo}
                    />
                  </div>
                  <div className="salario">
                    <label htmlFor="">Salário</label>
                    <InputMask
                      mask="R$ 9999,99"
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={(e) => onValueChange(e)}
                      name="salario"
                      value={salario}
                    />
                  </div>
                </div>
                <label htmlFor="">Benefícios</label>
                <div className="checkbox">
                  <div className="left">
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Vale Transporte (02 passagens por dia)</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Vale Transporte (04 passagens por dia)</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Vale Alimentação/Refeição</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Cesta Básica</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Plano de Saúde</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Plano Odontológico</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Comissão</span>
                    </div>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span>Premiações</span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="atividades">
                    <label htmlFor="">Atividades a serem exercidas</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={(e) => onValueChange(e)}
                      name="atividadesCargo"
                      value={atividadesCargo}
                    />
                  </div>
                  <div className="flex">
                    <div className="habilidades">
                      <label htmlFor="">Habilidades necessárias</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        onChange={(e) => onValueChange(e)}
                        name="habilidadesCargo"
                        value={habilidadesCargo}
                      />
                    </div>
                    <div className="experiencia">
                      <label htmlFor="">Experiência necessária</label>
                      <select
                        name="experiencia"
                        id="actvites"
                        className="form-select"
                        onChange={(e) => onValueChange(e)}
                        value={experiencia}
                      >
                        <option value=""></option>
                        <option value="Sem experiência">Sem experiência</option>
                        <option value="6 meses a 1 ano">6 meses a 1 ano</option>
                        <option value="1 a 2 anos">1 a 2 anos</option>
                        <option value="Mais de 2 anos">Mais de 2 anos</option>
                      </select>
                    </div>
                  </div>
                  <div className="etapas">
                    <label htmlFor="">Etapas do processo seletivo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={(e) => onValueChange(e)}
                      name="etapasProcesso"
                      value={etapasProcesso}
                    />
                  </div>
                </div>
                <button className="saveBtn" onClick={() => editVagaDetails()}>
                  Atualizar
                </button>
                <Link to={`/vagas/list`} className="btn btn-dark p-5px ms-2">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditVaga;
