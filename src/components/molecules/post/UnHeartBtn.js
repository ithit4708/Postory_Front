import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const UnHeartBtnSC = styled.button`

`

export default function UnHeartBtn(props) {

  return (
    <UnHeartBtnSC {...props}>
      <FontAwesomeIcon icon="fa-solid fa-heart"/>;
    </UnHeartBtnSC>
    )
}
