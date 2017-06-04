import styled from 'styled-components';

const InnerDivText = styled.p`
    background-color: #666;
    border-bottom: 1px solid grey;
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
    padding: 5px 0px 5px 10px;
    &:nth-child(2n) {
        background-color: #888;
    }
`;

export default InnerDivText;