import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 10px 0 20px;

  > h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 18px;
    letter-spacing: 2px;
  }
`;

export const Image = styled.img`
  max-width: 40%;
  max-height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > span {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    border: 1px solid lightgray;
    padding: 8px 6px;
    border-radius: 4px;

    > div:nth-of-type(1) {
      line-height: 1.5em;
      font-size: 15px;
      color: #303030;
    }

    > div:nth-of-type(2) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      > button {
        font-size: 20px;
        font-weight: 600;
        width: 25px;
        height: 25px;
        background: #82a284;
        opacity: 0.7;
        border-radius: 4px;
        transition: 0.35s ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
