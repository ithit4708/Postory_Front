import styled from 'styled-components';

const ChannelImgSC = styled.img`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 4px;
`;

export default function ChannelImg({ src, size = '64', ...restProps }) {
  const finalSrc =
    src ||
    'https://d33pksfia2a94m.cloudfront.net/assets/img/avatar/blog_blank.png';

  return <ChannelImgSC src={finalSrc} size={size} {...restProps} />;
}
