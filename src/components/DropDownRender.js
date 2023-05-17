import React, { useState } from 'react';
import DropDown from './DropDown';
import styled, { keyframes } from 'styled-components';

const DropDownRender = () => {
    //DOM에 드롭다운 메뉴가 추가가 될지 안될지를 결정할 state를 선언.
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    const handleDropdownVisibility = (e) => {
        setDropdownVisibility(!dropdownVisibility)
    }

    return (
        <DropDownStyle className='DropDownRender'>
            <button onClick={handleDropdownVisibility}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
            </button>
            <DropDown visibility={dropdownVisibility} >
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                </ul>
            </DropDown>
        </DropDownStyle>
    );
};

export default DropDownRender;

const fadeIn = keyframes`
    0% {
    transform: translateY(-100%);
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
    transform: translateY(-100%);
    }
`

const DropDownStyle = styled.div`
/* fade in */
.slide-fade-in-dropdown {
    overflow: hidden;
}

.slide-fade-in-dropdown > ul {
    animation : ${fadeIn} .4s ease
}

/* fade out */
.slide-fade-out-dropdown {
    overflow: hidden;
}

.slide-fade-out-dropdown > ul {
    animation : ${fadeOut} 0.4s ease;
    animation-fill-mode : ${fadeOut} forwards
}
`;