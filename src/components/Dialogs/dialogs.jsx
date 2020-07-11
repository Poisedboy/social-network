import React from 'react';
import d from './dialogs.module.css';
import Message from './Message/message.jsx';
import DialogItem from './DialogItems/dialog-items.jsx';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../Common/FormsControl/FormsControl.js';
import {required, maxLengthCreator} from './../Utils/Validators/validators.js';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                        validate={[required, maxLength100]}
                        name='newMessageBody' 
                        placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialog = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messages = state.message.map( m => <Message message={m.message} key={m.id} /> );


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                { dialog }
            </div>
            <div className={d.messages}>
                <div>{ messages }</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs;
