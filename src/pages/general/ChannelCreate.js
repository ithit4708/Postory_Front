import { useState } from 'react';
import styled from 'styled-components';
// import SignupInput from '../../molecules/auth/LabeledInput';
// import useForm from './useForm';
// import LabeldCheckBox from '../../atoms/Input/LabeldCheckBox';
// import ConfirmBtnSC from '../../atoms/Button/ConfirmBtnSC';
// import AlertBox from '../../molecules/modal/AlertBox';
// import useAuth from '../../../hooks/useAuth';
// import { useEffect } from 'react';
// import { useApiPost } from '../../hooks/useApi';

const SignupFormSC = styled.div`
  width: 320px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  h2 {
    font-weight: ${(p) => p.theme.fontWeight.semiBold};
  }

  .checkbox {
    margin-top: 10px;
  }

  .button {
    width: 320px;
  }
`;

const requiredFields = {
  email: '이메일을 입력하세요.',
  pwd: '비밀번호를 입력하세요.',
  pwd2: '비밀번호를 확인하세요.',
  nic: '닉네임을 입력하세요.',
  term1: '서비스 약관을 동의하세요.',
  term2: '개인정보 수집을 동의하세요.',
};

const fieldRegex = [
  {
    name: 'email',
    regex: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
    msg: '이메일을 올바르게 입력해주세요.',
  },
  {
    name: 'pwd',
    regex: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
    msg: '비밀번호는 최소 8영문자 대문자, 영문자 소문자, 숫자, 특수문자가 각각 최소 1개 이상 입니다.',
  },
];

export default function ChannelCreate() {
  // const { form, handleChange } = useForm({
  //   email: '',
  //   pwd1: '',
  //   pwd2: '',
  //   nic: '',
  //   term1: false,
  //   term2: false,
  // });
  // const { isPosting, postData, res, error, setError } =
  //   useApiPost('/auth/signup');
  // const [invalidMsg, setInvalidMsg] = useState('');
  // const { onSignup } = useAuth();
  // useEffect(() => {
  //   if (res) {
  //     onSignup();
  //   }
  // }, [res]);
  // const validate = (requiredFields, fieldRegex) => {
  //   const missingField = Object.keys(requiredFields).find((field) => {
  //     return !form[field];
  //   });
  //   if (missingField) {
  //     return requiredFields[missingField];
  //   }
  //   for (const fieldData of fieldRegex) {
  //     const { name, regex, msg } = fieldData;
  //     if (!regex.test(form[name])) {
  //       return msg;
  //     }
  //   }
  //   if (form.pwd !== form.pwd2) {
  //     return '비밀번호가 일치하지 않습니다.';
  //   }
  // };
  // const handleSignup = () => {
  //   const validationMsg = validate(requiredFields, fieldRegex);
  //   console.log('validationMsg', validationMsg);
  //   if (validationMsg) {
  //     setInvalidMsg(validationMsg);
  //     return;
  //   }
  //   postData({
  //     eid: form.email,
  //     pwd: form.pwd,
  //     nic: form.nic,
  //   });
  // };
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('엔터키동작');
  //     handleSignup();
  //   }
  // };
  // const handleClose = () => {
  //   setError(null);
  //   setInvalidMsg('');
  // };
  // return (
  //   <SignupFormSC>
  //     <h2>이메일 회원가입</h2>
  //     <SignupInput
  //       label={{ children: '이메일 주소 *' }}
  //       input={{
  //         name: 'email',
  //         type: 'text',
  //         placeholder: '이메일',
  //         value: form.email,
  //         onChange: handleChange,
  //         onKeyDown: handleKeyDown,
  //       }}
  //     />
  //     <SignupInput
  //       label={{ children: '비밀번호 *' }}
  //       input={{
  //         name: 'pwd',
  //         type: 'password',
  //         placeholder: '비밀번호',
  //         value: form.pwd,
  //         onChange: handleChange,
  //         onKeyDown: handleKeyDown,
  //       }}
  //     />
  //     <SignupInput
  //       label={{ children: '비밀번호 확인 *' }}
  //       input={{
  //         name: 'pwd2',
  //         type: 'password',
  //         placeholder: '비밀번호 확인',
  //         value: form.pwd2,
  //         onChange: handleChange,
  //         onKeyDown: handleKeyDown,
  //       }}
  //     />
  //     <SignupInput
  //       label={{ children: '닉네임 *' }}
  //       input={{
  //         name: 'nic',
  //         type: 'text',
  //         placeholder: '닉네임',
  //         value: form.nic,
  //         onChange: handleChange,
  //         onKeyDown: handleKeyDown,
  //       }}
  //     />
  //     <div>
  //       <LabeldCheckBox
  //         name="term1"
  //         isChecked={form.term1}
  //         onClick={handleChange}
  //       >
  //         [필수] 서비스 약관에 동의합니다.
  //       </LabeldCheckBox>
  //       <LabeldCheckBox
  //         className="checkbox"
  //         name="term2"
  //         isChecked={form.term2}
  //         onClick={handleChange}
  //       >
  //         [필수] 개인정보 수집 및 이용에 동의합니다.
  //       </LabeldCheckBox>
  //     </div>
  //     <ConfirmBtnSC
  //       className="button"
  //       onClick={handleSignup}
  //       disabled={isPosting}
  //     >
  //       {isPosting ? '회원가입 중...' : '회원가입'}
  //     </ConfirmBtnSC>
  //     {invalidMsg && (
  //       <AlertBox title={'알림'} close={handleClose} message={invalidMsg} />
  //     )}
  //     {error && (
  //       <AlertBox
  //         title={'알림'}
  //         close={handleClose}
  //         message={error && error.errMsg}
  //       />
  //     )}
  //   </SignupFormSC>
  // );
}
