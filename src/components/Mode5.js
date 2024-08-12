import { Container, Row, Col, Card, Image } from "react-bootstrap";
import BelajarImage from "../assets/image/Belajar.png";
import KuisImage from "../assets/image/Kuis.png";

const Mode5 = () => {
  return (
    <div className="mode">
      <Container>
        <br />
        <h1 className="p-10 m-5 text-center">Sandhangan I</h1>
        <br />
        <Row>
          <Col md={6} className="categoryWrapper" id="categories">
            <Card className="modeImage">
              <Image src={BelajarImage} alt="Belajar" className="modeimages" />
              <div>
                <div className="p-3 m-3">
                  <Card.Title className="text-center">Belajar</Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="#" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} className="categoryWrapper">
            <Card className="modeImage">
              <Image src={KuisImage} alt="Kuis" className="modeimages" />
              <div>
                <div className="p-3 m-3">
                  <Card.Title className="text-center">Kuis</Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/kuis5" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mode5;
