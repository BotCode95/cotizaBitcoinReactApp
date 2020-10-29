import React from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda';

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

const Formulario = () => {

    //useMoneda
    const [moneda, SelectMonedas, setState] = useMoneda();

    return (  
        <form>

            <SelectMonedas/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;