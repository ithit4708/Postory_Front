import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearchBox = (resultUrl) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Enter 키를 눌렀을 때 실행할 동작
      navigate(`${resultUrl}?keyword=${encodeURIComponent(value)}&option=all`);
    }
  };

  const onClick = () => {
    setValue('');
  };

  return { value, onChange, onKeyDown, onClick };
};
