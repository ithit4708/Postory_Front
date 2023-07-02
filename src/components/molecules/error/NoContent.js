import styled from 'styled-components';
import CenterPSC from '../../atoms/Paragraph/TextCenterP';
const NoDataSC = styled.div`
  padding: 50px 0;

  a,
  button {
    margin: 10px auto 0;
  }
`;

export default function NoContent(p) {
  return (
    <NoDataSC>
      <CenterPSC>{p.children}</CenterPSC>
    </NoDataSC>
  );
}
