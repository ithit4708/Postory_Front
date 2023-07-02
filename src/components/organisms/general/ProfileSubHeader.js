import styled from 'styled-components';
import { contentBox, stickyBox } from '../../styled/utilsProps';
import GoBackBtn from '../../atoms/Button/GoBackBtn';

const ProfileSubHeaderSC = styled.div`
  ${stickyBox}
  top: ${(p) => p.theme.globalPx.gHeaderHeight}px;
  z-index: 20;
  height: ${(p) => p.theme.globalPx.gNavHeight}px;

  .contentBox {
    ${contentBox}
    height: ${(p) => p.theme.globalPx.gNavHeight}px;
    position: relative;
    justify-content: center;
    font-size: 16px;
    font-weight: ${(p) => p.theme.fontWeight.semiBold};
  }

  .goback {
    position: absolute;
    left: 0;
  }
`;

export default function ProfileSubHeader(p) {
  return (
    <ProfileSubHeaderSC>
      <div className="contentBox">
        <GoBackBtn className="goback" />
        {p.children}
      </div>
    </ProfileSubHeaderSC>
  );
}
