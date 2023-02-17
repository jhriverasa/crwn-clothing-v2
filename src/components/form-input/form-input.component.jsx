import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length > 0}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
