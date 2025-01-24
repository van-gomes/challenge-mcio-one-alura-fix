import { useState } from 'react';
import './App.module.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {
  const [conteudos, setConteudo] = useState([]);

  const aoCadastrar = (conteudo) => {
    console.log("Cadastrando...", conteudo);
    setConteudo([...conteudos, conteudo]);
  };

  return (
    <>
      <Header />
      <Banner />
      <Form aoCadastrarNovoConteudo={conteudo => aoCadastrar(conteudo)} />
      <Footer />
    </>
  )
}

export default App
