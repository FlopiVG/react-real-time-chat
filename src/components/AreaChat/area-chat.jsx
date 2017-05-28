import React, { Component } from 'react';

import './style.scss';

class AreaChat extends Component {
    componentDidUpdate(prevProps, prevState){
        const { areaChat } = this.refs;

        areaChat.scrollTop = areaChat.scrollHeight;
    }

    render() {
        return (
            <div className="area-chat" ref="areaChat" scrolling="bottom">
                { this.props.messages.map((chat, index)=> (
                    <p key={ index }>{ chat.message }</p>
                )) }
            </div>
        )
    }
};

export default AreaChat;