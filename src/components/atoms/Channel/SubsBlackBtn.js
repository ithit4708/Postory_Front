import styled from 'styled-components';
import ConfirmBtnSC from '../Button/ConfirmBtnSC';
import ConfirmBlackBtnSC from '../Button/ConfirmBlackBtnSC';

const SubsBtnSC = styled(ConfirmBlackBtnSC)`
  padding: 4px 8px;
`;

export default function SubsBlackBtn(props) {
  return <SubsBtnSC {...props}>+ 구독</SubsBtnSC>;
}
