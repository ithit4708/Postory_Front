import styled from 'styled-components';

const PostTextContentSC = styled.p`
  color: ${(p) => p.theme.color.blackA50};
  font-size: ${(p) => p.theme.fontSize.bodyfont}px;
  font-weight: ${(p) => p.theme.fontWeight.medium};
`;

export default PostTextContentSC;
