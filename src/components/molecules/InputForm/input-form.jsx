import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';

const Wrapper = styled.div`
    display: flex;
    input {
        flex-grow: 1;
    }
`;

const InputForm = (props) => {
    return (
        <div>
            { props.label && <Label>{ props.label }</Label>}
            <Wrapper>
                <Field key="message" name="message" component={ Input } autoComplete="off" maxLength="130" />
                <Button type="submit">Send</Button>
            </Wrapper>
        </div>
    )
}

export default InputForm;