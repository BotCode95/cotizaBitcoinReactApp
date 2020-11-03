import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled'


const Label = styled.label `

font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    color: #FFF;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
           <Label>{label}</Label> 
            <Select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value="">-Seleccione-</option>
                {opciones.map(opcion => (
                    <option 
                        key={opcion.codigo}
                        value={opcion.codigo}
                        >{opcion.nombre}
                    </option>
                ))}
            </Select>
        </Fragment>
    );

    //retornar state, interfaz(Seleccionar), y funcion que modifica el state 
    return [state, Seleccionar, setState];
}

export default useMoneda;