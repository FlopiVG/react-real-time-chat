import styled from 'styled-components';

const Button = styled.button`
    background: #4aaaa5;
    border: solid 0 #e3edf4;
    border-radius: 5px;  
    color: #f4f4f4;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
    outline: none;
    padding: 5px;
    width: 128px;
    &:hover {
        background: #429994;
        color: #FFF;
    }
    &:active {
        background: #3b8884;
    }
`;

export default Button;