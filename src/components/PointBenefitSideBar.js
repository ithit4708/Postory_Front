import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const ToolTipStyle = styled.div`
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    padding: 20px;
    gap: 10px;
    width: 236px;
    background: #FFF;
    box-shadow: none;
`;

const PointBenefitSideBar = (props) => {
    const { type } = props;

    return (
        <>
            {type === undefined ?
                <SideBarLayout className="pt-sidebar">
                    <PointBalanceBox className="point-balance">
                        <PtBtMainBox className="point-balance-main">
                            <div className="point-balance-text">
                                <div className="point-balance-label">보유 포인트</div>
                                <div className="point-balance-value">
                                    <span>0</span><abbr title="포인트">P</abbr>
                                </div>
                            </div>
                            <ButtonBox className="point-balance-btn">
                                <Link className="btn btn-primary btn-pill" href="https://www.postype.com/point/deposit">충전 <i className="fa-solid fa-chevron-right"></i></Link>
                            </ButtonBox>
                        </PtBtMainBox>
                        <PtBtSubBox className="point-balance-sub">
                            <Link className="automation-status " href="https://www.postype.com/point/deposit/auto">
                                <span>포인트 자동 충전</span>
                                <span>OFF</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </PtBtSubBox>
                    </PointBalanceBox>
                    <PointSideBarBox className="pt-sidebar-nav">
                        <Link href="https://www.postype.com/point/deposit/list">
                            <span className="pt-sidebar-nav-icon"><i className="fas fa-light fa-coins"></i></span>
                            <span className="pt-sidebar-nav-label">포인트 내역</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </PointSideBarBox>
                </SideBarLayout >
                : type === 'earnings' ?
                    <SideBarLayout className="pt-sidebar">
                        <PointBalanceBox className="point-balance">
                            <PtBtMainBox className="point-balance-main">
                                <div className="point-balance-text">
                                    <div className="point-balance-label">출금 가능 금액</div>
                                    <div className="point-balance-value">
                                        <span>0</span>
                                        <abbr title="포인트"> 원</abbr>
                                    </div>
                                </div>
                            </PtBtMainBox>
                            <PtBtSubBox className="point-balance-sub">
                                <div className="point-balance-type">
                                    멤버십 수익
                                    <b>0 <abbr title="포인트"> 원</abbr></b>
                                </div>
                                <div className="point-balance-type">
                                    포스트 수익
                                    <b>0<span> P</span></b>
                                </div>
                                <div className="point-balance-type">
                                    <span>스토어 수익
                                        <Tooltip
                                            // options
                                            position="bottom"
                                            trigger="click"
                                            theme='light'
                                            html={(
                                                <ToolTipStyle>
                                                    주문이 구매확정되면 수익에 더해져요.
                                                </ToolTipStyle>
                                            )}
                                        >
                                            <p>
                                                <i className="fas fal fa-question-circle fa-xs ml-1"></i>
                                            </p>
                                        </Tooltip>
                                    </span>
                                    <b>0<abbr title="포인트"> 원</abbr></b>
                                </div>
                            </PtBtSubBox>
                        </PointBalanceBox>
                        <PointSideBarBox className="pt-sidebar-nav">
                        </PointSideBarBox>
                    </SideBarLayout >
                    : <></>
            }
        </>
    );
};

export default PointBenefitSideBar;

const SideBarLayout = styled.div`
    flex: 0 1 300px;
    max-width: 300px;
    margin-right: 60px;
    padding: 40px 0;
    overflow-x: initial;
    width : 100%;
    abbr[title] {
    text-decoration: none;
    cursor: initial;
    }
`;

const PointBalanceBox = styled.div`
    padding: 0 24px;
    font-size: 14px;
    line-height: 21px;
    border-radius: 6px;
    background-color: #f5f8ff;
`;

const PtBtMainBox = styled.div`
    padding: 32px 0;
    display: flex;
    align-items: center;
    .point-balance-text {
    flex: 1;
    }
    .point-balance-label {
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    }
    .point-balance-value {
    font-weight: 600;
    font-size: 26px;
    line-height: 1.2;
    }
    abbr[title] {
    text-decoration: none;
    cursor: initial;
    }
`;
const ButtonBox = styled.div`
    .btn-primary {
    padding: 7px 17px 7px 21px;
    color: #fff;
    background-color: #3478ff;
    border-color: #3478ff;
    &:hover {
        color: #fff;
        background-color: #006de0;
        border-color: #006de0;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    }
    .btn-pill {
    border-radius: 10rem;
    }
    .btn {
        display: inline-flex;    
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 15px;
        line-height: 1.5rem;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
    }
    .fa-chevron-right {
    margin-left: 4px;
    font-size: 80%;
    }
`;
const PtBtSubBox = styled.div`
    border-top: 1px solid rgba(0,0,0,.05);
    padding: 16px 0;
    .automation-status {
    color: rgba(0,0,0,.47);
    }
    * {
    display: flex;
    align-items: center;
    padding: 4px 0;
    line-height: 20px;
    }
    .automation-status>span+span {
    margin-left: 4px;
    }
    .point-balance-type {
    position: relative;
    justify-content: space-between;
    }
    .point-balance-type b {
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0;
    }
    [class*="fa-"].fa-xs {
    font-size: 12px;
    font-weight: 300;
    }
    .fa-question-circle {
        cursor: pointer;
    }
`;

const PointSideBarBox = styled.div`
    margin-top: 16px;
    font-size: 16px;
    line-height: 20px;
    a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 14px 0;
    }
    .pt-sidebar-nav-icon {
    width: 32px;
    margin: 0 8px -1px 0;
    text-align: center;
    font-size: 19px;
    line-height: 21px;
    }
    .pt-sidebar-nav-label {
    flex: 1;
    }
    .fa-coins {
    font-size: 20px;
    }
    .fa-chevron-right {
    font-size: 16px;
    line-height: 20px;
    color: rgba(0,0,0,.33);
    }
`;