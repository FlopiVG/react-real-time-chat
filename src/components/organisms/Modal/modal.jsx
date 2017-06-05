import React from 'react';
import styled from 'styled-components';

import BlockDiv from 'components/atoms/BlockDiv';
import InputForm from 'components/molecules/InputForm';

const Wrapper = styled.div`
    background: #f3f3f3;
    position: fixed;
    top: 33%;
    left: 33%;
    padding: 5px;
    border-radius: 5px;
    z-index: 2;
`;

const Modal = (props) => {
    return (
        <div>
            <BlockDiv />
            <Wrapper>
                <InputForm label="Enter a name" display="column"/>
            </Wrapper>
        </div>
    )
};

export default Modal;