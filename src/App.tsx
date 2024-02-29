import "./style/output.css";
import Container from "./components/Container";
import SvgContainer from "./components/SvgContainer";
import Task from "./components/Task";
import Title from "./components/Title";
import svgMoon from "./svg/moon-stars-svgrepo-com.svg";

function App() {
  return (
    <>
      <Container>
        <SvgContainer svg={svgMoon} />
        <Title />
        <Task />
      </Container>
    </>
  );
}

export default App;
