import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import {
  getallVagas,
  deleteVaga,
  refreshPage,
  getVaga,
} from "../../../services/api";
import "./ListVagas.css";

let ListVagas = () => {
  const [vagas, setVagas] = useState([]);
  useEffect(() => {
    getVagas();
  }, []);

  const getVagas = async () => {
    const response = await getallVagas();
    console.log(response.data);
    setVagas(response.data);
  };

  const handleAviso = (e) => {
    setTimeout(() => {
      message.success("Teste");
    }, 2000);
  };

  return (
    <React.Fragment>
      <section className="buscar-vaga">
        <div className="container">
          <div className="grid">
            <div className="col">
              <p className="h3 novaVaga-btn">
                <Link to={"/vagas/add"} className="novaVaga">
                  <i className="fa fa-plus me-2" />
                  Criar Vaga
                </Link>
              </p>
              <p></p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <form className="row">
                <div className="col">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar Vagas"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-outline-dark"
                      value="Buscar"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {vagas.map((data) => (
        <section className="vagas-list">
          <div className="container">
            <div className="wrapper my-3">
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="">
                        <ul className="list-group">
                          <li
                            key={data.id}
                            className="list-group-item list-group-item-action"
                          >
                            Vaga :{" "}
                            <span className="fw-bold">{data.tituloCargo}</span>
                          </li>

                          <li
                            key={data.id}
                            className="list-group-item list-group-item-action"
                          >
                            Salário :{" "}
                            <span className="fw-bold">{data.salario}</span>
                          </li>

                          <li
                            key={data.id}
                            className="list-group-item list-group-item-action"
                          >
                            Atividades :{" "}
                            <span className="fw-bold">
                              {data.atividadesCargo}
                            </span>
                          </li>

                          <li
                            key={data.id}
                            className="list-group-item list-group-item-action"
                          >
                            Experiência :{" "}
                            <span className="fw-bold">{data.experiencia}</span>
                          </li>

                          <div className="col my-1">
                            <Link
                              to={`/vagas/check/${data.id}`}
                              className="btn btn-warning me-2"
                              onClick={() => getVaga(data.id)}
                            >
                              <i className="fa fa-eye" />
                            </Link>

                            <Link
                              to={`/vagas/edit/${data.id}`}
                              className="btn btn-primary me-2"
                            >
                              <i className="fa fa-pen" />
                            </Link>

                            <button
                              className="btn btn-danger my-1"
                              onClick={() => {
                                deleteVaga(data.id);
                                refreshPage();
                              }}
                            >
                              <i className="fa fa-trash" />
                            </button>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};

export default ListVagas;
