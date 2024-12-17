import { Button, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProdutoCard = ({ endereco, titulo, descricao }) => {
  const detalharHandleClick = (event) => {
    console.log('Clicou');
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={endereco} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descricao}</Card.Text>
          <Button onClick={detalharHandleClick} variant="primary">
            Detalhar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

ProdutoCard.propTypes = {
  endereco: PropTypes.string,
  titulo: PropTypes.string,
  descricao: PropTypes.string,
};

export default ProdutoCard;
