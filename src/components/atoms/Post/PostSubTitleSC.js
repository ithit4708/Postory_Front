import styled from 'styled-components';

const PostSubTitleSC = styled.h4`
  color: ${(p) => p.theme.color.blackA50};
  font-size: ${(p) => p.theme.fontSize.postSubTitle}px;
  font-weight: ${(p) => p.theme.fontWeight.thick};
`;

export default PostSubTitleSC;
