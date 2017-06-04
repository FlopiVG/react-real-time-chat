import React from 'react';
import styled from 'styled-components';

const Input = ({ input }) => {
    return <StyledInput { ...input } autoComplete = "off" maxLength="128"/>
}

const StyledInput = styled.input`
    font-size: 18px;
    margin: 5px;
    padding: 5px;
    &:focus {
        border: 2px solid #4aaaa5;
    }
`;

export default Input;