import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import ChatText from 'components/molecules/ChatText';
import InputForm from 'components/molecules/InputForm';
import Modal from 'components/organisms/Modal';

import { sendChat } from 'actions/chat-action';

const socket = io('https://flopi-react-chat.herokuapp.com/');

class Chat extends Component {
    componentWillMount() {
        socket.on('serverMessage', message => this.props.sendChat(message));
    }

    render() {
        return (
            <div className="chat">
                <Modal />
                <ChatText messages={ this.props.chat } />
                <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
                    <InputForm display="row"/>
                </form>
            </div>
        )
    }

    onSubmit(values) {
        socket.emit('message', { ...values, name: "GenericName"});
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