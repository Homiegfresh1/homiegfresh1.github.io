import { Container, Navbar, NavbarBrand, Row, Col } from "reactstrap";
import QuestionBoard from "./QuestionBoard";
import TeamBoard from "./TeamBoard/TeamBoard";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand>Odyssey Jeoperdy</NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <Col lg="3">
            <TeamBoard />
          </Col>
          <Col lg="9">
            <QuestionBoard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
