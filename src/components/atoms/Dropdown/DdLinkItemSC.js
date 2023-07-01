import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkChar } from '../../styled/utilsProps';

const DdLinkItemSC = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 4px 18px;
  ${linkChar}

  &:hover {
    background-color: ${(p) => p.theme.color.ddItemHoverbg};
    color: ${(p) => p.theme.color.ddItemHover};
  }
`;

export default DdLinkItemSC;

// export default function DropdownItem({onClick, ...restProps}) {
//   onClick =

//   const newProps = {
//     onClick:
//   }
// }
