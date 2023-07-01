import AuthHeader from '../../components/organisms/auth/AuthHeader';
import SignupForm from '../../components/organisms/auth/SignupForm';
import AuthMain from '../../components/organisms/auth/AuthMain';

export default function Signup() {
  return (
    <>
      <AuthHeader />
      <AuthMain>
        <SignupForm />
      </AuthMain>
    </>
  );
}
