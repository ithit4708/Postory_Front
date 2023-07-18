import TextAreaSC from '../../atoms/Input/TextAreaSC';
import InputLabel from '../../atoms/Input/InputLabel';
import ValidGuideSC from '../../atoms/Input/ValidGuideSC';

export default function ProfileTextArea({ label, isRequired, textarea, msg }) {
  return (
    <div>
      <InputLabel label={label} isRequired={isRequired} />
      <TextAreaSC {...textarea} />
      <ValidGuideSC>{msg}</ValidGuideSC>
    </div>
  );
}
