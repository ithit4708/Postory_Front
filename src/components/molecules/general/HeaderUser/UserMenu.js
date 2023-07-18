import DropdownMenuSC from '../../dropdown/DropdownMenuSC';
import DdLinkItemSC from '../../../atoms/Dropdown/DdLinkItemSC';
import UserImg from '../../../atoms/User/UserImg';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import DdLinkChannelItemSC from '../../../atoms/Dropdown/DdLinkChannelItemSC';

const userMenuLinks = [
  { to: '/', children: '홈' },
  { to: '/subscriptions', children: '구독' },
  { to: '/library', children: '보관함' },
  // { to: '/point', children: '포인트/수익' },
  { to: '/account/settings', children: '설정' },
];

export default function UserMenu(p) {
  const { user, channels } = useAuth();

  const navigate = useNavigate();

  const onClickLogout = (e) => {
    e.preventDefault();
    p.onClose();
    navigate('/logout');
  };

  return (
    <>
      <DropdownMenuSC>
        <li>
          <DdLinkItemSC to={`/profile/${user.nic}`} onClick={p.onClose}>
            <UserImg size="24" src={user.userImgPath} alt={user.nic} />
            {user.nic}
          </DdLinkItemSC>
        </li>
      </DropdownMenuSC>
      {channels && channels.length !== 0 && (
        <DropdownMenuSC>
          <p style={{ padding: '5px 8px 0', fontSize: '15px' }}>내 채널</p>
          {channels.map((channel) => (
            <li key={channel.chnlId}>
              <DdLinkChannelItemSC
                to={`/channel/${channel.chnlUri}`}
                children={channel.chnlTtl}
                onClick={p.onClose}
              />
            </li>
          ))}
        </DropdownMenuSC>
      )}
      <DropdownMenuSC>
        {userMenuLinks.map((link, idx) => (
          <li key={idx}>
            <DdLinkItemSC
              to={link.to}
              end={link.end}
              children={link.children}
              onClick={p.onClose}
            />
          </li>
        ))}
      </DropdownMenuSC>
      <DropdownMenuSC>
        <li>
          <DdLinkItemSC
            to={'/channel/create'}
            children="새 채널 만들기                                            "
            onClick={p.onClose}
          />
        </li>
        <li>
          <DdLinkItemSC children="로그아웃" onClick={onClickLogout} />
        </li>
      </DropdownMenuSC>
    </>
  );
}
