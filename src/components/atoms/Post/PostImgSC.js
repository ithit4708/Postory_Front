import styled from 'styled-components';

const PostImgSC = styled.img`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 10px;
  display: ${(p) => (!!p.src ? 'block' : 'none')};
`;

export default function PostImg({ src, size = '100', ...restProps }) {
  const finalSrc =
    src ||
    'https://d33pksfia2a94m.cloudfront.net/assets/img/avatar/blog_blank.png';
  return <PostImgSC src={finalSrc} size={size} {...restProps} />;
}
