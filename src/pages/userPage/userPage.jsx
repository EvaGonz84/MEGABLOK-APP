import React from "react";
import { GlobalStyle } from "../../components/GlobalStyle.styles";
import { TitleUserPage } from "./userPage.styles";

const userPage = () => {
  return (
    <>
      <GlobalStyle />
      <TitleUserPage>Aquí puedes gestionar tu taquilla</TitleUserPage>
    </>
  );
};

export default userPage;
