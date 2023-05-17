import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import DropDown from './DropDown';

const PostInformation = () => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    const handleDropdownVisibility = (e) => {
        setDropdownVisibility(!dropdownVisibility)
    }
    return (
        <PostListLayout>
            <PostListBox className="component-post list ">
                <PostBox id="post-container">
                    <SeriesBox className="series">
                        <h5 className="text-truncate text-alpha-black-54">
                            <Link href="https://www.postype.com/channel/series/1043073">피어슨가</Link>
                        </h5>
                    </SeriesBox>
                    <PostDetailBox className="post">
                        <PostDataBox className="post-data">
                            <a href="https://posty.pe/exks1e">
                                <h3 className="ellipsis-2 text-color-black">피어슨가 패치노트</h3>
                                <div id="post-data" className="ellipsis-2 text-alpha-black-47">
                                    <h4>4화 유료분 추가 /23.05.11</h4>
                                    <div className="divider"></div>
                                    <p>지난 에피소드 전부 다시 채색하고 유료분 추가하기... 는 해보니까 일주일 안에는 무리!!! 라서 차근차근 해나가려 합니다 근데 그동안 다음화를 못 그리면 또 제가 재미 없으니까 조금씩 동시에 진행하려고 해요 앞으로의 계획 : 매주 화요일 최신화 연재를 이어간다!!!! 대신 최소 컷 수 제한이 사라졌으니 분량은 자유롭게...(과연 욕심내지 않을 수 있을 것인가?) 그리고 이 글에 조금씩 전 에피소드들의 수정사항을 비정기적으로 업데이트 할까 해요</p>
                                </div>
                            </a>
                            <div className="post-tags">
                                <a className="notice" href="https://posty.pe/exks1e">공지</a>
                            </div>
                        </PostDataBox>
                        <PostDataThumbnailBox className="post-data-thumbnail">
                            <Link href="https://posty.pe/exks1e">
                                <img src="https://d3mcojo3jv0dbr.cloudfront.net/2023/05/09/23/38/a4ecd1ab548ff9572badbe219ed44db8.png?w=144&amp;h=108&amp;q=65" alt="피어슨가 패치노트" />
                            </Link>
                        </PostDataThumbnailBox>
                    </PostDetailBox>
                    <PostInfoBox className="post-info">
                        <Link className="user-profile-avatar avatar-32" href="https://www.postype.com/profile/@mhqntk">
                            <img src="https://d3mcojo3jv0dbr.cloudfront.net/2021/01/19/21/05/b65aa9e7f1106013d97b23ab00934a19.png?w=32&amp;h=32&amp;q=65" alt="래팝" />
                        </Link>
                        <PostInfoBodyBox className="post-info-body">
                            <div className="user-profile-nickname text-truncate">
                                <a href="https://www.postype.com/profile/@mhqntk" rel="author">래팝</a>
                            </div>
                            <div className="post-meta text-alpha-black-47"><span className="meta-item" title="조회수">
                                <i class="fa-regular fa-eye" aria-label="조회수"></i>
                                <span className="stats-count">75</span>
                            </span><span className="meta-item" title="좋아요">
                                    <i className="fas fal fa-heart" aria-label="좋아요"></i>
                                    <span className="stats-count">10</span>
                                </span><time className="meta-item">2일 전</time></div>
                        </PostInfoBodyBox>
                        <PostInfoActionBox className="post-action">
                            <Link href="#" className="btn btn-icon btn-scrap " data-post-id="14516695">
                                <i className="fas fa-bookmark default-text"></i>
                                <i className="fas fa-bookmark active-text"></i>
                            </Link>
                            <DropDownStyle className='drop-down-style'>
                                <button className="btn btn-icon ic-secondary btn-more" type="button" data-toggle="dropdown" aria-expanded="false" aria-label="더보기" title="더보기" onClick={handleDropdownVisibility}>
                                    <i className="fas fa-regular fa-ellipsis"></i>
                                </button>
                                <DropDown visibility={dropdownVisibility}>
                                    <ul id="dropdown-container" className="dropdown-menu dropdown-menu-right">
                                        <li>
                                            <Link className="btn-open-add-collection-modal" href="#" data-post-id="14516695">
                                                <img src="https://d33pksfia2a94m.cloudfront.net/assets/img/collection/add_collection.svg" alt="" className="ic-add-collection" /> 컬렉션에 추가하기
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item btn-share" href="#" data-share-url="https://posty.pe/exks1e" data-blog-title="포포포폿푸" data-post-title="피어슨가 패치노트" data-tags="">
                                                <i className="fa-sharp fa-solid fa-right-from-bracket fa-rotate-270"></i>
                                                <span className="order-2">공유하기</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="#" data-toggle="modal" data-target="#report-modal" data-post-id="14516695">
                                                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                                <span className="order-2">신고하기</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item btn-block-blog" href="#" data-blog-id="99170">
                                                <i className="fa-regular fa-ban"></i>
                                                <span className="order-2">이 채널 보지 않기</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </DropDown>
                            </DropDownStyle>
                        </PostInfoActionBox>
                    </PostInfoBox>
                </PostBox>
            </PostListBox>
        </PostListLayout>
    );
};

export default PostInformation;

const PostListLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostListBox = styled.div`
    /* padding: 20px 2px;
    position: relative;
    display: flex;
    width: 100%;
    word-break: break-all; */
`

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .post {
    display: flex;
    flex: 1;
    word-wrap: break-word;
    }
    .post-info {
    margin-top: 15px;
    display: flex;
    align-items: center;
    }
    .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .text-alpha-black-47 {
    color: rgba(0,0,0,.47)!important;
    }
`;

const SeriesBox = styled.div`
    h5 {
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 400;
    line-height: 135%;
    color: rgba(0,0,0,.54)!important;
    }
`

const PostDetailBox = styled.div`
    display: flex;
    flex: 1;
    word-wrap: break-word;
`;

const PostDataBox = styled.div`
    flex: 1;
    overflow: hidden;
    h3 {
        margin-bottom: 7px;
        font-size: 20px;
        line-height: 135%;
        font-weight: 600;
        color: #000!important;
    }
    .ellipsis-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
    a > div {
        line-height: 145%;
        font-size: 14px;
    }
    .text-alpha-black-47 {
    color: rgba(0,0,0,.47)!important;
    }
    a > div h4 {
        font-size: 15px;
        display: inline;
        font-weight: 600;
        line-height: inherit;
    }
    .divider {
        content: "";
        display: inline-block;
        margin: -0.1em 0.45em 0.1em 0.3em;
        height: 1em;
        vertical-align: middle;
        border-left: 1px solid;
        opacity: .6;
    }
    a > div > p {
        font-size: 15px;
        display: inline;
        margin-top: 0;
        margin-bottom: 1rem;
    }
    .post-tags {
        margin-top: 11px;
    }
    .notice {
        color: #3478FF;
        background: #EBF4FF;    
        font-size: 14px;
        line-height: 20.3px;
        padding: 1px 6px;
        margin-right: 6px;
    } 
    .post-tags > * {
        display: inline-block;
        font-weight: 550;
        text-align: center;
        border-radius: 3px;
    }
`;

const PostDataThumbnailBox = styled.div`
    margin-left: 24px;
    a {
        position: relative;
        display: block;
    }
    a > img {
        width: 144px;
        height: 108px;
        background-color: #F7F7F7;
        border-radius: 8px;
        object-fit: cover;
        vertical-align: middle;
        border-style: none;
    }
`;

const PostInfoBox = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    .user-profile-avatar{
        display: block;
        position: relative;
        margin-right: 8px;
    }
    .avatar-32 {
    width: 32px;
    height: 32px;
    img {
        width: inherit;
        height: inherit;
        border-radius: 50%;
        background-color: #fff;
        object-fit: cover;
        vertical-align: middle;
        border-style: none;
    }
    }
`;

const PostInfoBodyBox = styled.div`
    flex: 1;
    overflow: hidden;
    .user-profile-nickname {
    font-size: 13px;
    line-height: 135%;
    }
    .post-meta {
    position: relative;
    height: 16px;
    margin-top: 1px;
    font-size: 12px;
    line-height: 130%;
    overflow: hidden;
    color: #000;
    }
    .meta-item {
    margin-right: 8px;
    }
    i {
    font-size: 12px;
    margin-right: 3px;
    }
    .fa-heart {
        font-weight : 500;
    }
`;

const PostInfoActionBox = styled.div`
    margin-left: 24px;
    display: flex;
    justify-content: flex-end;
    min-width: 64px;
    position: relative;
    .btn-scrap {
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 7px;
    color: rgba(0,0,0,.47);
    line-height: 24px;
    border: 1px solid transparent;
    }
    .btn {
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
    .btn {
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        font-size: 15px;
        border-radius: 4px;
        background: none;
    }
    .btn {
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 7px;
    color: rgba(0,0,0,.47);
    };
    .btn [class*="fa-"] {
    font-size: 16px;
    vertical-align: top;
    }
    .fas {
    font-weight: 100;
    }
    .active-text {
        display: none;
    }
    .fa-ellipsis {
        font-weight: 900;
    }
    .btn-more {
        border: 1px solid transparent;
    }
    .fa-ban {
        font-weight: 900;
    }
`;

const fadeIn = keyframes`
    0% {
    transform: translateY(-20%);
    }

    100% {
    transform: translateY(0);
    }
`
const fadeOut = keyframes`
    0% {
    transform: translateY(0);
    }

    100% {
        transform: translateY(-10%);
    }
    `

const DropDownStyle = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    .components-dropdown {
        position: relative;
    }
    .dropdown-menu {
        position: absolute;
        display: block;
        top: 100%;
        left: -165px;
        right: 0;
        bottom: auto;
        min-width: 200px;
        margin-top: 4px;
        margin-bottom: 4px;
        color: #606060;
        border-radius: 5px;
        z-index: -1000;
        padding: 0.5rem 0;
        margin: 0.125rem 0 0;
        font-size: 1rem;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.15);
    }

    .btn-more {
        cursor: pointer;
    }
    /* fade in */
    .slide-fade-in-dropdown {
        /* overflow: hidden; */
    }

    .slide-fade-in-dropdown > ul {
        animation : ${fadeIn} .4s ease;
    }

    /* fade out */

    .slide-fade-out-dropdown {
        /* overflow: hidden; */
    }

    .slide-fade-out-dropdown > ul {
        animation : ${fadeOut} 0.4s ease;
        animation-fill-mode : ${fadeOut} forwards;
    }
`;