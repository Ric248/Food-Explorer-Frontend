import { Container, Content, Logo, Search, Logout, Button } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Link } from "react-router-dom";

import { FiSearch, FiLogOut } from 'react-icons/fi';

import logo from '../../assets/icons/logo.svg';
import receipt from '../../assets/icons/receipt.svg';
import bar from '../../assets/icons/bar.svg';
import close from '../../assets/icons/close.svg';

import { useCart } from '../../hooks/cart';

export function Header({search}) {
  const { user } = useAuth()
  const { signOut } = useAuth();

  const { cart } = useCart();

  function mobileMenu() {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('mini-cart').classList.toggle('active');
    document.getElementById('close-nav').classList.toggle('active');
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
              <Link to="/">
                <img src={logo} alt="" />
                <div>
                  <h1>food explorer</h1>
                  <p>admin</p>
                </div>
              </Link>
            :
              <Link to="/">
                <img src={logo} alt="" />
                <h1>food explorer</h1>
              </Link>
            }
          </div>
        </Logo>

        {
          user.isAdmin ?
            <div className="mini-cart" id="mini-cart"></div>
          :
            <div className="mini-cart" id="mini-cart">
              <img src={receipt} />
              <span>{cart.length}</span>
            </div>
        }

        <div className="nav-menu" id="nav-menu">

          <div className="close-nav" id="close-nav" onClick={mobileMenu}>
            <img src={close} />
            <span>Menu</span>
          </div>

          <Search>
            <label>
              <FiSearch size={24}/>
              <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => {search(e.target.value)}} />
            </label>
          </Search>

          {
            user.isAdmin ?
              <div className="header-button">
                <Link to="/add">
                  <div className="main-button">
                    <Button type="button">
                      Novo Prato
                    </Button>
                  </div>
                  <div className="text-add">
                    Novo Prato
                  </div>
                </Link>
              </div>
              :
              <div className="header-button">
                <Link to="/cart">
                  <div className="main-button">
                    <Button type='button'>
                      <img src={receipt} />
                      Pedidos <span>({cart.length})</span>
                    </Button>
                  </div>
                </Link>
              </div>
          }

          <Logout to="/" onClick={signOut}>
            <div className="signout-icon">
              <FiLogOut />
            </div>

            <div className="signout-text">
              <span>Sair</span>
            </div>
          </Logout>
        </div>

      </Content>
    </Container>
  );
}
