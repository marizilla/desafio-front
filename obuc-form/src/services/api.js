import axios from "axios";

const url = "http://localhost:5000/vagas";

export const getallVagas = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const getVaga = async (id) => {
  return await axios.get(`${url}/${id}`);
};
export const getVagaByTitle = async (title) => {
  return await axios.get(`${url}/?tituloCargo=${title}&_limit=1`);
};
export const searchVaga = async (title) => {
  return await axios.get(`${url}/tituloCargo_like=${title}`);
};

export const addVaga = async (vagas) => {
  return await axios.post(url, vagas);
};

export const editVaga = async (id, vagas) => {
  return await axios.put(`${url}/${id}`, vagas);
};
export function refreshPage() {
  window.location.reload(true);
}

export const deleteVaga = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const verVaga = async (id, vagas) => {
  return await axios.get(`${url}/${id}`, vagas);
};
