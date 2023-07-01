import styled from 'styled-components';
import TextInputSC from '../../atoms/Input/TextInputSC';

const SignupLabelSC = styled.p`
  padding-bottom: 4px;
  font-size: 13px;
  color: ${(p) => p.theme.color.blackA50};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
`;

export default function SignupInput({ label, input }) {
  return (
    <div>
      <SignupLabelSC {...label} />
      <TextInputSC {...input} />
    </div>
  );
}
