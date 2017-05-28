import React, { Component } from 'react';
import { Field } from 'redux-form';

import './style.scss';

const InputChat = (props) => {
    return (
        <div className="input-chat">
            <Field key="message" name="message" component="input" autoComplete="off" maxLength="130" />
            <button type="submit">Send</button>
        </div>
    )
}

export default InputChat;