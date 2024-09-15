import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Ayo Belajar Carakan</div>
            <div className="note">
              Kenalan sama aksara Jawa yang terlihat indah ini yuk!
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default Intro;
