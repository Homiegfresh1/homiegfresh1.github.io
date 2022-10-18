import { Container, Navbar, NavbarBrand } from "reactstrap";
import QuestionBoard from "./QuestionBoard";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand>Odyssey Jeoperdy</NavbarBrand>
      </Navbar>
      <Container>
        <QuestionBoard />
      </Container>
    </div>
  );
}

export default App;
