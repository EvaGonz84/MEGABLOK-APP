import { PopUpContainer, Input, Button, ImgLogo } from "./Form.styles";
import imgLogo from "../../assets/images/logo.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  //Global state for the input value
  const { registered, setRegistered } = useContext(UserContext);

  //Function that stores the input value in the state
  const handleInputChange = (e) => {
    const serialNumber = e.target.value;
    setRegistered(serialNumber);
  };
  //Function that stores the value in the localstorage and accesses the HomePage
  const saveSerialNumber = (e) => {
    e.preventDefault();
    localStorage.setItem("number", registered);
    navigate("/home");
  };
  return (
    <PopUpContainer onSubmit={saveSerialNumber}>
      <ImgLogo src={imgLogo} alt="megablok-logo" />
      <Input
        type="text"
        placeholder="Introduce el número de serie"
        onChange={handleInputChange}
      />
      <Button type="button">Continúa</Button>
    </PopUpContainer>
  );
};

export default Form;
