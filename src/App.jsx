import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={"/"}>
        <img src="https://KellyLindsayCodes.github.io/many-a-meal/Many-A-Meal-Logo.png" alt="Logo" />
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
display: flex;
justify-content: center;
align-items: center;

img {
  height: 360px; 
  margin-top: -100px;
  margin-bottom: -150px;
  margin-left: 370px; 
}

@media (max-width: 850px) {
  img {
    height: 440px;
    margin-left: 10px;
  }
}

`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App;