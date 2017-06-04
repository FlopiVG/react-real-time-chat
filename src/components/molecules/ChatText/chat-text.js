import React from 'react';

import DivText from 'components/atoms/DivText';
import InnerDivText from 'components/atoms/InnerDivText'; 

const ChatText = ({ messages }) => {
    return (
        <DivText>
           { messages.map((chat, index) => 
                <InnerDivText key={ index }><strong>{ chat.name }: </strong>{ chat.message }</InnerDivText>) }
        </DivText>
    )
};

export default ChatText;