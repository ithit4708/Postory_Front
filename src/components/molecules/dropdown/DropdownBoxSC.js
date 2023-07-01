import styled from 'styled-components';

const DropdownBoxSC = styled.div`
  z-index: 60;
  position: absolute;
  top: calc(100% + 10px);
  right: -10px;
  width: 200px;
  background-color: white;
  border: 1px solid ${(p) => p.theme.color.gray1};
  border-radius: 5px;
`;

export default DropdownBoxSC;
