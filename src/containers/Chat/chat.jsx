import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import io from 'socket.io-client';


import AreaChat from 'components/AreaChat';
import InputChat from 'components/InputChat';

import { sendChat } from 'actions/chat-action';

const socket = io('http://localhost:3000/');

class Chat extends Component {
    componentWillMount() {
        socket.on('serverMessage', message => this.props.sendChat(message));
    }

    render() {
        return (
            <div className="chat">
                <AreaChat messages={ this.props.chat } />
                <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
                    <InputChat />
                </form>
            </div>
        )
    }

    onSubmit(values) {        
        socket.emit('message', values);
    }
}

const validate = (values) => {
    const errors = {};
    
    if (!values.message) errors.message = "Mandatory";
    
    return errors; 
}

const mapStateToProps = ({ chat }) => {
    return { chat };
}

export default reduxForm({
    form: 'ChatForm',
    validate,
    onSubmitSuccess: (result, dispatch) => dispatch(reset("ChatForm"))
})(
    connect(mapStateToProps, { sendChat })(Chat)
);