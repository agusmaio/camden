import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import backCamden from "../assets/img/angryimg.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <img className="backContact" src={backCamden} alt="" />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                // <img
                //   className={
                //     isVisible ? "animate__animated animate__zoomIn" : ""
                //   }
                //   src={contactImg}
                //   alt="Contact Us"
                // />
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <p style={{ color: "rgba(220, 169, 49, 255)" }}>
                    Todos los días elegís quien querés ser. Nosotros nos
                    encargamos de que seas tú mejor vos. ¿Tenés ideas locas y
                    descabelladas? ¿Te gusta correr riesgos y ganar? Entonces
                    CAMDEN STUDIO es para vos.
                  </p>
                  <p style={{ color: "rgba(220, 169, 49, 255)" }}>
                    estamos en el corazon de villa del parque
                  </p>
                  <p style={{ color: "rgba(220, 169, 49, 255)" }}>
                    martes a sabado
                  </p>
                  <p style={{ color: "rgba(220, 169, 49, 255)" }}>10 a 20hs</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <h2
                    style={{
                      color: "rgba(220, 169, 49, 255)",
                      textShadow: "7px 0px 8px rgba(220,169,49,0.6)",
                    }}
                  >
                    Visitanos
                  </h2>
                  {/* <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form> */}
                  <div className="maps">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.0304515258209!2d-58.49733577075015!3d-34.60108129488098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb72d24c8e179%3A0x7077f75f33002511!2sPeluquer%C3%ADa%20%26%20Barberia%20-%20CAMDEN%20STUDIO!5e0!3m2!1ses!2sar!4v1679890396329!5m2!1ses!2sar"
                      width="500"
                      height="350"
                      style={{ border: 3, borderRadius: "30px", opacity: 0.85 }}
                    ></iframe>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
