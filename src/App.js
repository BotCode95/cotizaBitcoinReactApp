import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner';
import axios from 'axios';

const Contenedor = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 80px;

  /* Linea decorativa inferior */
  &::after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect( () => {
  
    const cotizarCriptomoneda = async () => {
      //evitar la primer ejecucion, si el valor es igual al inicial que no renderize
    if(moneda === '') return;

    // consultar la api para obtener la URL
    const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

    const resultado = await axios.get(url);

    //spinner
    setCargando(true);

    setTimeout( () => {

      setCargando(false);
      setCotizacion(resultado.data.DISPLAY[cripto][moneda]);
    },2000);

     
    }

    cotizarCriptomoneda();
  },[moneda, cripto])


  //mostrar spinner o cotizacion
  const componente = (cargando) ? <Spinner/> : <Cotizacion cotizacion={cotizacion}/>

  return (
    <Contenedor>
      <div>
        <Imagen
            src={imagen}
            alt="imagen crypto"
        />
      </div>
      <div>
          <Heading>Cotiza Criptomonedas</Heading>
          <Formulario
            setMoneda={setMoneda}
            setCripto={setCripto}
          />
          {componente}
      </div>
      
    </Contenedor>
  );
}

export default App;
