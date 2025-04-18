/* eslint-disable no-console */
import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

import styles from "./App.module.css";
import "../src/global.css";

export function App() {
  const [editingData, setEditingData] = useState(null);

  const subjects = [
    {
      id: 1,
      name: "Front-end",
      colorButton: "#6BD1FF",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
      category: "Front-end",
    },
    {
      id: 2,
      name: "Back-end",
      colorButton: "#00C86F",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
      category: "Back-end",
    },
    {
      id: 3,
      name: "Mobile",
      colorButton: "#FFBA05",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
      category: "Mobile",
    },
  ];

  const [contents, setContents] = useState([
    {
      id: "1",
      title: "Curso Completo de Desenvolvimento Web Front-End",
      video: "https://www.youtube.com/watch?v=evgkOl-nScA",
      description:
        "Este curso completo de 10 horas aborda desde os fundamentos até tópicos avançados de desenvolvimento web front-end.",
      category: "Front-end",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
    },
    {
      id: "2",
      title: "Programador Front-end Iniciante - APRENDA ISSO!",
      video: "https://www.youtube.com/watch?v=fX5WCe3d8WU",
      description:
        "Dicas essenciais para iniciantes que desejam se tornar programadores front-end.",
      category: "Front-end",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
    },
    {
      id: "3",
      title: "The Complete Frontend Developer Roadmap",
      video: "https://www.youtube.com/watch?v=Tef1e9FiSR0",
      description:
        "Um guia completo sobre as habilidades e tecnologias necessárias para se tornar um desenvolvedor front-end em 2025.",
      category: "Front-end",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
    },
    {
      id: "4",
      title: "Front-end, Back-end e Full stack - Curso em Vídeo HTML5 e CSS3",
      video: "https://www.youtube.com/watch?v=iSqf2iPqJNM",
      description:
        "Entenda as diferenças entre desenvolvimento front-end, back-end e full stack neste vídeo do Curso em Vídeo.",
      category: "Front-end",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
    },
    {
      id: "5",
      title: "Caminhos para ser um dev front-end em 2023",
      video: "https://www.youtube.com/watch?v=30nlBGjPRYM",
      description:
        "Exploração das tecnologias e tendências para quem deseja iniciar no desenvolvimento front-end em 2023.",
      category: "Front-end",
      colorBorder: "#6BD1FF",
      colorIconEdit: "#6BD1FF",
    },
    {
      id: "6",
      title: "O Que É Desenvolvimento Backend?",
      video: "https://www.youtube.com/watch?v=bXM54XHQC5I",
      description:
        "Uma visão geral sobre o que é desenvolvimento back-end e suas principais funções.",
      category: "Back-end",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
    },
    {
      id: "7",
      title: "Como Se Tornar Um Desenvolvedor Backend? (Passo A Passo)",
      video: "https://www.youtube.com/watch?v=wXMlMsDvk2M",
      description:
        "Guia passo a passo para quem deseja iniciar na carreira de desenvolvimento back-end.",
      category: "Back-end",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
    },
    {
      id: "8",
      title: "Back-End: Tudo o que você precisa saber sobre a área!",
      video: "https://www.youtube.com/watch?v=G4Z_9cunSeg",
      description:
        "Explicação completa sobre a área de back-end e suas responsabilidades.",
      category: "Back-end",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
    },
    {
      id: "9",
      title:
        "Rotina Dev: Saiba O que um Desenvolvedor Back-End faz no seu dia-a-dia",
      video: "https://www.youtube.com/watch?v=xiPM_2aWtUc",
      description:
        "Detalhes sobre a rotina diária de um desenvolvedor back-end.",
      category: "Back-end",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
    },
    {
      id: "10",
      title: "Programador Backend: Roadmap para Dev Júnior 2025",
      video: "https://www.youtube.com/watch?v=CfoyVY1CJRk",
      description:
        "Roadmap atualizado para quem deseja se tornar um desenvolvedor back-end júnior em 2025.",
      category: "Back-end",
      colorBorder: "#00C86F",
      colorIconEdit: "#00C86F",
    },
    {
      id: "11",
      title: "Como iniciar em Desenvolvimento Mobile? O que estudar?",
      video: "https://www.youtube.com/watch?v=QGTyIWTCCmY",
      description:
        "Passo a passo para quem deseja iniciar na carreira de desenvolvimento mobile e o que deve estudar.",
      category: "Mobile",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
    },
    {
      id: "12",
      title: "Dia 1 – Introdução ao Desenvolvimento Mobile",
      video: "https://www.youtube.com/watch?v=yW2kgxan140",
      description:
        "Introdução ao desenvolvimento mobile, abordando os primeiros passos na área.",
      category: "Mobile",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
    },
    {
      id: "13",
      title: "O que eu faço hoje como Desenvolvedor Mobile",
      video: "https://www.youtube.com/watch?v=xU2r-dSdN1o",
      description:
        "Descrição das atividades diárias de um desenvolvedor mobile.",
      category: "Mobile",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
    },
    {
      id: "14",
      title: "Como se tornar um Desenvolvedor Mobile em 2024",
      video: "https://www.youtube.com/watch?v=COY5vTa778g",
      description:
        "Dicas e orientações para se tornar um desenvolvedor mobile em 2024.",
      category: "Mobile",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
    },
    {
      id: "15",
      title: "Como começar no desenvolvimento Mobile",
      video: "https://www.youtube.com/watch?v=H5eB4a0Wnas",
      description:
        "Orientações sobre os primeiros passos e as melhores dicas para iniciar no desenvolvimento mobile.",
      category: "Mobile",
      colorBorder: "#FFBA05",
      colorIconEdit: "#FFBA05",
    },
  ]);

  const handleEdit = (updatedVideo) => {
    const categoryData = subjects.find(
      (subject) => subject.category === updatedVideo.category
    );

    const updatedVideoWithColors = {
      ...updatedVideo,
      colorBorder: categoryData?.colorBorder || updatedVideo.colorBorder,
      colorIconEdit: categoryData?.colorIconEdit || updatedVideo.colorIconEdit,
    };

    setContents((prevContents) =>
      prevContents.map((video) =>
        video.id === updatedVideo.id ? updatedVideoWithColors : video
      )
    );
    setEditingData(null);
  };

  const handleDelete = (id) => {
    setContents((prevContents) =>
      prevContents.filter((video) => video.id !== id)
    );
  };

  const onRegister = (content) => {
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
        colorIconEdit: categoryData.colorIconEdit,
      };

      setContents([...contents, newContent]);
    } else {
      console.error("Categoria não encontrada");
    }
  };

  const videosByCategory = contents.reduce((categories, video) => {
    if (!categories[video.category]) {
      categories[video.category] = [];
    }
    categories[video.category].push(video);
    return categories;
  }, {});

  return (
    <>
      <Header />
      <Banner />
      {editingData ? (
        <Modal isOpen={true} onClose={() => setEditingData(null)}>
          <Form
            subjects={subjects}
            onRegister={onRegister}
            onEdit={(data) => {
              handleEdit(data);
              setEditingData(null);
            }}
            editingData={editingData}
          />
        </Modal>
      ) : (
        <Form
          subjects={subjects}
          onRegister={onRegister}
          onEdit={handleEdit}
          editingData={null}
        />
      )}

      {Object.entries(videosByCategory).map(([category, videos]) => {
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
                <Card
                  key={content.id}
                  content={content}
                  onEditClick={setEditingData}
                  onDeleteClick={handleDelete}
                />
              ))}
            </div>
          </section>
        );
      })}
      <Footer />
    </>
  );
}
