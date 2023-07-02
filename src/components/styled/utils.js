export const btnStyle = `
  display: block;
  width: fit-content;
  padding: 7px 15px;
  font-size: 15px;
  border-radius: 4px;
  font-weight: normal;
`;

export const naviLinkActive = `
  &.active {
    color: black;
  }

  &.active:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;
