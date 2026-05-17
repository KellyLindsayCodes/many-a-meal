import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' +input);
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        value={input} 
        />
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
margin: 0rem 20rem;

@media (max-width: 768px) {
    margin: 0rem 0.01rem;
  }

  @media (max-width: 1300px) {
    margin: 0rem 0.1rem;
  }

div{
    position: relative;
    width: 100%;
}
input {
    border: none;
    background: linear-gradient(35deg, #CF0A1D, #C02641);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #f6f5f4;
}
`

export default Search;