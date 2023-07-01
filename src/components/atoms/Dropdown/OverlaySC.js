import styled from 'styled-components';

const OverlaySC = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) =>
    p.isTrans ? 'transparent' : p.theme.color.overlay};
`;

export default OverlaySC;
