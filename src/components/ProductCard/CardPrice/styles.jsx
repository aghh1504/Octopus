import styled from "styled-components";

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const Counter = styled.div`
  display: inherit;
  align-items: inherit;
  position: relative;

  .qty {
    position: absolute;
    top: -20px;
    width: 100%;
    text-align: center;
    content: "";
    display: inline-block;
    color: #617ba5;
    font-weight: bold;
  }

  span {
    padding: 0 20px;
    font-size: 30px;
  }
  button {
    color: #fff;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: #284b86;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  font-size: 30px;
  color: #fff;
  font-weight: 300;
  background: linear-gradient(
    to bottom,
    rgba(245, 152, 202, 1) 0%,
    rgba(239, 1, 124, 1) 100%
  );
  border: 2px solid #cf0677;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
