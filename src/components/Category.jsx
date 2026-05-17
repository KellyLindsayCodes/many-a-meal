import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
    <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
    </SLink>
    <SLink to={'cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
    </SLink>
    <SLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
    </SLink>
    <SLink to={'cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
    </SLink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
display: flex;
flex--direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #CF0A1D, #C02641);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4 {
  color: #f6f5f4;
  font-size: 0.8rem;
}

svg {
  color: #f6f5f4;
  font-size: 1.5rem;
}
&.active{
  background: linear-gradient(to right, #E21C34, #500B28);

  svg{
    color: #f6f5f4;
  }
  h4 {
    color: #f6f5f4;
  }
}

@media (max-width: 768px) {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;

  h4 {
    font-size: 0.5rem;
  }

  svg {
    font-size: 0.5rem;
  }
}
`;

export default Category;