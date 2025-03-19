import { createContext, useContext, useState } from 'react';
import * as yup from 'yup';

const PropriedadeContext = createContext();

export function PropriedadeContextProvider({ children }) {
  let [propriedades, setPropriedades] = useState([]);

  let [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  let propriedadesInitialValues = {
    nome: '',
    estado: '',
    cidade: '',
    latitude: '',
    longitude: '',
  };

  const propriedadeSchema = yup.object().shape({
    nome: yup.string().trim().min(1).max(10).required(),
    estado: yup.string().trim().min(1).max(20).required(),
    cidade: yup.string().trim().min(1).max(20).required(),
    latitude: yup.number().required(),
    longitude: yup.number().required(),
  });

  return (
    <PropriedadeContext.Provider
      value={{
        propriedades,
        setPropriedades,
        propriedadesInitialValues,
        propriedadeSchema,
        show,
        handleShow,
      }}
    >
      {children}
    </PropriedadeContext.Provider>
  );
}

export default function usePropriedade() {
  return useContext(PropriedadeContext);
}
