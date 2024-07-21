import { Container, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="navbarBrand">
      <Container className="d-flex justify-content-center align-items-center">
        <NavbarBrand>AksaraKU</NavbarBrand>
      </Container>
    </div>
  );
};

export default NavigationBar;
