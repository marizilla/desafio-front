import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  BrowseRouter as Router,
  Route,
} from "react-router-dom";
import InputMask from "react-input-mask";
import "antd/dist/antd.css";
import { message } from "antd";
import { editVaga, getVaga } from "../../../services/api.js";

const initialValue = {
  tituloCargo: "",
  salario: "",
  atividadesCargo: "",
  beneficiosCargo: "",
  etapasProcesso: "",
  habilidadesCargo: "",
  experienciaID: "",
  beneficiosId: "",
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
    beneficiosId,
  } = vaga;

  const { vagaId } = useParams();

  useEffect(() => {
    loadVagaData();
  }, []);

  const loadVagaData = async () => {
    const response = await getVaga(vagaId);

    setVaga(response.data);

    let listaBeneficiosId = response.data.beneficiosId;
    let checkboxes = document.getElementsByName("beneficios");
    for (var i = 0, n = checkboxes.length; i < n; i++) {
      if (listaBeneficiosId.includes(String(i + 1)))
        checkboxes[i].checked = true;
    }
  };

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setVaga({ ...vaga, [e.target.name]: e.target.value });
    console.log(vaga);
  };

  const handleChange = (e) => {
    let selected = [];
    let selectedId = [];

    const checado = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checado).map((x) => x.value);
    selectedId = Array.from(checado).map((x) => x.id);
    let beneficios = selected.toString();
    setVaga({
      ...vaga,
      ["beneficiosCargo"]: beneficios,
      ["beneficiosId"]: selectedId,
    });
    //console.log(selectedId);
    //console.log(selected);
    //console.log(beneficios);
  };

  const editVagaDetails = async () => {
    message.success("Registro atualizado com sucesso");
    await editVaga(vagaId, vaga);
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
              <form method="patch">
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
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="1"
                        onChange={handleChange}
                        value="Vale Transporte (02 passagens por dia)"
                      />
                      <span>Vale Transporte (02 passagens por dia)</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="2"
                        onChange={handleChange}
                        value="Vale Transporte (04 passagens por dia)e"
                      />
                      <span>Vale Transporte (04 passagens por dia)</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="3"
                        onChange={handleChange}
                        value="Vale Alimentação/Refeição"
                      />
                      <span>Vale Alimentação/Refeição</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="4"
                        onChange={handleChange}
                        value="Cesta Básica"
                      />
                      <span>Cesta Básica</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="5"
                        onChange={handleChange}
                        value="Plano de Saúde"
                      />
                      <span>Plano de Saúde</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="6"
                        onChange={handleChange}
                        value="Plano Odontológico"
                      />
                      <span>Plano Odontológico</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="7"
                        onChange={handleChange}
                        value="Comissão"
                      />
                      <span>Comissão</span>
                    </div>
                    <div className="">
                      <input
                        type="checkbox"
                        name="beneficios"
                        id="8"
                        onChange={handleChange}
                        value="Premiações"
                      />
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
                  <div className="">
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
