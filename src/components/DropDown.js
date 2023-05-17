import React, { useState, useEffect } from 'react';

const DropDown = (props) => {
    const { visibility, children } = props;

    const [visibilityAnimation, setVisibilityAnimation] = useState(false);
    const [repeat, setRepeat] = useState(null)

    useEffect(() => {
        if (visibility) {
            clearTimeout(repeat);
            setRepeat(null)
            setVisibilityAnimation(true)
        } else {
            setRepeat(setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400));
        }
    }, [visibility]);

    //Dropdown.js는 이 글(article)에서 만들고자 하는 "애니메이션" 처리를 해줄 컴포넌트. 
    //Dropdown 컴포넌트는 드롭다운 메뉴를 자식으로 받음. 
    //이제 애니메이션을 사용하고자 하는 드롭다운 메뉴를 Dropdown 컴포넌트로 감싸주어 자식으로 만들어줍니다.
    return (
        <article className={`components-dropdown ${visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            {visibilityAnimation && children}
        </article>
    );
};

export default DropDown;