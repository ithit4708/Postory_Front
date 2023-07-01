import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerSC = styled.div`
  color: red;
`;

export default function EmailAuthTimer({ timerKey, onFinish }) {
  const [time, setTime] = useState(3 * 60 + 30);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    } else {
      onFinish();
    }
  }, [time, onFinish]);

  useEffect(() => {
    // 타이머 키가 변경되면 타이머를 재설정합니다.
    setTime(3 * 60 + 30);
  }, [timerKey]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <TimerSC>
      인증번호를 입력하세요: {minutes}:{seconds < 10 ? '0' : ''}
      {seconds}
    </TimerSC>
  );
}
