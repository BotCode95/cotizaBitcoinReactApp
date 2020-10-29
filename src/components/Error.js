import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color:#FF3333;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight:bold;
    text-align:center;
    font-family: 'Bebas Neue', cursive;
    border-radius: 25px;

`;

const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
export default Error;