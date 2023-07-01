import AuthHeader from '../../components/organisms/auth/AuthHeader';
import AuthMain from '../../components/organisms/auth/AuthMain';
import LoginForm from '../../components/organisms/auth/LoginForm';

export default function Login() {
  return (
    <>
      <AuthHeader />
      <AuthMain>
        <LoginForm />
      </AuthMain>
    </>
  );
}
