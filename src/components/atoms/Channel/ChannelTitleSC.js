import styled from 'styled-components';

const ChannelTitleSC = styled.h4`
  color: black;
  font-size: ${(p) => p.theme.fontSize.channelTitle}px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
`;

export default ChannelTitleSC;
