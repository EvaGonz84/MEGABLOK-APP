import { PopUpContainer, Input, ImgLogo, Button } from "./Form.styles";
import imgLogo from "../../assets/images/logo.png";
import { useContext, useInsertionEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  //Global state for the input value
  const { registered, setRegistered } = useContext(UserContext);

  //Function that stores the input value in the state (Pending validations!!)
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
    <PopUpContainer>
      <ImgLogo src={imgLogo} alt="megablok-logo" />
      <Input
        type="text"
        placeholder="Introduce el número de serie"
        onChange={handleInputChange}
      />
      <Button type="button" onClick={saveSerialNumber}>
        Continúa
      </Button>
    </PopUpContainer>
  );
};

export default Form;
