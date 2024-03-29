import styled from 'styled-components';

const DropdownMenuSC = styled.ul`
  & > li {
    margin: 4px 0;
  }

  & + & {
    border-top: 1px solid ${(p) => p.theme.color.gray1};
  }
`;

export default DropdownMenuSC;
