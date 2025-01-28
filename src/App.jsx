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
  ];

  const [contents, setContents] = useState([]);

  const onRegister = (content) => {
    console.log("Cadastrando...", content);

    // Encontrando a categoria selecionada no array subjects para pegar as cores
    const categoryData = subjects.find(subject => subject.name === content.category);

    // Se a categoria for encontrada, usamos as cores dela
    const newContent = {
      id: Date.now().toString(),
      title: content.title,
      category: content.category,
      image: content.image,
      video: content.video,
      description: content.description,
      colorButton: categoryData ? categoryData.colorButton : "#FFBA05", // Cor padrão se não encontrar
      colorBorder: categoryData ? categoryData.colorBorder : "#FFBA05"  // Cor padrão se não encontrar
    };

    setContents([...contents, newContent]);
  };

  return (
    <>
      <Header />
      <Banner />
      <Form subjects={subjects} onRegister={onRegister} />
      {contents.map((content) => (
        <Card 
          key={content.id} 
          name={content.title}  // Alterei para mostrar o título
          colorButton={content.colorButton} 
          colorBorder={content.colorBorder}
          content={content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;