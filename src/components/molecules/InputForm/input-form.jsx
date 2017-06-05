import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;

const ContainerWrapper = styled.div`
    display: flex;
    ${props => props.display && `flex-direction: ${props.display}`};
`;

const InputForm = (props) => {
    return (
        <ContainerWrapper display={ props.display }> 
            <Wrapper>
                { props.label && <Label>{ props.label }</Label>}
                <Field key="message" name="message" component={ Input } autoComplete="off" maxLength="130" />
            </Wrapper>
            <Button type="submit">Send</Button>
        </ContainerWrapper>
    )
}

export default InputForm;