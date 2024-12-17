import ProdutoCard from './ProdutoCard';

const Main = () => {
  let produtos = [
    {
      endereco:
        'https://images.unsplash.com/photo-1550470789-fc6193fd518c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
      titulo: 'Torra do Café',
      descricao: 'Torra do café feita artesanalmente na propriedade.',
    },
    {
      endereco:
        'https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Frutos Especiais',
      descricao: 'Frutos sem adição defensivo.',
    },
    {
      endereco:
        'https://images.unsplash.com/photo-1721616888194-bcd66011ce77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      titulo: 'Máquina tecnológicas',
      descricao: 'Máquinas que usam tecnologia para melhorar o processo.',
    },
  ];

  return (
    <main>
      <Container fluid className="mt-2">
        <Row>
          {produtos.map(({ endereco, titulo, descricao }, indice) => {
            return (
              <ProdutoCard
                key={indice}
                endereco={endereco}
                titulo={titulo}
                descricao={descricao}
              />
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
