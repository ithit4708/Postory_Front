import styled from 'styled-components';

const AuthMainSC = styled.main`
  min-height: calc(100% - ${(p) => p.theme.globalPx.gHeaderHeight}px);

  .contentBox {
    margin: 0 auto;
    padding: 20px 0;
    width: ${(p) => p.theme.globalPx.gSiteWidth}px;
  }
`;

export default function AuthMain(p) {
  return (
    <AuthMainSC>
      <div className="contentBox">{p.children}</div>
    </AuthMainSC>
  );
}
