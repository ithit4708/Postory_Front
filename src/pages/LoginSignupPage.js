import React from 'react';
import LoginSignupBox from '../containers/LoginSignupBox';
import SelectList from '../components/SelectList';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoginSignupPage = () => {
    const location = useLocation();
    const [emailClick, setEmailClick] = useState(false);

    const handleClickMethod = () => {
        setEmailClick(true)
    }

    return (
        emailClick === false ? (
            <LoginSignupBox>
                <SelectList handleClickMethod={handleClickMethod} />
            </LoginSignupBox>
        ) : emailClick === true && location.pathname === "/login" ? (
            <LoginForm />
        ) : emailClick === true && location.pathname === "/signup" ? (
            <SignupForm />
        ) : ''
    );
};

export default LoginSignupPage;