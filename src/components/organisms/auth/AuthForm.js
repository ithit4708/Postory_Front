import styled from 'styled-components';
import useInput from '../../atoms/Input/useInput';
import ConfirmBtnSC from '../../atoms/Button/ConfirmBtnSC';
import TextInputSC from '../../atoms/Input/TextInputSC';
import AlertBox from '../../molecules/modal/AlertBox';
import { useApiPost } from '../../../hooks/useApi';
import { useEffect, useState } from 'react';
import EmailAuthTimer from '../../molecules/timer/EmailAuthTimer';
import useAuth from '../../../hooks/useAuth';

const AuthFormSC = styled.div`
  width: 320px;
  margin: 80px auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-weight: ${(p) => p.theme.fontWeight.semiBold};
  }

  p {
    color: ${(p) => p.theme.color.blackA50};
    font-weight: ${(p) => p.theme.fontWeight.medium};
    font-size: 15px;
  }

  p.timer {
  }

  .button {
    width: 320px;
  }
`;

const guideMsg1 =
  "'인증 메일 보내기' 버튼을 눌러주세요. 등록한 이메일 주소로 인증 메일을 보내드릴게요. 받은 메일의 인증번호를 입력해주세요.";
const guideMsg2 =
  "인증 메일을 받지 못했거나, 이메일 주소를 바꾸려면 아래 메일을 다시 입력한 후 '인증 메일 보내기' 버튼을 눌러주세요. 인증 후 서비스 이용 가능합니다.";

export default function AuthForm() {
  const { user, onEmailAuth } = useAuth();
  const {
    value: emailValue,
    handleChange: emailChange,
    setValue: setEmailValue,
  } = useInput('');
  const { value: authNumValue, handleChange: authNumChange } = useInput('');
  const {
    isPosting: emailPosting,
    postData: postForAuthEmail,
    res: emailRes,
    error: emailError,
    setError: setEmailError,
  } = useApiPost('/email/auth');
  const { isPosting, postData, res, error, setError } =
    useApiPost('/email/confirm');
  const [invalidMsg, setInvalidMsg] = useState('');
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [isConfirmBtnDisabled, setIsConfirmBtnDisabled] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // 타이머 초기화를 위한 키 상태 추가

  useEffect(() => {
    if (user) {
      setEmailValue(user.eid);
    }
  }, [user]);

  useEffect(() => {
    if (emailRes) {
      setIsTimerVisible(true);
    }
  }, [emailRes]);

  useEffect(() => {
    if (res) {
      onEmailAuth();
    }
  }, [res]);

  const validateEmail = () => {
    if (emailValue === '') {
      return '이메일을 입력하세요.';
    }
  };

  const validate = () => {
    if (emailValue === '') {
      return '이메일을 입력하세요.';
    }

    if (authNumValue === '') {
      return '인증번호를 입력하세요.';
    }
    return '';
  };

  const sendAuthEmail = () => {
    const validResult = validateEmail();
    if (validResult) {
      setInvalidMsg(validResult);
      return;
    }

    postForAuthEmail({
      eid: emailValue,
    });

    // 타이머 초기화
    setTimerKey((prevKey) => prevKey + 1);
    setIsConfirmBtnDisabled(false);
  };

  const verifyUser = () => {
    const validResult = validate();
    if (validResult) {
      setInvalidMsg(validResult);
      return;
    }

    postData({
      email: emailValue,
      certino: authNumValue,
    });
  };

  const handleClose = () => {
    setError(null);
    setEmailError(null);
    setInvalidMsg('');
  };

  const handleTimerFinish = () => {
    setIsConfirmBtnDisabled(true);
  };

  return (
    <AuthFormSC>
      <h2>이메일 인증</h2>
      <p>{guideMsg1}</p>
      <p>{guideMsg2}</p>
      <TextInputSC
        type="text"
        placeholder="이메일"
        value={emailValue}
        onChange={emailChange}
      />
      <TextInputSC
        type="password"
        placeholder="인증번호"
        value={authNumValue}
        onChange={authNumChange}
      />
      {isTimerVisible && (
        <EmailAuthTimer
          timerKey={timerKey} // 타이머 키 변경으로 초기화
          onFinish={handleTimerFinish}
        />
      )}
      <ConfirmBtnSC
        className="button"
        isPosting={emailPosting}
        onClick={sendAuthEmail}
        disabled={emailPosting}
      >
        {emailPosting ? '인증 메일 전송 중...' : '인증 메일 보내기'}
      </ConfirmBtnSC>
      <ConfirmBtnSC
        className="button"
        isPosting={isPosting}
        onClick={verifyUser}
        disabled={isPosting || isConfirmBtnDisabled}
      >
        {isPosting ? '인증번호 확인 중...' : '인증번호 확인'}
      </ConfirmBtnSC>
      {invalidMsg && (
        <AlertBox title={'알림'} close={handleClose} message={invalidMsg} />
      )}
      {error && (
        <AlertBox
          title={'알림'}
          close={handleClose}
          message={error && error.errMsg}
        />
      )}
    </AuthFormSC>
  );
}
