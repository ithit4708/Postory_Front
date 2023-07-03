import WrapBtnSC from '../../atoms/Button/WrapBtnSC';
import { BsBookmark } from 'react-icons/bs';

export default function ScrapBtn(props) {
  return (
    <WrapBtnSC {...props}>
      <BsBookmark size={18} color="gray" />
    </WrapBtnSC>
  );
}
