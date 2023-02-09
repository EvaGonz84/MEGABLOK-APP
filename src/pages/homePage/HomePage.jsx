import { GlobalStyle } from "../../components/GlobalStyle.styles";
import { Container } from "../../components/popUp/PopUp.styles";
import logo from "../../assets/images/Logo Megablok-54.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  //Global state for the welcome message
  const { registered } = useContext(UserContext);
  //State that validate password
  const [password, setPassword] = useState(null);
  //URL wifi
  const wifiNetworksUrl =
    "https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json";
  //URL valid password
  const validPasswordUrl =
    "https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/SetWifi.json";
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
        title: "Please,validate your password",
        input: "text",
        inputPlaceholder: "Enter your password",
      });
      navigate("/user");
    }
  }, [password]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="megablok-logo"></img>
        <h1>Welcome user {registered} </h1>
        <p>Please, select a wifi network and enter the password</p>
        <form onSubmit={handleSubmit}>
          <select>
            {wifiNetwork.map((item, i) => {
              return <option key={i}>{item}</option>;
            })}
          </select>
          <input type="text" placeholder="Key" />
          <button type="submit">Confirm</button>
        </form>
      </Container>
    </>
  );
};

export default HomePage;
