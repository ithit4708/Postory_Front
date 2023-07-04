import styled from 'styled-components';

const ChannelInfoSC = styled.div`
  color: ${(p) => p.theme.color.itemInfo};
  font-size: ${(p) => p.theme.fontSize.bodyfont}px;
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  cursor: pointer;
`;

export default ChannelInfoSC;
