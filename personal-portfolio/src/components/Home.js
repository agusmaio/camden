import videoCamden from "../assets/img/CamdenVideo.MP4";
import "animate.css";
// import navIcon1 from "../assets/img/whatsapp-white.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import navIcon4 from "../assets/img/tiktok-white.svg";
// import navIcon1 from "../assets/img/whatsapp-red.svg";
// import navIcon2 from "../assets/img/instagram-red.svg";
// import navIcon3 from "../assets/img/tiktok-red.svg";
// import navIcon4 from "../assets/img/facebook-red.svg";
import navIcon1 from "../assets/img/whatsapp-custom.svg";
import navIcon2 from "../assets/img/instagram-custom.svg";
import navIcon3 from "../assets/img/tiktok-custom.svg";
import navIcon4 from "../assets/img/facebook-custom.svg";

export const Home = () => {
  return (
    <div className="home">
      <video className="video" autoPlay muted loop>
        <source src={videoCamden} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="h1-camden">CaMDEN HaiR StuDio</h1>
        <h4 className="h4-camden">Saløn Unisex & Mødern Barbershøp</h4>
        <div className="social-icon">
          <a
            href="https://wa.me/1564508710?text=Hola%20Camden!%20quisiera%20sacar%20turno%20para%20la%20pelu!"
            className="triangulo"
            target="_blank"
          >
            <img className="whts" src={navIcon1} alt="" />
          </a>
          <a
            href="https://www.instagram.com/camden.studio/"
            className="triangulo"
            target="_blank"
          >
            <img src={navIcon2} alt="" />
          </a>
          <a
            href="https://www.tiktok.com/@camden.studio"
            className="triangulo"
            target="_blank"
          >
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
