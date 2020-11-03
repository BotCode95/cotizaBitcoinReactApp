import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import Error from '../components/Error'
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    color: #FFF;
    border-radius: 10px;
    width:100%;
    border:none;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor:pointer;

    }
`;

const Formulario = ({setMoneda,setCripto}) => {

    //state de listado criptomonedas
    const [Listadocripto, setListadoCripto] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [ 
        { codigo: 'USD', nombre: 'Dolar EEUU'},
        { codigo: 'ARS', nombre:'Pesos Argentinos'},
        { codigo: 'EUR', nombre:'Euro'},
        { codigo: 'GBP', nombre:'Libra Esterlina'},
        { codigo: 'MXN', nombre:'Pesos Mexicanos'},
    ]
    //useMoneda
    const [moneda, SelectMonedas] = useMoneda('Selecciona una moneda', '', MONEDAS);

    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige la Criptomoneda', '', Listadocripto);

    //ejecutar llamado a la API

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await axios.get(url);

            setListadoCripto(resultado.data.Data);
        }
        consultarAPI();
    },[])

    const cotizarMoneda = (e) => {
        e.preventDefault();

        
        if(moneda === '' && criptomoneda === ''){
            setError(true);
            return;
        }

        //enviar datos al component principal
        setError(false);
        setMoneda(moneda)
        setCripto(criptomoneda)
    }
    return (  
        <form
            onSubmit={cotizarMoneda}
        >   
        {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <SelectMonedas/>
            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
        
    );
}
 
export default Formulario;