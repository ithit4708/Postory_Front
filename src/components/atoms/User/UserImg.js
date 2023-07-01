import styled from 'styled-components';

const UserImgSC = styled.img`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
`;

export default function UserImg({ src, size = '32', ...restProps }) {
  const finalSrc =
    src ||
    'https://d33pksfia2a94m.cloudfront.net/assets/img/avatar/avatar_blank.png';

  return <UserImgSC src={finalSrc} size={size} {...restProps} />;
}
