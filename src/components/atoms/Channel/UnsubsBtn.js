import styled from 'styled-components';
import CancelBtnSC from '../Button/CancelBtnSC';

const UnsubsBtnSC = styled(CancelBtnSC)`
  padding: 4px 8px;
`;

export default function UnsubsBtn(props) {
  return <UnsubsBtnSC {...props}>구독 중</UnsubsBtnSC>;
}
