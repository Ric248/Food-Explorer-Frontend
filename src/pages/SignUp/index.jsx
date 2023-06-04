import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import darkTheme from '../../styles/theme';

import { api } from '../../services/api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Logo } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp(){
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    setLoading(true);

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
        setLoading(false);
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }

        setLoading(false)
      });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        <Container>

          <Logo>
            <div className="logo">
              <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
              </svg>
              <h1>food explorer</h1>
            </div>
          </Logo>

          <Form>
            <h2>Crie sua conta</h2>

            <div className="inputs">
              <p>Seu nome</p>
              <Input placeholder="Seu Nome Aqui" type="text" onChange={e => setName(e.target.value)} />
            </div>

            <div className="inputs">
              <p>Email</p>
              <Input placeholder="exemplo@email.com" type="text" onChange={e => setEmail(e.target.value)} />
            </div>
            
            <div className="inputs">
              <p>Senha</p>
              <Input placeholder="Mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <Button title={loading ? "Cadastrando" : "Criar conta"} onClick={handleSignUp} disabled={loading}/>

            <Link to="/">
              Já tenho uma conta
            </Link>

          </Form>
        </Container>
    </ThemeProvider>
  );
};
