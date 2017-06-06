import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import ChatText from 'components/molecules/ChatText';
import InputForm from 'components/molecules/InputForm';
import Modal from 'containers/EnterNameModal';

import { sendChat } from 'actions/chat-action';

const socket = io('https://flopi-react-chat.herokuapp.com/');


class Chat extends Component {
    componentWillMount() {
        socket.on('serverMessage', message => this.props.sendChat(message));
    }

    render() {
        return (
            <div className="chat">
                { !this.props.chat.name && <Modal /> }
                <ChatText messages={ this.props.chat.messages } />
                <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
                    <InputForm display="row" name="message"/>
                </form>
            </div>
        )
    }

    onSubmit(values) {
        if (this.props.chat.name) {
            socket.emit('message', { ...values, name: this.props.chat.name});
        }
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