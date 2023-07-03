import styled from 'styled-components';

const MetaDataSC = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  color: ${(p) => p.theme.color.blackA50};
  font-size: ${(p) => p.theme.fontSize.postMetaData}px;
  font-weight: ${(p) => p.theme.fontWeight.medium};
`;

export default MetaDataSC;
