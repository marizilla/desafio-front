import React, { useState, useEffect } from "react";
import { getVaga } from "../../../services/api";
import "../check/VerVaga.css";
import logo from "../../../img/cabeçalho.svg";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link, useParams } from "react-router-dom";

const VerVaga = () => {
  const [vaga, setVaga] = useState([]);
  useEffect(() => {
    getVagas();
  }, []);

  const { vagaId } = useParams();

  const getVagas = async () => {
    const response = await getVaga(vagaId);
    console.log(response);
    setVaga(response.data);
  };

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("VAGA.pdf");
  };

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
      <section className="check-vaga mt-3" id="pdf">
        <div className="cabecalho">
          <img src={logo} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="">
              <ul className="list">
                <li className="list-group-item list-group-item-action">
                  • Cargo : <span className="fw-bold">{vaga.tituloCargo}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Salário : <span className="fw-bold">{vaga.salario}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Atividades :{" "}
                  <span className="fw-bold">{vaga.atividadesCargo}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Benefícios :{" "}
                  <span className="fw-bold">{vaga.beneficiosCargo}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Etapas da Seleção :{" "}
                  <span className="fw-bold">{vaga.etapasProcesso}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Habilidades Necessárias :{" "}
                  <span className="fw-bold">{vaga.habilidadesCargo}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  • Experiência :{" "}
                  <span className="fw-bold">{vaga.experiencia}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="check-buttons">
        <button
          type="button"
          className="btn btn-primary fw-bold"
          onClick={createPDF}
        >
          Download
        </button>
        <Link to={`/vagas/list`} className="btn btn-warning fw-bold">
          Voltar
        </Link>
      </div>
    </React.Fragment>
  );
};

export default VerVaga;
