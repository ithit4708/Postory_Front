import styled from 'styled-components';
import { contentBox, stickyBox } from '../../styled/utilsProps';

const ProfileSubHeaderSC = styled.div`
  ${stickyBox}
  top: ${(p) => p.theme.globalPx.gHeaderHeight}px;
  z-index: 10;

  .contentBox {
    ${contentBox}
    position: relative;
  }
`;

export default function ProfileSubHeader(p) {
  return (
    <ProfileSubHeaderSC>
      <div className="contentBox">{p.children}</div>
    </ProfileSubHeaderSC>
  );
}
