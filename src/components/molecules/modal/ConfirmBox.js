import { IoIosClose } from 'react-icons/io';
import WrapBtnSC from '../../atoms/Button/WrapBtnSC';
import ConfirmBtnSC from '../../atoms/Button/ConfirmBtnSC';
import CancelBtnSC from '../../atoms/Button/CancelBtnSC';
import ModalBoxSC from './ModalBoxSC';
import ReactDOM from 'react-dom';
import OverlaySC from '../../atoms/Dropdown/OverlaySC';

export default function ConfirmBox(p) {
  return ReactDOM.createPortal(
    <>
      <OverlaySC onClick={p.close} />
      <ModalBoxSC>
        <div className="header">
          <h5>{p.title}</h5>
          <WrapBtnSC onClick={p.onCancel}>
            <IoIosClose size={24} />
          </WrapBtnSC>
        </div>
        <p>{p.message}</p>
        <div className="footer">
          <CancelBtnSC onClick={p.onCancel}>Cancel</CancelBtnSC>
          <ConfirmBtnSC onClick={p.onConfirm}>Confirm</ConfirmBtnSC>
        </div>
      </ModalBoxSC>
    </>,
    document.getElementById('modal-root')
  );
}
