import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import usePropriedade from '../context/PropriedadeContext';

const PropriedadesTable = () => {
  let { propriedades, setPropriedades } = usePropriedade();

  const getPropriedades = (event) => {
    fetch('http://localhost:3000/propriedades')
      .then((response) => response.json())
      .then((data) => {
        setPropriedades([...data]);
      })
      .catch((error) => {
        console.log('Deu erro!');
      });
  };

  useEffect(getPropriedades, []);

  return (
    <>
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Logradouro</th>
            <th scope="col">Estado</th>
            <th scope="col">Cidade</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Opções</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {propriedades.map((propriedades, i) => {
            return (
              <tr key={i}>
                <td>{propriedades.nome}</td>
                <td>{propriedades.logradouro}</td>
                <td>{propriedades.estado}</td>
                <td>{propriedades.cidade}</td>
                <td>{propriedades.latitude}</td>
                <td>{propriedades.longitude}</td>
                <td>
                  <MDBBtn floating tag="a" className="mx-2">
                    <MDBIcon fas icon="pen" />
                  </MDBBtn>

                  <MDBBtn floating tag="a" className="mx-2" color="danger">
                    <MDBIcon fas icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default PropriedadesTable;
