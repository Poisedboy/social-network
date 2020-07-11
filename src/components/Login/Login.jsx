import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from './../Common/FormsControl/FormsControl';
import { required,  } from './../Utils/Validators/validators';
import { connect } from "react-redux";
import { login } from './../../Redux/auth-reducer.js';
import { Redirect } from 'react-router-dom';
// import e from './../Common/FormsControl/FormsControl.module.css';

const LoginForm =  (props, error) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Email'} 
                        component={Input} validate={[required]} />
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} 
                        component={Input} validate={[required]}
                        type={'password'} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} 
                        component={Input} validate={[required]} />Remember me
            </div>
            {/* { error && <div className={e.formSummaryError}>
                {error}
            </div>} */}
            <div>
                <button>Log in </button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth 
});

export default connect(mapStateToProps, {login})(Login);