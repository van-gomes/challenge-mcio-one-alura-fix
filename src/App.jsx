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
      colorBorder: "#6BD1FF",
      category: "Front-end"
    },
    {
      id: 2,
      name: "Back-end",
      colorButton: "#00C86F",
      colorBorder: "#00C86F",
      category: "Back-end"
    },
    {
      id: 3,
      name: "Mobile",
      colorButton: "#FFBA05",
      colorBorder: "#FFBA05",
      category: "Mobile"
    }
  ];

  const [contents, setContents] = useState([]);

  const onRegister = (content) => {
    console.log("Cadastrando...", content);

    const categoryData = subjects.filter(subject => subject.category === content.category)[0];

    // Garantindo que a categoria foi encontrada
    if (categoryData) {
      const newContent = {
        id: Date.now().toString(),
        title: content.title,
        category: content.category,
        image: content.image,
        video: content.video,
        description: content.description,
        colorButton: categoryData.colorButton, // Usando as cores da categoria
        colorBorder: categoryData.colorBorder  // Usando as cores da categoria
      };

      setContents([...contents, newContent]);
    } else {
      console.error("Categoria não encontrada");
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <Form subjects={subjects} onRegister={onRegister} />
      {contents.map((content) => (
        <Card 
          key={content.id} 
          name={content.title}
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