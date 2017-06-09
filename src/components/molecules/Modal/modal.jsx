import React from 'react';
import styled from 'styled-components';

import BlockDiv from 'components/atoms/BlockDiv';
import InputForm from 'components/molecules/InputForm';

const Wrapper = styled.div`
    background: #f3f3f3;
    position: fixed;
    padding: 5px;
    border-radius: 5px;
    min-width: 400px;
    min-height: 100px;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Modal = (props) => {
    return (
        <div>
            <BlockDiv />
            <Wrapper>
                { props.children }
            </Wrapper>
        </div>
    )
};

export default Modal;