import Header from "./Components/Header/header"
import Menu from "./Components/Menu/menu"
import Main from "./Components/Main/main"
import Footer from "./Components/Footer/footer"
import Button from "./Components/Button/button"


function App() {
  return (
    <>
    <Header title="Race Market"/>
    <Menu/>
    <Main/>
    <Button label="Clique para outras corridas e equipes! "/>
    <Footer/>
    </>
  );
}

export default App;
