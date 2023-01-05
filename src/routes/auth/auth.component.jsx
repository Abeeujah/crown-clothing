// Import Google SignUp..
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

// Import Styled Components..
import { AuthContainer } from "./auth.styles";

// Build Sign-In Component..
const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

// Export Authentication Component..
export default Authentication;
