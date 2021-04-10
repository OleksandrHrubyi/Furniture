import Menu from "../Main/Menu/Menu";
import Banner from "../Main/Banner/Banner";
import MainContainer from "./MainContainer/MainContainer";
import Advantages from "./Advantages/Advantages";
import Categories from "./Сategories/Categories";
import About from "./About/About";
import Question from "./Question/Question";

function Main() {
  return (
    <main>
      <MainContainer>
        <Menu />
      </MainContainer>
      <Banner />
      <MainContainer>
        <Advantages />
        <Categories />
      </MainContainer>
      <About />
      <Question />
    </main>
  );
}
export default Main;
