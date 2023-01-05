import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailandPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

// Import Styled Components..
import {
  ButtonsContainer,
  SignInContainer,
} from "./sign-in-form.styles.jsx";

// Create Sign Up Form..
// Default Form Value(Null State)
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // Update Form Fields Using State..
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    // Get the Field and Value firing the Event
    const { name, value } = event.target;
    // Update the Form Field
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  // Google Sign In..
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // Reset Form Fields after Auth..
  const resetFormFields = () => {
    setFormFields({ ...defaultFormFields });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailandPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No User With This Email");
          break;
        case "auth/wrong-password":
          alert("Specified Password is Incorrect");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Don't Have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

// Export Sign In Form..
export default SignInForm;
