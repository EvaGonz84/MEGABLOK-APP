import { GlobalStyle } from "../../components/GlobalStyle.styles";
import { Container } from "../../components/popUp/PopUp.styles";
import logo from "../../assets/images/by_megablok-09_blanco-10-10.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ContainerHome, ContainerForm } from "./HomePage.styles";

//URL wifi
const wifiNetworksUrl =
  "https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json";
//URL valid password
const validPasswordUrl =
  "https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/SetWifi.json";

const HomePage = () => {
  //Global state for the welcome message
  const { registered } = useContext(UserContext);
  //State that validate password
  const [password, setPassword] = useState(null);

  //State to store the API call networks response
  const [wifi, setWifi] = useState([]);
  //API call showing networks
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(wifiNetworksUrl);
        response = await response.json();
        setWifi(response.networks);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  //Wifi networks
  const wifiNetwork = wifi.map((item) => item.SSID);

  const navigate = useNavigate(); //Redirect to userPage
  //Function that validates the password
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        let response = await fetch(validPasswordUrl);
        response = await response.json();
        setPassword(response.valid);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  //Check when password status changes
  useEffect(() => {
    if (password) {
      Swal.fire({
        title: "Por favor, introduce la clave de instalación",
        input: "text",
        inputPlaceholder: "Clave",
      });
      navigate("/user");
    }
  }, [password]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <ContainerHome>
          <img src={logo} alt="megablok-logo"></img>
          <h1>Bienvenido a nuestra web usuario:{registered} </h1>
          <p>Por favor, selecciona una red WIFI e introduce una contraseña</p>
          <ContainerForm>
            <form onSubmit={handleSubmit}>
              <select>
                {wifiNetwork.map((item, i) => {
                  return <option key={i}>{item}</option>;
                })}
              </select>
              <input type="text" placeholder="Contraseña" />
              <button type="submit">Entrar</button>
            </form>
          </ContainerForm>
        </ContainerHome>
      </Container>
    </>
  );
};

export default HomePage;
