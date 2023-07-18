import UserImg from '../../atoms/User/UserImg';
import InputLabel from '../../atoms/Input/InputLabel';
import ValidGuideSC from '../../atoms/Input/ValidGuideSC';
import ImgInput from '../../atoms/Input/ImgInput';
import styled from 'styled-components';
import { useState } from 'react';
import DeleteBtnSC from '../../atoms/Button/DeleteBtnSC';

const ProfileImgInputSC = styled.div`
  .imgbox {
    display: flex;
  }

  .input {
    width: 100%;
  }

  .underInput {
    display: flex;
    justify-content: space-between;
  }

  ${ValidGuideSC} {
    margin-left: 22px;
  }
`;

export default function ProfileImgInput({ onFileChange, onInvalidMsg }) {
  const [previewImg, setPreviewImg] = useState(null);
  const [fileName, setFileName] = useState('');

  const handlePreview = (file) => {
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // 파일 크기를 MB 단위로 계산
      if (fileSizeInMB > 10) {
        onInvalidMsg('파일 크기는 10MB 이하여야 합니다.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);

      setFileName(file.name);
    }
  };

  const handleDelete = () => {
    setPreviewImg(null);
    setFileName('');
    onFileChange(null); // 파일 제거 시 부모 컴포넌트로 파일 값 전달
  };

  return (
    <ProfileImgInputSC>
      <InputLabel label="프로필 이미지" />
      <div className="imgbox">
        <UserImg src={previewImg} size={64} />
        <div className="input">
          <ImgInput
            onPreview={handlePreview}
            onFileChange={onFileChange}
            fileName={fileName}
          />
          <div className="underInput">
            <ValidGuideSC>최대 10MB의 이미지 파일</ValidGuideSC>
            <DeleteBtnSC onClick={handleDelete}>이미지 삭제</DeleteBtnSC>
          </div>
        </div>
      </div>
    </ProfileImgInputSC>
  );
}
