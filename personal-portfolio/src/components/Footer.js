import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/whatsapp-custom.svg";
import navIcon2 from "../assets/img/instagram-custom.svg";
import navIcon3 from "../assets/img/tiktok-custom.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <div class="logo-container-footer">
              <div class="logo-footer"></div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" className="triangulo">
                <img className="whts" src={navIcon1} alt="" />
              </a>
              <a href="#" className="triangulo">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#" className="triangulo">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p style={{ color: "rgba(220, 169, 49, 255)" }}>
              Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
