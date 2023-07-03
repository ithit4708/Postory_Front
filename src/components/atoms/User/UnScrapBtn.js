import WrapBtnSC from '../Button/WrapBtnSC';
import { BsBookmarkFill } from 'react-icons/bs';

export default function UnScrapBtn(props) {
  return (
    <WrapBtnSC {...props}>
      <BsBookmarkFill size={18} color="gray" />
    </WrapBtnSC>
  );
}
