import styled from "styled-components";

const desktopStartWidth = 996;
//Mobile device
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${mobile} {
    width: 80%;
  }

  img {
    width: 100%;
    ${mobile} {
      width: 90%;
    }
  }

  h1 {
    font-size: 40px;
    letter-spacing: 1px;

    ${mobile} {
      font-size: 25px;
    }
  }

  p {
    letter-spacing: 1px;
    font-size: 20px;
    line-height: 1.6;
    ${mobile} {
      font-size: 16px;
    }
  }
`;

export const ContainerForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  select {
    background-color: #f0f0f0;
    border: none;
    padding: 8px 16px;
    border-radius: 2px;
    letter-spacing: 1px;
    outline: none;
    border: 0;
    :focus {
      background-color: white;
    }
  }

  input {
    background-color: #f0f0f0;
    border: none;
    padding: 8px 16px;
    border-radius: 2px;
    letter-spacing: 1px;
    outline: none;
    border: 0;
    :focus {
      border: 1px solid #dc291b;
      background-color: white;
    }
  }

  button {
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
  }
`;
