import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;

  .button {
    text-align: center;
    border: 1px solid #ccc;
    width: 100px;
    margin-left: 5px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }

  .menu {
    position: absolute;
    top: 100%;
    left: 10px;
    width: 200px;
    padding: 0;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};

    & > ul {
      // 중첩 리스트 스타일링 방지
      list-style-type: none;

      & > li {
        // 중첩 리스트 스타일링 방지
        border-bottom: 1px solid #ccc;
        margin-left: 2px;
      }

      & > li:last-child {
        // 중첩 리스트 스타일링 방지
        border-bottom: none;
      }
    }
  }
`;
