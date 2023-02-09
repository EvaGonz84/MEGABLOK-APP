import { GlobalStyle } from "../../components/GlobalStyle.styles";
import { Container } from "../../components/popUp/PopUp.styles";
import logo from "../../assets/images/Logo Megablok-54.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";

const HomePage = () => {
  //Global state for the welcome message
  const { registered } = useContext(UserContext);
  //URL
  const wifiNetworksUrl =
    "https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json";
  //State to store the API call response
  const [wifi, setWifi] = useState([]);
  //API call
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(wifiNetworksUrl);
        response = await response.json();
        setWifi(response.networks);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  //Wifi networks
  const wifiNetwork = wifi.map((item) => item.SSID);
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="megablok-logo"></img>
        <h1>Welcome user {registered} </h1>
        <p>Please, select a wifi network and enter the password</p>
        <form>
          <select>
            {wifiNetwork.map((item, i) => {
              return <option key={i}>{item}</option>;
            })}
          </select>
          <input type="text" placeholder="Key" />
          <button>Confirm</button>
        </form>
      </Container>
    </>
  );
};

export default HomePage;
