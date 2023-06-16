import { Container, Content, Logo, Search, Logout, Button } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Link } from "react-router-dom";

import { FiSearch, FiLogOut } from 'react-icons/fi';

import logo from '../../assets/icons/logo.svg';
import receipt from '../../assets/icons/receipt.svg';
import bar from '../../assets/icons/bar.svg';

import { useCart } from '../../hooks/cart';

export function Header({search}) {
  const { user } = useAuth()
  const { signOut } = useAuth();

  const { cart } = useCart();

  function mobileMenu() {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('mini_cart').classList.toggle('active');
  }

  return (
    <Container>
      <Content>

        <div className="hamburger" id="hamburger" onClick={mobileMenu}>
          <img className="bar" src={bar} />
          <img className="bar" src={bar} />
          <img className="bar" src={bar} />
        </div>

        <Logo>
          <div className="logo">
              {
              user.isAdmin ?
                (
                  <Link to="/">
                    <img src={logo} alt="" />
                    <div>
                      <h1>food explorer</h1>
                      <p>admin</p>
                    </div>
                  </Link>
                ):(
                  <Link to="/">
                    <img src={logo} alt="" />
                    <h1>food explorer</h1>
                  </Link>
                )
              }
          </div>
        </Logo>

        <div className="mini_cart">
          <img src={receipt} />
          <span>{cart.length}</span>
        </div>

        <div className="nav-menu" id="nav-menu">

          <Search>
            <label>
              <FiSearch size={24}/>
              <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => {search(e.target.value)}} />
            </label>
          </Search>

          {
            user.isAdmin ?
              (
                <Link to="/add">
                  <Button type='button'>
                    Novo Prato
                  </Button>
                </Link>
              ): (
                <Link to="/cart">
                  <Button type='button'>
                    <img src={receipt} />
                    Pedidos <span>({cart.length})</span>
                  </Button>
                </Link>
              )
          }

          <Logout to="/" onClick={signOut}>
            <FiLogOut />
          </Logout>
        </div>

      </Content>
    </Container>
  );
}
