import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import { addVaga, getVagaByTitle, refreshPage } from "../../../services/api";
import "./AddVaga.css";

const initialValue = {
  tituloCargo: "",
  salario: "",
  atividadesCargo: "",
  beneficiosCargo: "",
  etapasProcesso: "",
  habilidadesCargo: "",
  experiencia: "",
  beneficiosId: "",
};

const AddVaga = () => {
  const [vagas, setVagas] = useState(initialValue);
  const {
    tituloCargo,
    salario,
    atividadesCargo,
    beneficiosCargo,
    etapasProcesso,
    habilidadesCargo,
    experiencia,
    beneficiosId,
    id,
  } = vagas;

  const onValueChange = (e) => {
    setVagas({ ...vagas, [e.target.name]: e.target.value });
    console.log(vagas);
  };

  const addVagaDetails = async () => {
    console.log(vagas);
    if (
      tituloCargo &&
      salario &&
      atividadesCargo &&
      beneficiosCargo &&
      etapasProcesso &&
      habilidadesCargo &&
      experiencia != null
    ) {
      await addVaga(vagas);
      await message.success("Registro criado com sucesso");

      setTimeout(() => {
        refreshPage();
      }, 2000);

      refreshPage();
    } else {
      message.error("Preencha todos os campos");
    }
  };

  const handleChange = (e) => {
    let selected = [];
    let selectedId = [];

    const checado = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checado).map((x) => x.value);
    selectedId = Array.from(checado).map((x) => x.id);
    let beneficios = selected.toString();
    setVagas({
      ...vagas,
      ["beneficiosCargo"]: beneficios,
      ["beneficiosId"]: selectedId,
    });
    //console.log(selectedId);
    //console.log(selected);
    //console.log(beneficios);
  };

  const formataSalario = (e) => {
    if (!e.target.value.includes("R$")) {
      let j = salario.replace(/[\D]+/g, "");

      let valorFormatado = Number(j).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      console.log(valorFormatado);

      setVagas({ ...vagas, ["salario"]: valorFormatado });
      return valorFormatado;
    } else {
      return null;
    }
  };

  const loadVagaData = async (e) => {
    if (e.target.value != null) {
      const response = await getVagaByTitle(vagas.tituloCargo);

      if (response.data[0] != null) {
        let listaBeneficiosId = response.data[0].beneficiosId;
        //console.log(listaBeneficiosId);
        if (listaBeneficiosId != null) {
          let checkboxes = document.getElementsByName("beneficios");
          for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (listaBeneficiosId.includes(String(i + 1)))
              checkboxes[i].checked = true;
          }
        }
        delete response.data[0].id;
        setVagas(response.data[0]);
      }
      console.log(response.data);
    }
  };

  return (
    <React.Fragment>
      <section className="add-vaga">
        <div className="container-vaga">
          <div className="modal-title">
            <h2 className="title">Nova Vaga</h2>
            <Link to={`/vagas/list`}>
              <i className="fa-solid fa-home" />
            </Link>
          </div>
          <div className="modal-card">
            <div className="card-wrapper">
              <form method="post">
                <div className="top">
                  <div className="tituloVaga">
                    <label htmlFor="">Título da vaga</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex.Balconista"
                      onChange={(e) => onValueChange(e)}
                      name="tituloCargo"
                      onBlur={(e) => loadVagaData(e)}
                      value={tituloCargo}
                    />
                  </div>
                  <div className="salario">
                    <label htmlFor="">Salário</label>
                    <input
                      inputMode="numeric"
                      type="text"
                      className="form-control"
                      placeholder="R$"
                      onChange={(e) => {
                        onValueChange(e);
                      }}
                      onBlur={(e) => {
                        formataSalario(e);
                      }}
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
                        value="Vale Transporte (04 passagens por dia)"
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
                    <div className="bottom-side">
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
                          <option value="Sem experiência">
                            Sem experiência
                          </option>
                          <option value="6 meses a 1 ano">
                            6 meses a 1 ano
                          </option>
                          <option value="1 a 2 anos">1 a 2 anos</option>
                          <option value="Mais de 2 anos">Mais de 2 anos</option>
                        </select>
                      </div>
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
                <Link
                  to={`/vagas/add`}
                  className="saveBtn"
                  onClick={() => addVagaDetails()}
                >
                  Salvar
                </Link>
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

export default AddVaga;
