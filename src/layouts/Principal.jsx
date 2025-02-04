import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Principal = () => {
  return (
    <>
      <Header></Header>
      {/* Irá mudar de acordo com a página */}
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Principal;
