import React, {Fragment, useState} from 'react';

const useMoneda = () => {

    const [state, setState] = useState('');

    const Seleccionar = () => (
        <Fragment>
           <label>Moneda</label> 
            <select>
                <option value="AR">Peso Argentino</option>
                {/* <option value="MXN">Peso Mexicano</option> */}
            </select>
        </Fragment>
    );

    //retornar state, interfaz(Seleccionar), y funcion que modifica el state 
    return [state, Seleccionar, setState];
}

export default useMoneda;