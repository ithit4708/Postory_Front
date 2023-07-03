import styled from 'styled-components';

const PostTitle = styled.p`
  color: black;
  font-size: ${(p) => p.theme.fontSize.postTitle}px;
  font-weight: ${(p) => p.theme.fontWeight.bold};

  padding-bottom: 7px;
`;

export default PostTitle;
