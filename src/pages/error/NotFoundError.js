import styled from 'styled-components';
import errorList from '../consts/errorList';
import { BtnLink } from '../components/styled/styledLink';

const ErrorContent = styled.div`
  text-align: center;
  width: 400px;
  border: 1px solid black;
  margin: 50px auto;

  .errorIcon {
    width: 80px;
    height: 80px;
    margin: 0 auto 32px;

    .img {
      vertical-align: middle;
      border-style: none;
      text-align: center;
    }
  }

  .errorTitle {
    margin-bottom: 16px;
    font-weight: 600;

    font-size: 26px;
    line-height: 31px;
  }

  .errorMessage {
    max-width: 320px;
    margin: 0 auto 60px;
    color: rgba(0, 0, 0, 0.47);

    font-size: 15px;
    line-height: 22px;
  }

  .errorBtnGroup {
    padding-bottom: 32px;
    display: flex;
    justify-content: space-evenly;
  }
`;

const notFoundError = {
  name: 'NotFound',
  iconSrc:
    'https://d33pksfia2a94m.cloudfront.net/assets/img/error/exclamation_circle.svg',
  title: '앗, 존재하지 않는 길이에요.',
  message:
    '죄송하지만 주소가 바뀌거나 사라진 것 같아요.\n정확한 주소인지 다시 한번확인해 주세요.',
  buttons: [
    {
      link: '/',
      text: '포스타입 홈으로 가기',
    },
  ],
};

export default function ErrorPage({ errorName }) {
  const foundError = errorList?.find((error) => error.name === errorName);

  return (
    <>
      <ErrorContent>
        <div className="errorIcon">
          <img src={foundError.iconSrc} alt="error img" />
        </div>
        <p className="errorTitle">{foundError.title}</p>
        <p className="errorMessage">{foundError.message}</p>
        <div className="errorBtnGroup">
          {foundError.buttons?.map((button) => (
            <BtnLink to={button.link}>{button.text}</BtnLink>
          ))}
        </div>
      </ErrorContent>
    </>
  );
}
