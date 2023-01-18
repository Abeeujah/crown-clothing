// Import Styled Components..
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner
} from "./button.styles";

// Define Button Classes..
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

// Helper Function to get button type..
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// Define Button Component..
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>;
};

// Export Button Component..
export default Button;
