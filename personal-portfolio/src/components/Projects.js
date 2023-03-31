import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import cutsBoy from "../assets/img/staff.png";
import staffCamden from "../assets/img/staffCamden.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/color.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Color",
      description: "Estilos",
      imgUrl: cutsBoy,
    },
    {
      title: "Corte",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Barber",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Corte2",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Corte3",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Corte4",
      description: "Description",
      imgUrl: cutsBoy,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3 className="h3-projects">
                    Somos ese salon de tu sueños, te vas con el mejor look sino
                    que también habiendo vivido una experiencia realmente
                    diferente.
                  </h3>
                  <h4 className="p-projects">
                    A continuación, te dejamos un road de todo lo que es nuestra
                    pelu.
                  </h4>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Trabajos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">StaFF</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">CoKtails</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="staff-card">
                          <img src={staffCamden} alt="" />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
