import React from 'react';
import { Container, Typography } from '@mui/material';
import MainNavigation from './components/Main/MainNavigation';
import MainContainer from './components/Main/MainContainer';
import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import PagamentoDao from './dao/PagamentoDao';
import GuardadoDao from './dao/GuardadoDao';

function App() {
  const [value, setValue] = useState('pagamentos');

  const handlerChange = (event, newValue) => {
    setValue(newValue);
  };

  const dao = new PagamentoDao();
  const [pagamentos, setPagamentos] = useState(dao.findAll());
  
  const handlerCheckbox = (id) => {
    pagamentos[id].isPago = !pagamentos[id].isPago;
    setPagamentos([...pagamentos]);
  }

  const guardadoDao = new GuardadoDao();
  const [guardados, setGuardados] = useState(guardadoDao.findAll());

  return (
    <Container 
        component={'article'} 
        maxWidth='xl'
      >
        <CssBaseline />
        
        <Typography 
          variant='h3'
          component='h1'
          align='center'
          gutterBottom
        >
          Easy Money
        </Typography>
        
        <MainContainer
          value={value}
          pagamentos={pagamentos}
          setPagamentos={setPagamentos}
          handlerCheckbox={handlerCheckbox}

          guardados={guardados}
          setGuardados={setGuardados}
          guardadoDao={guardadoDao}
        />
        
        <div className='footer'>
          <MainNavigation
            value={value}
            handlerChange={handlerChange}
          />
        </div>

      </Container>
  );
}

export default App;
