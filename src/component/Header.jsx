import { Container, Nav, Navbar } from "react-bootstrap"
import { FaShoppingBasket } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Basket from "./Basket"
import { useContext } from "react"
import { BasketContext, ModalContext } from "./App"

function Header() {
  const {setModal} = useContext(ModalContext)
  const {basket} = useContext(BasketContext)

  return (
    <header>
       <Navbar bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img id="logo" src="./assets/img/pizza.png" alt="Pizza logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="main" className="nav-link">Home</NavLink>
            <NavLink to="pizza" className="nav-link">Pizza</NavLink>
            <NavLink to="contact" className="nav-link">Contact</NavLink>
          </Nav>
          <Nav>
            <span onClick={()=> setModal(true)} type="button" className="position-relative">
              <FaShoppingBasket className="fs-5" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {basket.length}</span>
            </span>
          </Nav>
        </Container>
      </Navbar>

      <Basket />
    </header>
  )
}

export default Header