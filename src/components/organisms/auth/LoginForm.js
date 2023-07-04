import styled from 'styled-components';
import useInput from '../../atoms/Input/useInput';
import ConfirmBtnSC from '../../atoms/Button/ConfirmBtnSC';
import TextInputSC from '../../atoms/Input/TextInputSC';
import AlertBox from '../../molecules/modal/AlertBox';
import { useApiPost } from '../../../hooks/useApi';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const LoginFormSC = styled.div`
  width: 320px;
  margin: 80px auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-weight: ${(p) => p.theme.fontWeight.semiBold};
  }

  .button {
    width: 320px;
  }
`;

export default function LoginForm() {
  const { value: emailValue, handleChange: emailChange } = useInput('');
  const { value: pwdValue, handleChange: pwdChange } = useInput('');
  const { isPosting, postData, res, error, setError } =
    useApiPost('/auth/signin');
  const [invalidMsg, setInvalidMsg] = useState('');
  const { onLogin } = useAuth();

  useEffect(() => {
    if (res) {
      onLogin(res.data);
    }
  }, [res]);

  const validate = () => {
    if (emailValue === '') {
      return '이메일을 입력하세요.';
    }

    if (pwdValue === '') {
      return '패스워드를 입력하세요.';
    }
    return '';
  };

  const handleLogin = () => {
    const validResult = validate();
    if (validResult) {
      setInvalidMsg(validResult);
      return;
    }

    postData({
      eid: emailValue,
      pwd: pwdValue,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('엔터키동작');
      handleLogin();
    }
  };

  const handleClose = () => {
    setError(null);
    setInvalidMsg('');
  };

  return (
    <LoginFormSC>
      <h2>이메일 로그인</h2>
      <TextInputSC
        type="text"
        placeholder="이메일"
        value={emailValue}
        onChange={emailChange}
        onKeyDown={handleKeyDown}
      />
      <TextInputSC
        type="password"
        placeholder="Password"
        value={pwdValue}
        onChange={pwdChange}
        onKeyDown={handleKeyDown}
      />
      <ConfirmBtnSC
        className="button"
        onClick={handleLogin}
        disabled={isPosting}
      >
        {isPosting ? '로그인 중...' : '로그인'}
      </ConfirmBtnSC>
      {invalidMsg && (
        <AlertBox
          title="알림"
          btnName="확인"
          close={handleClose}
          message={invalidMsg}
        />
      )}
      {error && (
        <AlertBox
          title="알림"
          btnName="확인"
          close={handleClose}
          message={error && error.errMsg}
        />
      )}
    </LoginFormSC>
  );
}
