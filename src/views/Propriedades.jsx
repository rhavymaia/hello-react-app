import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import PropriedadesTable from '../components/PropriedadesTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';

const Propriedades = () => {
  let [propriedades, setPropriedades] = useState([]);

  let [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  let [inputs, setInputs] = useState({
    nome: '',
    estado: '',
    cidade: '',
    latitude: '',
    longitude: '',
  });

  const handleChange = (event) => {
    let name = event.target.name;
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //POST, PUT e DELETE
    fetch('http://localhost:3000/propriedades', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.ok) {
          //Adicionar na lista.
          setPropriedades([...propriedades, inputs]);
          //Fechar o modal.
          setShow(!show);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <div>Propriedades</div>

      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip
              tag="span"
              wrapperClass="d-inline-block"
              title="Adicionar Propriedade"
            >
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      {/* Clientes */}
      <PropriedadesTable
        propriedades={propriedades}
        setPropriedades={setPropriedades}
      ></PropriedadesTable>

      <Modal
        show={show}
        onHide={handleShow}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sítio Aruara"
                id="nome"
                name="nome"
                value={inputs.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                id="estado"
                name="estado"
                value={inputs.estado}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                id="cidade"
                name="cidade"
                value={inputs.cidade}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="text"
                placeholder="12345.6789"
                id="latitude"
                name="latitude"
                value={inputs.latitude}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                placeholder="12345.6789"
                id="longitude"
                name="longitude"
                value={inputs.longitude}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Propriedades;
