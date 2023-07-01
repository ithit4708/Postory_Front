import useModal from '../../modal/useModal';
import WrapBtnSC from '../../../atoms/Button/WrapBtnSC';
import UserImg from '../../../atoms/User/UserImg';
import useUserStore from '../../../../stores/useUserStore';
import UserDropdownBox from './UserDropdownBox';
import DropdownSC from '../../dropdown/DropdownSC';
import { useRef } from 'react';

export default function UserDropdown() {
  const { isOpen, openModal, closeModal } = useModal();
  const { user } = useUserStore();

  const buttonRef = useRef();

  return (
    <DropdownSC>
      <WrapBtnSC onClick={openModal} className="button" buttonRef={buttonRef}>
        <UserImg src={user.userImgPath} />
      </WrapBtnSC>
      {isOpen && <UserDropdownBox close={closeModal} />}
    </DropdownSC>
  );
}
