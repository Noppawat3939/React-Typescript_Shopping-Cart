import styled from "styled-components";

type Props = {
  cartOpen: boolean;
};

export const Container = styled.section`
  background: white;
  padding: 20px 20px 100px;
  position: fixed;
  top: auto;
  right: ${({ cartOpen }: Props) => (cartOpen ? "0" : "-100%")};
  width: 500px;
  height: 100%;
  color: black;
  z-index: 100;
  transition: 0.3s ease;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #eeeeee;
    opacity: 0.7;

    &:hover {
      background: #82a284;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.35em;
  right: 0.25em;
  font-size: 24px;
  background: transparent;
  transition: 0.3s ease;

  &:hover {
    color: #446a46;
  }
`;

export const Content = styled.div`
  max-height: max-content;
  font-size: 20px;
  letter-spacing: 2px;

  > h2 {
    font-weight: 600;
    font-size: 20px;
    color: #446a46;
    letter-spacing: 1.8px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    > span {
      color: #383838;
      font-size: 17px;
      display: flex;
      align-items: center;
      column-gap: 4px;
    }
  }
`;
