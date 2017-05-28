import React, { Component } from 'react';

import './style.scss';

class InputChat extends Component {
    render() {
        return (
            <form className="input-chat">
                <input type="text" />
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default InputChat;