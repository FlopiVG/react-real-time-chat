import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Button from 'components/atoms/button';
import Input from 'components/atoms/input';

const Wrapper = styled.div`
    display: flex;
    input {
        flex-grow: 1;
    }
`;

const InputForm = (props) => {
    return (
        <Wrapper>
            <Field key="message" name="message" component={ Input } autoComplete="off" maxLength="130" />
            <Button type="submit">Send</Button>
        </Wrapper>
    )
}

export default InputForm;