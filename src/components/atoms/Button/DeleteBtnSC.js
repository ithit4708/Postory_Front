import styled from 'styled-components';

const DeleteBtnSC = styled.button`
  margin: 8px 2px;
  padding: 0 2px;
  color: ${(p) => p.theme.color.link};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.validGuide}px;
`;

export default DeleteBtnSC;
