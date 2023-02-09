import { useContext } from "react";
import { Container, PopUpContainer, Input, Button } from "./PopUp.styles";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle.styles";
import { UserContext } from "../../context/UserProvider";
const PopUp = () => {
  const navigate = useNavigate();
  //Global state for the input value
  const { registered, setRegistered } = useContext(UserContext);

  //Function that stores the input value in the state
  const handleInputChange = (e) => {
    const serialNumber = e.target.value;
    setRegistered(serialNumber);
  };

  //Function that stores the value in the localstorage and accesses the HomePage
  const saveSerialNumber = () => {
    localStorage.setItem("number", registered);
    navigate("/home");
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <PopUpContainer>
          <Input
            type="text"
            placeholder="Enter a number"
            onChange={handleInputChange}
          />
          <Button onClick={saveSerialNumber}>Sign up</Button>
        </PopUpContainer>
      </Container>
    </>
  );
};

export default PopUp;
