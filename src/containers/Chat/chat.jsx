import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import AreaChat from 'components/AreaChat';
import InputChat from 'components/InputChat';

import { sendChat } from 'actions/chat-action';

class Chat extends Component {
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
        this.props.sendChat(values);
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