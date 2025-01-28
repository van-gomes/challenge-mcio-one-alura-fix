import { useState } from 'react';
import './App.module.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';

function App() {
  const subjects = [
    {
      id: 1,
      name: "Front-end",
      colorButton: "#6BD1FF",
      colorBorder: "#6BD1FF"
    },
    {
      id: 2,
      name: "Back-end",
      colorButton: "#00C86F",
      colorBorder: "#00C86F"
    },
    {
      id: 3,
      name: "Mobile",
      colorButton: "#FFBA05",
      colorBorder: "#FFBA05"
    }
  ]

  const [contents, setContents] = useState([]);

  const onRegister = (content) => {
    console.log("Cadastrando...", content);
    setContents([...contents, content]);
  };

  return (
    <>
      <Header />
      <Banner />
      <Form subjects={subjects} onRegisterNewContent={content => onRegister(content)} />
      {subjects.map((subject) => (<Card key={subject.id} name={subject.name} colorButton={subject.colorButton} colorBorder={subject.colorBorder} />))}
      <Footer />
    </>
  )
}

export default App
