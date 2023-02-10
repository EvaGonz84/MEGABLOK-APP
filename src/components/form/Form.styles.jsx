import styled from "styled-components";

const desktopStartWidth = 996;
//Mobile device
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const PopUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b2b2b2;
  box-shadow: 10px;
  gap: 40px;
  width: 30%;
  margin: auto;
  height: 500px;
  box-shadow: 20px 20px 50px grey;

  ${mobile} {
    width: 80%;
    height: 300px;
  }
`;

export const ImgLogo = styled.img`
  width: 100px;
  height: 100px;
  ${mobile} {
    width: 80px;
    height: 80px;
  }
`;

export const Input = styled.input`
  background-color: #f0f0f0;
  border: none;
  padding: 12px 16px;
  border-radius: 2px;
  letter-spacing: 1px;
  width: 70%;
  outline: none;
  border: 0;

  :focus {
    border: 1px solid #dc291b;
    background-color: white;
  }
`;
export const Button = styled.button`
  background-color: #ce2519;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: 2px;
  padding: 10px 28px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;

  ${mobile} {
    padding: 8px 14px;
    font-size: 16px;
  }

  &:hover {
    background-color: #ac150a;
    transition: 0.5s all ease;
  }
`;
