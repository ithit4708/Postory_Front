import HomeTemplate from '../../../components/templates/general/HomeTemplate';

const homeStyle = {
  minHeight: '100px',
};

export default function Home() {
  return (
    <HomeTemplate>
      <div style={homeStyle}>이거 홈 맞지?</div>
    </HomeTemplate>
  );
}
