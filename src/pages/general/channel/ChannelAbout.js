import ChannelTemplate from '../../../components/templates/general/ChannelTemplate';
import ㅎ from '../../../tempData/channel/channelAbout.json';

export default function ChannelAbout() {
  return (
    <ChannelTemplate>
      <div>채널 소개</div>
      <div style={{ padding: '50px', margin: '20px 0', backgroundColor: 'yellow' }}>
        <h3>채널 영역</h3>
        <hr></hr>
        <h2>{channelAboutData.data.channel.chnlTtl}</h2>
        <h5>{channelAboutData.data.channel.chnlIntro}</h5>
        <h5>{channelAboutData.data.channel.crtNic}</h5>
        
        <div>{channelAboutData.data.channel.chnlOpenDtm}</div>


      </div>
    
      <div style={{ padding: '50px', margin: '20px 0', backgroundColor: 'yellow' }}>
        <h3>유저 영역</h3>
        <hr></hr>
        <h2>{channelAboutData.data.user.nic}</h2>
        <h2>{channelAboutData.data.user.eid}</h2>
        <h4>{channelAboutData.data.user.userIntro}</h4>

      </div>

    </ChannelTemplate>
  );
}
