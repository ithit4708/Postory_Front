import ValidGuideSC from '../../atoms/Input/ValidGuideSC';
import InputLabel from '../../atoms/Input/InputLabel';
import TextInputSC from '../../atoms/Input/TextInputSC';

export default function ProfileTextInput({ label, isRequired, input, msg }) {
  return (
    <div>
      <InputLabel label={label} isRequired={isRequired} />
      <TextInputSC {...input} />
      <ValidGuideSC>{msg}</ValidGuideSC>
    </div>
  );
}
