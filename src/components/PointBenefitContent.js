import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PointBenefitContent = (props) => {
    const { type } = props;

    const [transactionHistory, setTransactionHistory] = useState(true);
    // if (true) {
    //만약 데이터베이스를 확인해서 구매/후원 내역이 있다면 true로 바뀌게 함수 코딩
    // setTransactionHistory(true);
    // }

    //만약 transactionHistory가 true이고 그것이 구매냐 후원이냐에 따라 이름이 변경됨.
    let transactionType = "purchase";
    let transactionText = "구매"
    //구매테이블에서 가져온 데이터이면 그대로
    //후원테이블에서 가져온 데이터이면 변경
    //let transactionType = "support";
    //let transactionText = "후원"

    return (
        <TransactionLayout className='pt-content'>
            {   //"내 포인트" 페이지 이면서 구매/후원 내역이 없을때
                type === undefined && transactionHistory === false ?
                    <>
                        <TransactionHeadBox className='pt-secion-header'>
                            <h2 className="pt-section-title">최근 구매/후원 내역</h2>
                        </TransactionHeadBox>
                        <EmptyListBox className="empty-list">
                            <div className="error-icon error-icon-bg-circle">
                                <i className="fas fa-sharp fa-light fa-receipt"></i>
                            </div>
                            <div className="error-title">아직 구매 후원한 내역이 없어요</div>
                            <div className="error-message">포스타입에서 작품을 구매하고 후원해보세요</div>
                        </EmptyListBox>
                    </>
                    : type === undefined && transactionHistory === true ?
                        <TransactionListBox className={"transaction-item " + transactionType}>
                            <TransactionMsg className="transaction-item-message">
                                <h3 className="transaction-item-title">
                                    <Link className="" href="https://www.postype.com/profile/@1js79j">
                                        <b>민쾅</b>
                                    </Link>
                                    프로필로 {transactionText}했어요.
                                </h3>
                                <div className="transaction-item-text">
                                    <b className="point-value"><span>100</span><abbr className="point-unit" title="포인트">P</abbr></b>
                                    <time>2023.03.23. 19:23:28</time>
                                </div>
                            </TransactionMsg>
                            <TransactionObj>
                                <Link className="transaction-object" href="https://rapop2340.postype.com/post/13988694" title="포스트 보기 - 피어슨가 4화">
                                    <div className="transaction-object-img" style={{ backgroundImage: "url(https://d3mcojo3jv0dbr.cloudfront.net/2023/05/09/23/30/02150b74ac57368683d3194b356b602c.png?w=128&amp;h=128&amp;q=65)" }}></div>
                                    <div className="transaction-object-body">
                                        <div className="transaction-object-eyebrow" aria-label="시리즈">피어슨가</div>
                                        <h4 className="transaction-object-title">
                                            <span>피어슨가 4화</span>
                                        </h4>
                                        <div className="transaction-object-text" aria-label="크리에이터">래팝</div>
                                    </div>
                                </Link>
                            </TransactionObj>
                        </TransactionListBox>
                        : type === 'earnings' && transactionHistory === false ?
                            <>
                                <TransactionHeadBox className='pt-secion-header'>
                                    <h2 className="pt-section-title">최근 수익 내역</h2>
                                </TransactionHeadBox>
                                <EmptyListBox className="empty-list">
                                    <div className="error-icon error-icon-bg-circle">
                                        <i className="fas fa-sharp fa-light fa-receipt"></i>
                                    </div>
                                    <div className="error-title">아직 수익이 발생한 내역이 없어요</div>
                                    <div className="error-message">크리에이터가 되어 수익을 창출해보세요!</div>
                                </EmptyListBox>
                            </>
                            : type === 'earnings' && transactionHistory === true ?
                                <TransactionListBox className={"transaction-item " + transactionType}>
                                    <TransactionMsg className="transaction-item-message">
                                        <h3 className="transaction-item-title">
                                            <Link className="" href="https://www.postype.com/profile/@1js79j">
                                                <b>민쾅</b>
                                            </Link>
                                            님이 {transactionText}했어요.
                                        </h3>
                                        <div className="transaction-item-text">
                                            <b className="point-value"><span>100</span><abbr className="point-unit" title="포인트">P</abbr></b>
                                            <time>2023.03.23. 19:23:28</time>
                                        </div>
                                    </TransactionMsg>
                                    <TransactionObj>
                                        <Link className="transaction-object" href="https://rapop2340.postype.com/post/13988694" title="포스트 보기 - 피어슨가 4화">
                                            <div className="transaction-object-img" style={{ backgroundImage: "url(https://d3mcojo3jv0dbr.cloudfront.net/2023/05/09/23/30/02150b74ac57368683d3194b356b602c.png?w=128&amp;h=128&amp;q=65)" }}></div>
                                            <div className="transaction-object-body">
                                                <div className="transaction-object-eyebrow" aria-label="시리즈">피어슨가</div>
                                                <h4 className="transaction-object-title">
                                                    <span>피어슨가 4화</span>
                                                </h4>
                                                <div className="transaction-object-text" aria-label="크리에이터">래팝</div>
                                            </div>
                                        </Link>
                                    </TransactionObj>
                                </TransactionListBox>
                                : <></>
            }
        </TransactionLayout>
    );
};

export default PointBenefitContent;

const TransactionLayout = styled.div`
    flex: 0 1 calc(100% - 360px);
    max-width: calc(100% - 360px);
    margin-right: auto;
    margin-left: auto;
    padding: 40px 0 100px;
    overflow-x: initial;
`;
const TransactionHeadBox = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 12px 0;
    h2{
        font-size: 22px;
        line-height: 28px;
        font-weight: 550;
        flex : 1;
    }
`;

const EmptyListBox = styled.div`
    padding: 80px 40px 0;
    text-align: center;
    .error-icon.error-icon-bg-circle {
    background-color: #f5faff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .error-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 32px;
    }
    i {
        font-size: 32px;
        color: #3478ff;
    }
    .error-title {
        color: rgba(0,0,0,.6);
        font-size: 18px;
        line-height: 21px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .error-message {
        font-size: 15px;
        line-height: 22px;
        color: rgba(0,0,0,.47);
        max-width: 320px;
        margin: 0 auto 60px;
    }
`;

const TransactionListBox = styled.div`
    position: relative;
    padding: 24px 0;
    border-bottom: 1px solid rgba(0,0,0,.05);
`;

const TransactionMsg = styled.div`
    margin-bottom: 16px; 
    .transaction-object {
    display: flex;
    background-color: #fff;
    border-radius: 6px;
    transition: background-color .15s ease-in-out;
    }   
    .transaction-item-title {
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    }
    b {
    font-weight: 700;
    }
    .transaction-item-text {
    font-size: 14px;
    line-height: 19px;
    }
    .point-value {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 15px;
    line-height: 19px;
    }
    abbr[title] {
    text-decoration: none;
    cursor: initial;
    }
    .point-value+time {
    font-size: 13px;
    color: rgba(0,0,0,.43);
    }
`;

const TransactionObj = styled.div`
    .transaction-object {
    display: flex;
    }
    .transaction-object-img {
    display: block;
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    margin-right: 14px;
    background: url(/assets/img/brand/empty_logo_square.png) no-repeat center;
    background-size: cover;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
    }
    .transaction-object-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    }
    .transaction-object-body>* {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .transaction-object-eyebrow {
    margin-bottom: 3px;
    font-size: 13px;
    line-height: 16px;
    color: rgba(0,0,0,.50);
    }
    .transaction-object-title {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 15px;
    line-height: 17px;
    }
    .transaction-object-text {
    margin-top: 6px;
    font-size: 12px;
    line-height: 14px;
    }
`