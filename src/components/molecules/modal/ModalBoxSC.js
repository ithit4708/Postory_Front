import styled from 'styled-components';

const ModalBoxSC = styled.div`
  z-index: 60;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  background-color: white;
  border: 1px solid ${(p) => p.theme.color.gray1};
  border-radius: 5px;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 0;
  }

  h5 {
    font-size: 17px;
  }

  p {
    font-size: ${(p) => p.theme.fontSize.bodyfont}px;
    font-weight: ${(p) => p.theme.fontWeight.normal};
    padding: 20px 24px 20px;
    word-wrap: break-word;
  }

  div.footer {
    padding: 10px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid ${(p) => p.theme.color.gray1};
    gap: 10px;
  }
`;

export default ModalBoxSC;
