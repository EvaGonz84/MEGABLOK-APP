import styled from "styled-components";

const desktopStartWidth = 996;
//Mobile device
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PopUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b2b2b2;
  box-shadow: 10px;
  gap: 30px;
  width: 40%;
  margin: auto;
  height: 400px;

  ${mobile} {
    width: 80%;
    height: 300px;
  }
`;

export const Input = styled.input`
  background-color: #f0f0f0;
  border: none;
  padding: 12px 16px;
  border-radius: 2px;
  letter-spacing: 1px;
  width: 60%;

  :focus {
    border: 1px solid #dc291b;
  }
`;

export const Button = styled.button`
  background-color: #ff8c32;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: 2px;
  padding: 8px 16px;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background-color: #b96d33;
  }
`;
