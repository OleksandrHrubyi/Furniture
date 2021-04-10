import Header from "../Header/Header";
import Container from "../Container/Container";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Wrapper from "../Wrapper/Wrapper";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Wrapper>
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
