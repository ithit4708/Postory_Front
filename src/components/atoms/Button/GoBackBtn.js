import { MdArrowBackIosNew } from 'react-icons/md';
import styled from 'styled-components';
import WrapBtnSC from './WrapBtnSC';
import { useNavigate } from 'react-router';

const GoBackBtnSC = styled(WrapBtnSC)`
  padding: 0 12px;

  .icon {
    height: 40px;
    width: 20px;
  }
`;

export default function GoBackBtn(p) {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <GoBackBtnSC onClick={onGoBack} className={p.className}>
      <MdArrowBackIosNew className="icon" />
    </GoBackBtnSC>
  );
}
