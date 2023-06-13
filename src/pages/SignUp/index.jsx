import logo from '../../assets/icons/logo.svg';

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

  const navigate = useNavigate();

  const onFormSubmit = e => { e.preventDefault() };

  function handleSignUp(){
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");

      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  };

  return (
    <Container>
      <Logo>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>food explorer</h1>
        </div>
      </Logo>

      <Form onSubmit={onFormSubmit}>
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

        <Button  type="submit" title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
};
