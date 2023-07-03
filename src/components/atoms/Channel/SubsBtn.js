import styled from 'styled-components';
import ConfirmBtnSC from '../Button/ConfirmBtnSC';

const SubsBtnSC = styled(ConfirmBtnSC)`
  padding: 4px 8px;
`;

export default function SubsBtn(props) {
  return <SubsBtnSC {...props}>+ 구독</SubsBtnSC>;
}
