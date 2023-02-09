import { Container } from "./PopUp.styles";
import { GlobalStyle } from "../GlobalStyle.styles";
import Form from "../form/Form";

const PopUp = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default PopUp;
