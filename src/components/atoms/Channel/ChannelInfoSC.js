import styled from 'styled-components';

const ChannelInfoSC = styled.p`
  color: ${(p) => p.theme.color.itemInfo};
  font-size: ${(p) => p.theme.fontSize.bodyfont}px;
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  text-overflow: ellipsis;
`;

export default ChannelInfoSC;
