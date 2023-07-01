import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';

const profileStyle = {
  height: '1000px',
};

export default function ProfileSeries() {
  const { nic } = useParams();

  return (
    <ProfileTemplate nic={nic}>
      <div style={profileStyle}>프로필 시리즈</div>;
    </ProfileTemplate>
  );
}
