import styled from 'styled-components';
import { CgAsterisk } from 'react-icons/cg';

const InputLabelSC = styled.label`
  margin: 8px 2px;
  font-size: 16px;
  color: ${(p) => p.theme.color.blackA80};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  display: block;

  .asterisk {
    color: blue;
  }
`;

export default function InputLabel({ label, isRequired = false }) {
  return (
    <InputLabelSC>
      {label}
      {isRequired && <CgAsterisk className="asterisk" />}
    </InputLabelSC>
  );
}
