import { useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import Button from './components/Button';
import styles from './App.module.css';
import '../src/global.css';

export function App() {
  const subjects = [
    {
      id: 1,
      name: "Front-end",
      colorButton: "#6BD1FF",
      colorBorder: "#6BD1FF",
      category: "Front-end",
    },
    {
      id: 2,
      name: "Back-end",
      colorButton: "#00C86F",
      colorBorder: "#00C86F",
      category: "Back-end",
    },
    {
      id: 3,
      name: "Mobile",
      colorButton: "#FFBA05",
      colorBorder: "#FFBA05",
      category: "Mobile",
    },
  ];

  const [contents, setContents] = useState([]);

  const onRegister = (content) => {
    console.log("Cadastrando...", content);

    const categoryData = subjects.find(
      (subject) => subject.category === content.category
    );

    if (categoryData) {
      const newContent = {
        id: Date.now().toString(),
        title: content.title,
        category: content.category,
        video: content.video,
        description: content.description,
        colorButton: categoryData.colorButton,
        colorBorder: categoryData.colorBorder,
      };

      setContents([...contents, newContent]);
    } else {
      console.error("Categoria não encontrada");
    }
  };

  // Agrupa os vídeos por categoria
  const groupedContents = contents.reduce((acc, content) => {
    if (!acc[content.category]) {
      acc[content.category] = [];
    }
    acc[content.category].push(content);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <Banner />
      <Form subjects={subjects} onRegister={onRegister} />

      {Object.entries(groupedContents).map(([category, videos]) => {
        const categoryData = subjects.find(
          (subject) => subject.category === category
        );
        return (
          <section key={category} className={styles.container_app}>
            <Button
              colorButton={categoryData.colorButton}
              className={styles.category_button}
            >
              {category.toUpperCase()}
            </Button>
            <div className={styles.video_app}>
              {videos.map((content) => (
                <Card key={content.id} content={content} />
              ))}
            </div>
          </section>
        );
      })}
      <Footer />
    </>
  );
}
