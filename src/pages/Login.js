import React from 'react';
import LoginTemplate from '../containers/LoginContainer';
import SelectList from '../components/SelectList';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const [emailClick, setEmailClick] = useState(false);

    const handleClickMethod = () => {
        setEmailClick(true)
    }

    return (
        emailClick === false ? (
            <LoginTemplate>
                <SelectList handleClickMethod={handleClickMethod} />
            </LoginTemplate>
        ) : emailClick === true && location.pathname === "/login" ? (
            <LoginForm />
        ) : emailClick === true && location.pathname === "/signup" ? (
            <SignupForm />
        ) : ''
    );
};

export default Login;