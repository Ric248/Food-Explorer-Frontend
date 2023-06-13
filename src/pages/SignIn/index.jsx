import { Container, Form, Logo } from './styles';

import logo from '../../assets/icons/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();
  
  const onFormSubmit = e => { e.preventDefault() };

  function handleSignIn() {
    signIn({ email, password });
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
        <h2>Faça login</h2>

        <div className="inputs">
          <p>Email</p>
          <Input placeholder="exemplo@email.com" type="text" onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input placeholder="Mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />
        </div>

        <Button  type="submit" title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
      
    </Container>
  );
}
