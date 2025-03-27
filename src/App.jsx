import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import Button from "./components/Button";
import styles from "./App.module.css";
import "../src/global.css";

export function App() {
  const subjects = [
    {
      id: 1,
      name: "Front-end",
      colorButton: "#6BD1FF",
      colorBorder: "#6BD1FF",
      colorIconEdit:"#6BD1FF",
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
      colorIconEdit:"#FFBA05",
      category: "Mobile",
    },
  ];

  const [contents, setContents] = useState([
    {
      title: "Curso Completo de Desenvolvimento Web Front-End",
      video: "https://www.youtube.com/watch?v=evgkOl-nScA",
      description:
        "Este curso completo de 10 horas aborda desde os fundamentos até tópicos avançados de desenvolvimento web front-end.",
      category: "Front-end",
    },
    {
      title: "Programador Front-end Iniciante - APRENDA ISSO!",
      video: "https://www.youtube.com/watch?v=fX5WCe3d8WU",
      description:
        "Dicas essenciais para iniciantes que desejam se tornar programadores front-end.",
      category: "Front-end",
    },
    {
      title: "The Complete Frontend Developer Roadmap",
      video: "https://www.youtube.com/watch?v=Tef1e9FiSR0",
      description:
        "Um guia completo sobre as habilidades e tecnologias necessárias para se tornar um desenvolvedor front-end em 2025.",
      category: "Front-end",
    },
    {
      title: "Front-end, Back-end e Full stack - Curso em Vídeo HTML5 e CSS3",
      video: "https://www.youtube.com/watch?v=iSqf2iPqJNM",
      description:
        "Entenda as diferenças entre desenvolvimento front-end, back-end e full stack neste vídeo do Curso em Vídeo.",
      category: "Front-end",
    },
    {
      title: "Caminhos para ser um dev front-end em 2023",
      video: "https://www.youtube.com/watch?v=30nlBGjPRYM",
      description:
        "Exploração das tecnologias e tendências para quem deseja iniciar no desenvolvimento front-end em 2023.",
      category: "Front-end",
    },

    {
      title: "O Que É Desenvolvimento Backend?",
      video: "https://www.youtube.com/watch?v=bXM54XHQC5I",
      description:
        "Uma visão geral sobre o que é desenvolvimento back-end e suas principais funções.",
      category: "Back-end",
    },
    {
      title: "Como Se Tornar Um Desenvolvedor Backend? (Passo A Passo)",
      video: "https://www.youtube.com/watch?v=wXMlMsDvk2M",
      description:
        "Guia passo a passo para quem deseja iniciar na carreira de desenvolvimento back-end.",
      category: "Back-end",
    },
    {
      title: "Back-End: Tudo o que você precisa saber sobre a área!",
      video: "https://www.youtube.com/watch?v=G4Z_9cunSeg",
      description:
        "Explicação completa sobre a área de back-end e suas responsabilidades.",
      category: "Back-end",
    },
    {
      title:
        "Rotina Dev: Saiba O que um Desenvolvedor Back-End faz no seu dia-a-dia",
      video: "https://www.youtube.com/watch?v=xiPM_2aWtUc",
      description:
        "Detalhes sobre a rotina diária de um desenvolvedor back-end.",
      category: "Back-end",
    },
    {
      title: "Programador Backend: Roadmap para Dev Júnior 2025",
      video: "https://www.youtube.com/watch?v=CfoyVY1CJRk",
      description:
        "Roadmap atualizado para quem deseja se tornar um desenvolvedor back-end júnior em 2025.",
      category: "Back-end",
    },
    {
      title: "Como iniciar em Desenvolvimento Mobile? O que estudar?",
      video: "https://www.youtube.com/watch?v=QGTyIWTCCmY",
      description:
        "Passo a passo para quem deseja iniciar na carreira de desenvolvimento mobile e o que deve estudar.",
      category: "Mobile",
    },
    {
      title: "Dia 1 – Introdução ao Desenvolvimento Mobile",
      video: "https://www.youtube.com/watch?v=yW2kgxan140",
      description:
        "Introdução ao desenvolvimento mobile, abordando os primeiros passos na área.",
      category: "Mobile",
    },
    {
      title: "O que eu faço hoje como Desenvolvedor Mobile",
      video: "https://www.youtube.com/watch?v=xU2r-dSdN1o",
      description:
        "Descrição das atividades diárias de um desenvolvedor mobile.",
      category: "Mobile",
    },
    {
      title: "Como se tornar um Desenvolvedor Mobile em 2024",
      video: "https://www.youtube.com/watch?v=COY5vTa778g",
      description:
        "Dicas e orientações para se tornar um desenvolvedor mobile em 2024.",
      category: "Mobile",
    },
    {
      title: "Como começar no desenvolvimento Mobile",
      video: "https://www.youtube.com/watch?v=H5eB4a0Wnas",
      description:
        "Orientações sobre os primeiros passos e as melhores dicas para iniciar no desenvolvimento mobile.",
      category: "Mobile",
    },
  ]);

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
      <Form subjects={subjects} onRegister={onRegister} />

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
