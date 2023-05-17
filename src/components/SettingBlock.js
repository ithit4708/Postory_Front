import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SettingBoxLayout } from './SettingAccount';

const SettingBlock = () => {
    let cnt = 1;

    return (
        <SettingBlockLayout className="container container-md">
            <SettingBlockCol className="section container">
                <BlockChannelHeadBox className="section-header row row-fix">
                    <div className="section-label">{cnt} 개의 차단된 채널</div>
                </BlockChannelHeadBox>
                <BlockChannelListBox className="row row-fix">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item subscription-item">
                            <div className="media-profile">
                                <Link className="blog-avatar" href="#">
                                    <img className="blog-img" src="https://d33pksfia2a94m.cloudfront.net/assets/img/avatar/blog_blank.png" alt="" />
                                </Link>
                                <div className="media-body d-flex flex-column justify-content-between">
                                    <Link href="#">
                                        <div className="media-title text-truncate py-0">@chandeok_27</div>
                                        <div className="media-text text-truncate d-none d-md-block">안녕하세요 웹툰작가 찬덕입니다.
                                            contact : water_lily00@naver.com
                                        </div>
                                    </Link>
                                    <div className="user-list d-flex mt-md-2 text-truncate">
                                        <Link className="d-inline-flex align-items-center" href="#">
                                            <div className="user-avatar-xs" style={{ backgroundImage: "url(https://d3mcojo3jv0dbr.cloudfront.net/2020/01/01/23/05/06a6496e0abd3662bbc14449629a034c.jpeg?w=64&amp;h=64&amp;q=65)" }}></div>
                                            <span>찬덕</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-secondary btn-delete-blog-block" type="button" data-blog-id="680196">
                                차단 해제
                            </button>
                        </div>
                    </div>
                </BlockChannelListBox>
                <PageHandleNav className="nav-pagination">
                    <ul className="pagination ">
                        <li className="page-item disabled"><Link className="page-link page-link-prev" href="javascript:void(0);" aria-label="이전"><i className="fa-solid fa-chevron-left"></i></Link></li>
                        <li className="page-item active"><Link className="page-link" href="?page=1"><span>1</span></Link></li>
                        <li className="page-item disabled"><Link className="page-link page-link-next" href="javascript:void(0);" aria-label="다음"><i className="fa-solid fa-chevron-right"></i></Link></li>
                    </ul>
                </PageHandleNav>
            </SettingBlockCol>
        </SettingBlockLayout>
    );
};

export default SettingBlock;

const SettingBlockLayout = styled(SettingBoxLayout)`
    .container {
        padding-right: 26px;
        padding-left: 26px;
    }
`;
const SettingBlockCol = styled.div`
    margin-top: 112px;
    margin-bottom: 72px;
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .row-fix {
        margin-right: 0;
        margin-left: 0;
    }
`;

const BlockChannelHeadBox = styled.div`
    margin-bottom: 12px;
    .section-label {
        font-weight: 500;
        font-size: 14px;
        color: #909090;
    }
`

const BlockChannelListBox = styled.div`
    .list-group {
        position: relative;
        z-index: 10;
        width: 100%;
        max-width: 100%;
        border-top: 1px solid rgba(0,0,0,.05);
        border-bottom: 1px solid rgba(0,0,0,.05);
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
    }
    .list-group-item {
        border-bottom: 0;
        border-top: 0;
        border-right: 0;
        border-left: 0;
        border-radius: 0;
    }
    .subscription-item {
        margin-top: 0;
        padding: 18px 0!important;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .media-profile {
        width: calc(91% - 68px);
        display: flex;
        align-items: center;
        max-width: 100%;
        line-height: 1;
        overflow: hidden;
        white-space: nowrap;
        flex-flow: row wrap;
    }
    .blog-avatar {
        margin-right: 16px;
        border-radius: 7.5%;
        position: relative;
        overflow: hidden;
        background-color: #fff;
    }
    .blog-img {
        object-fit: cover;
        width: 64px;
        min-width: 64px;
        max-width: 64px;
        height: 64px;
        max-height: 64px;
        vertical-align: top;
    }
    .media-body {
        display: flex!important;
        justify-content: space-between!important;
        flex-direction: column!important;
        max-width: 100%;
        overflow: hidden;
    }
    .media-title {
        font-weight: 500;
        font-size: 17px;
        line-height: 20.4px;
        margin: 0;
        padding: 2px;
    }
    .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .py-0 {
        padding-bottom: 0!important;
        padding-top: 0!important;
    }
    .media-text {
        white-space: nowrap;
        font-size: 13px;
        line-height: 15.6px;
        padding: 1px 0;
        margin: 0;
    }
    .d-md-block {
    display: block!important;
    }
    .subscription-item, .user-list {
    font-size: 13px;
    line-height: 15.6px;
    }

    .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .mt-md-2, .my-md-2 {
    margin-top: 0.5rem!important;
    }
    .d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
    }
    .align-items-center {
    align-items: center!important;
    }
    .d-inline-flex {
    display: inline-flex!important;
    }
    div[class*="user-avatar"], span[class*="user-avatar"] {
    background-color: #fff;
    display: inline-block;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
    -moz-box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    }

    div[class*="avatar-xs"], img[class*="avatar-xs"] {
    width: 1.25rem;
    height: 1.25rem;
    }
    [class*="avatar-"] {
    margin-right: 8px;
    }
    .btn {
        display: inline-flex;
        border-radius: 4px;
        line-height: 1.5rem;
        background: none;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        align-items: center;
        color: #000;
        background-color: #fff;
        border-color: #ccc;
        cursor: pointer;
        &:hover {
            color : rgb(53,149,246);
            border-color : rgb(53,149,246);
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
    }
`;

const PageHandleNav = styled.nav`
    padding: 30px 0;
    margin: 0 auto;
    margin-bottom: -36px;
    .pagination {
    margin: 0;
    -ms-flex-pack: center;
    justify-content: center;
    }
    .pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    }
    .pagination .page-link { 
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        height: 32px;
        padding: 5px;
        color: #dee2e6;
        margin: 0 4px;
    }
    .active .page-link {
        color: #3478ff;
        border: 1px solid;
        border-radius: 3px;
    }
`;
