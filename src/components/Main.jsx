import { Container } from 'react-bootstrap';
import PropriedadesCard from './PropriedadesCard';
import ClientesTable from './ClientesTable';

const Main = () => {
  return (
    <main>
      <Container fluid className="mt-2">
        {/* Propriedades */}
        <PropriedadesCard />

        {/* Clientes */}
        <ClientesTable></ClientesTable>
      </Container>
    </main>
  );
};

export default Main;
