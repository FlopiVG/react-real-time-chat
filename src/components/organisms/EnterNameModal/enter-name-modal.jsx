import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import Modal from 'components/molecules/Modal';
import InputForm from 'components/molecules/InputForm';
import { setName } from 'actions/chat-action';

class EnterNameModal extends Component {
    onSubmit(values) {
        this.props.setName(values);
    }

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
                <Modal>
                    <InputForm label="Enter a name" display="column" name="name"/>
                </Modal>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {};
    
    if (!values.name) errors.name = "Mandatory";
    
    return errors; 
}

export default reduxForm({
    form: 'enterName',
    validate
})(
    connect(null, { setName })(EnterNameModal)
);