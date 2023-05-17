import React from 'react';
import styled from 'styled-components';
import { SettingBoxLayout, SwitchSpan, FormFooterBox } from './SettingAccount';
import { SettingProfileForm, MessageControlBox } from './SettingProfile';

const SettingNoti = () => {
    return (
        <SettingNotiLayout>
            <SettingNotCol>
                <SettingNotiForm classNameName='section form'>
                    <div className="form-group">
                        <h1 className="section-title-lg">알림</h1>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">댓글</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">내 포스트에 새 댓글이 등록되었을 때 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">좋아요</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">내 포스트를 누군가 좋아했을 때 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">댓글좋아요</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">내 댓글을 누군가 좋아했을 때 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">구매/후원</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">내 포스트를 누군가 구매하거나 후원했을 때 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">구독</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">내 채널이나 내가 참여한 팀 채널을 누군가 구독했을 때 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">멤버십</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">멤버십 가입과 종료에 관한 알림을 받아요.</small>
                    </div>
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">구독 새 글</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">구독중인 채널에 새 포스트가 등록되면 알림을 받아요.</small>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label className="switch-control switch-block">
                            <span className="switch-description">이벤트 및 작품 추천</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <div><small className="form-text text-muted">푸시 알림과 가입 이메일을 통해 유용한 이벤트, 작품 추천 등 포스타입의 다양한 소식과 혜택 정보를 받아요.</small></div>
                        <div className="mt-2"><small className="text-primary"><b>2023년 03월 15일 거부</b></small></div>    </div>
                    <div className="form-group allow-ad-message-at-night">
                        <label className="switch-control switch-block">
                            <span className="switch-description">밤에도 이벤트 및 작품 추천 알림 받기</span>
                            <NotiSwitchSpan>
                                <label className="switch">
                                    <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                    <span className="slider round"></span>
                                </label>
                            </NotiSwitchSpan>
                        </label>
                        <small className="form-text text-muted">밤 9시부터 아침 8시까지 이벤트와 작품 추천 알림을 받아요. 동의하면 이벤트 및 작품 추천 알림 설정이 함께 활성화됩니다.</small>
                    </div>
                    <NotiButton>
                        <button className="btn btn-primary px-4 btn-submit">변경 내용 저장</button>
                    </NotiButton>
                </SettingNotiForm>
            </SettingNotCol>
        </SettingNotiLayout>
    );
};

export default SettingNoti;

const SettingNotiLayout = styled(SettingBoxLayout)``;

const SettingNotCol = styled(MessageControlBox)``

const SettingNotiForm = styled(SettingProfileForm)``;

const NotiSwitchSpan = styled(SwitchSpan)`
    .switch {
        width: 45px;
        height: 20px;
    }
    .slider:before {
        height: 15px;
        width: 15px;
        left: 2px;
        bottom: 2.5px;
    }
`

const NotiButton = styled(FormFooterBox)``