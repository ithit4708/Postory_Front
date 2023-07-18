import PageTitleSC from '../../../components/atoms/TextTag/PageTitleSC';
import ProfileForm from '../../../components/organisms/general/ProfileForm';
import AccountSettingsTemplate from '../../../components/templates/general/AccountSettingsTemplate';

export default function ProfileSettings() {
  return (
    <AccountSettingsTemplate>
      <PageTitleSC>프로필 수정</PageTitleSC>
      <ProfileForm />
    </AccountSettingsTemplate>
  );
}
