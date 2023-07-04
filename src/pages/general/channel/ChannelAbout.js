import ChannelTemplate from '../../../components/templates/general/ChannelTemplate';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useApiGet } from '../../../hooks/useApi';

const ContentContainer = styled.div`
  padding: 20px 0;
`;

const AboutSectionContainer = styled.div`
  padding: 32px 0;
`;

const ChannelSection = styled(AboutSectionContainer)`
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.05);
`;

const UserSection = styled(AboutSectionContainer)`
  display: flex;

`;

const RecThumnail = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  border: 1px solid rgba(0,0,0,.05);
  margin-right: 28px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
`

const ChannelBottomContainer = styled.div`
  display: flex;
  list-style: none;
`

const RoundThumnail = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 60px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  border: 1px solid rgba(0,0,0,.05);
  margin-right: 28px;
`;

export default function ChannelAbout() {
  const { chnlUri } = useParams();
  const { data, isLoading, error } = useApiGet(
    `/channel/${encodeURIComponent(chnlUri)}/about`,
    [chnlUri]
  );

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  if (!data) {
    return null;
  }
  return (
    <ChannelTemplate>
      <ContentContainer>
        <ChannelSection>
          <RecThumnail imageUrl={data.data.channel.chnlImgPath}></RecThumnail>
          <div>
            <SectionTitle>{data.data.channel.chnlTtl}</SectionTitle>
            <p>{data.data.channel.chnlIntro}</p>

            <ChannelBottomContainer>
              <li>(아이콘) 구독자 {data.data.channel.suberCnt}명</li>
              <li>(아이콘) 포스트 {data.data.channel.chnlPostCnt}개</li>
              <li>(아이콘) 좋아요 {data.data.channel.chnlLikCnt}개</li>
              <li>(아이콘) 개설일 {data.data.channel.chnlOpenDtm}</li>
            </ChannelBottomContainer>
          </div>

        </ChannelSection>

        <UserSection>
          {/* TODO: user.userImgPath 값넣어서 위에줄 주석풀고 아랫줄 삭제  */}
           <RoundThumnail imageUrl={data.data.user.userImgPath}></RoundThumnail>

          <div>
            <SectionTitle>{data.data.user.nic}</SectionTitle>
            <p>{data.data.user.userIntro}</p>
          </div>
        </UserSection>
      </ContentContainer>
    </ChannelTemplate>
  );
}
