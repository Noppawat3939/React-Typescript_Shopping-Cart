import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid whitesmoke;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.04);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 320px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.article`
  padding: 10px 15px;

  > h1 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  > span {
    margin: 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-size: 18px;
      font-weight: 500;
    }

    > button {
      display: flex;
      align-items: center;
      column-gap: 6px;
      background: 0;
      text-transform: uppercase;
      font-weight: 600;
      padding: 8px 12px;
      color: #809a6f;
      border-radius: 4px;
      transition: 0.3s ease;
      border: 1px solid #809a6f;

      > svg {
        font-size: 18px;
      }

      &:hover {
        background: #809a6f;
        color: white;
      }
    }
  }
`;
