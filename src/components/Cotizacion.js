import React from 'react';
import styled from '@emotion/styled';

const Resultado = styled.div`
    color:#FFF;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight:bold;
    }
`; 

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`;

const Cotizacion = ({cotizacion}) => {
    //objeto vacio ?
    if(Object.keys(cotizacion).length === 0) return null;
    console.log(cotizacion);
    return (  
        <Resultado>
            <Precio>El precio es: <span>{cotizacion.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{cotizacion.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día <span>{cotizacion.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{cotizacion.LASTUPDATE}</span></Info>
        </Resultado>
    );
}
 
export default Cotizacion;