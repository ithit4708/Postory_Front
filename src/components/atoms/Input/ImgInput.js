import { useRef } from 'react';
import styled from 'styled-components';
import TextInputSC from './TextInputSC';
import { useState } from 'react';

const ImgInputSC = styled.div`
  display: flex;

  button {
    border: 1px solid ${(p) => p.theme.color.gray1};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 40px;
    padding: 0 10px;
    outline: none;
    border-left: 0px;
  }

  ${TextInputSC} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1;
    margin-left: 20px;

    &:focus {
      border-color: ${(p) => p.theme.color.gray1};
    }
  }
`;

export default function ImgInput({ onPreview, onFileChange, fileName }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    onPreview(file);
    onFileChange(file);
  };

  return (
    <ImgInputSC>
      <TextInputSC
        placeholder="파일을 선택해 주세요"
        value={fileName}
        readOnly
      />
      <button onClick={handleButtonClick}>파일 선택</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept=".gif, .jfif, .pjpeg, .jpeg, .pjp, .jpg, .png"
        onChange={handleImageUpload}
      />
    </ImgInputSC>
  );
}
