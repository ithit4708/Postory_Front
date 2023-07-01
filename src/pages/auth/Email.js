import { Navigate } from 'react-router-dom';
import AuthForm from '../../components/organisms/auth/AuthForm';
import AuthHeader from '../../components/organisms/auth/AuthHeader';
import AuthMain from '../../components/organisms/auth/AuthMain';
import useUserStore from '../../stores/useUserStore';

export default function Email() {
  return (
    <>
      <AuthHeader />
      <AuthMain>
        <AuthForm />
      </AuthMain>
    </>
  );
}
