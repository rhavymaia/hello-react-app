import PropriedadesTable from '../components/PropriedadesTable';
import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import usePropriedade from '../context/PropriedadeContext';

const Propriedades = () => {
  let {
    propriedades,
    setPropriedades,
    propriedadesInitialValues,
    propriedadeSchema,
    show,
    handleShow,
  } = usePropriedade();

  const handleSubmit = (values, actions) => {
    //POST, PUT e DELETE
    fetch('http://localhost:3000/propriedades', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          // Toast.
          toast.success('Propriedade cadastrada com sucesso!');
          //Adicionar na lista.
          setPropriedades([...propriedades, inputs]);
          //Fechar o modal.
          setShow(!show);
        }
      })
      .catch((error) => {
        // Toast.
        toast.error('Problema no envio dos dados da propriedade!');
      });

    actions.setSubmitting(false);
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
      <PropriedadesTable></PropriedadesTable>

      <Modal
        show={show}
        onHide={handleShow}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={propriedadesInitialValues}
          validationSchema={propriedadeSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Sítio Aruara"
                      id="nome"
                      name="nome"
                      onChange={handleChange}
                      value={values.nome}
                    />
                    {errors.nome && touched.nome ? (
                      <div>{errors.nome}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      type="text"
                      id="estado"
                      name="estado"
                      onChange={handleChange}
                      value={values.estado}
                    />
                    {errors.estado && touched.estado ? (
                      <div>{errors.estado}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      id="cidade"
                      name="cidade"
                      onChange={handleChange}
                      value={values.cidade}
                    />
                    {errors.cidade && touched.cidade ? (
                      <div>{errors.cidade}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12345.6789"
                      id="latitude"
                      name="latitude"
                      onChange={handleChange}
                      value={values.latitude}
                    />
                    {errors.latitude && touched.latitude ? (
                      <div>{errors.latitude}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12345.6789"
                      id="longitude"
                      name="longitude"
                      onChange={handleChange}
                      value={values.longitude}
                    />
                    {errors.longitude && touched.longitude ? (
                      <div>{errors.longitude}</div>
                    ) : null}
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
            );
          }}
        </Formik>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Propriedades;
