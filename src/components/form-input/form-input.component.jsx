// Import SCSS..
import "./form-input.styles.jsx";
import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

// Class Helper Function..
const append = (length) => {
  const tag = length.value.length ? "shrink" : "";
  return tag;
};

// Create Input Component..
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

// Export Input Component..
export default FormInput;
