import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';

const profileStyle = {
  height: '1000px',
};

export default function ProfilePost() {
  const { nic } = useParams();

  return (
    <ProfileTemplate nic={nic}>
      <div style={profileStyle}>프로필 포스트</div>;
    </ProfileTemplate>
  );
}
