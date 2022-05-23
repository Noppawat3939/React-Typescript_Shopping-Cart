import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: linear-gradient(to bottom, #5b6d5b, #5f7161);
  color: #e4efe7;

  > h1 {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  > button {
    font-size: 24px;
    color: inherit;
    background: 0;
    transition: 0.3s ease;
    z-index: 2;

    &:hover {
      transform: scale(1.25);
    }
  }

  > span {
    position: absolute;
    right: 50px;
    top: 6px;
    background: #feb139;
    padding: 5px;
    font-size: 15px;
    font-weight: bolder;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }
`;
