import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkChar } from '../../styled/utilsProps';

const DdLinkChannelItemSC = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 4px 18px;
  color: ${(p) => p.theme.color.gray3};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.link}px;
  background-color: ${(p) => p.theme.color.blackA80};

  &:hover {
    background-color: ${(p) => p.theme.color.blackA50};
    color: white;
  }
`;

export default DdLinkChannelItemSC;
