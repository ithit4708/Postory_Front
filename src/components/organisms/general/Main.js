import styled from 'styled-components';

const MainSC = styled.main`
  min-height: calc(
    100% - ${(p) => p.theme.globalPx.gHeaderHeight}px -
      ${(p) => p.theme.globalPx.gNavHeight}px
  );

  .mainContentBox {
    margin: 0 auto;
    padding: 20px 0;
    width: ${(p) => p.theme.globalPx.gSiteWidth}px;
  }
`;

export default function Main(p) {
  return (
    <MainSC>
      <div className="mainContentBox">{p.children}</div>
    </MainSC>
  );
}
