import { MDBBtn, MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import ClientesTable from '../components/ClientesTable';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Propriedades = () => {
  let [incremento, setIncremento] = useState(0);

  const handleClick = (event) => {
    setIncremento(incremento + 1);
  };

  return (
    <>
      <div>Propriedades</div>
      {incremento}
      <Button onClick={handleClick}>Incremente</Button>

      <div>
        <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
        <MDBTooltip
          tag="span"
          wrapperClass="d-inline-block"
          title="Adicionar Propriedade"
        >
          <MDBBtn>+</MDBBtn>
        </MDBTooltip>
      </div>

      {/* Clientes */}
      <ClientesTable></ClientesTable>
    </>
  );
};

export default Propriedades;
