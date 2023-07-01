import styled from 'styled-components';

const LabeldCheckBoxCS = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  color: ${(p) => p.theme.color.blackA50};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

export default function LabeldCheckBox({
  name,
  isChecked,
  children,
  ...restProps
}) {
  return (
    <LabeldCheckBoxCS {...restProps}>
      <input type="checkbox" name={name} />
      {children}
    </LabeldCheckBoxCS>
  );
}
