import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const HeartBtnSC = styled.button`

`

export default function HeartBtn(props) {


  return (
    <HeartBtnSC {...props}>
      <FontAwesomeIcon icon="fa-light fa-heart"/>;
    </HeartBtnSC>
  )
}