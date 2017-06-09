import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import ChatText from 'components/molecules/ChatText';
import InputForm from 'components/molecules/InputForm';
import EnterNameModal from 'components/organisms/EnterNameModal';

import { sendChat } from 'actions/chat-action';


//const socket = io('https://flopi-react-chat.herokuapp.com/');


class Chat extends Component {
    static PropTypes = {
        host: PropTypes.array.isRequired
    }

    componentWillMount() {
        this.socket = io(this.props.host);
        this.socket.on('serverMessage', message => this.props.sendChat(message));
    }

    render() {
        return (
            <div className="chat">
                { !this.props.chat.name && <EnterNameModal /> }
                <ChatText messages={ this.props.chat.messages } />
                <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
                    <InputForm display="row" name="message"/>
                </form>
            </div>
        )
    }

    onSubmit(values) {
        if (this.props.chat.name) {
            this.socket.emit('message', { ...values, name: this.props.chat.name});
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