import OverlaySC from '../../../atoms/Dropdown/OverlaySC';
import UserMenu from './UserMenu';
import DropdownBoxSC from '../../dropdown/DropdownBoxSC';

export default function UserDropdownBox(p) {
  return (
    <>
      <OverlaySC isTrans onClick={p.close} />
      <DropdownBoxSC>
        <UserMenu onClose={p.close} />
      </DropdownBoxSC>
    </>
  );
}
