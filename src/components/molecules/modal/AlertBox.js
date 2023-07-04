import { IoIosClose } from 'react-icons/io';
import WrapBtnSC from '../../atoms/Button/WrapBtnSC';
import ConfirmBtnSC from '../../atoms/Button/ConfirmBtnSC';
import ModalBoxSC from './ModalBoxSC';
import OverlaySC from '../../atoms/Dropdown/OverlaySC';
import ReactDOM from 'react-dom';

export default function AlertBox(p) {
  return ReactDOM.createPortal(
    <>
      <OverlaySC onClick={p.close} />
      <ModalBoxSC>
        <div className="header">
          <h5>{p.title}</h5>
          <WrapBtnSC onClick={p.close}>
            <IoIosClose size={24} />
          </WrapBtnSC>
        </div>
        <p>{p.message}</p>
        <div className="footer">
          <ConfirmBtnSC onClick={p.close}>{p.btnName}</ConfirmBtnSC>
        </div>
      </ModalBoxSC>
    </>,
    document.getElementById('modal-root')
  );
}
