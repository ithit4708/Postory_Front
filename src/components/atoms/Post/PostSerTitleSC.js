import styled from 'styled-components';

const PostSerTitle = styled.p`
  color: ${(p) => p.theme.color.blackA30};
  font-size: ${(p) => p.theme.fontSize.postSerTitle}px;
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  padding-bottom: 7px;
`;

export default PostSerTitle;
