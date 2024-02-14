import { styled } from "styled-components";

const Navbar = () => {

  return (
    <Wrapper>
      <div>Welcome to Testing Ground</div>
      <h1>Redux ToolKit Test</h1>

      <section>
        <div>first section</div>
        <nav>
          <ul className="menuItems">
            <li><a href="/" data-item="Home" > Home </a></li>
            <li><a href="/" data-item="About" > About </a></li>
            <li><a href="/" data-item="Projects" > Projects </a></li>
            <li><a href="/" data-item="Code" > Code </a></li>
            <li><a href="/" data-item="Contact" > Contact </a></li>
          </ul>
        </nav>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
nav .menuItems{
  list-style: none;
  display: flex;
  justify-content: space-between;
}
 
nav {
  margin: 3rem 0;
  background: #f9f9f9;
  border-radius: 2rem;
}
nav .menuItems li {
  margin: 1.6rem 5rem;
}
nav .menuItems li a {
  text-decoration: none;
  color: #8f8f8f;
  font-size: 24px;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;
}`;


export default Navbar;