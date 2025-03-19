import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './views/Home';
import Propriedades from './views/Propriedades';
import Sobre from './views/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router';
import Principal from './layouts/Principal';
import { PropriedadeContextProvider } from './context/PropriedadeContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route index element={<Home />} />
          <Route
            path="propriedades"
            element={
              <PropriedadeContextProvider>
                <Propriedades />
              </PropriedadeContextProvider>
            }
          />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
