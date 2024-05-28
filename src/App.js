import "./App.css";
import Cards from "./components/Cards.js";
import Header from "./components/Header.js";
import { p5Projects, githubProjects } from "./projects.js";

export default function App() {
  return (
    <>
      <Header
        className="main-header"
        sections={["GitHub", "Kaggle", "JavaScript"]}
      />
      <main>
        <Section
          id="github"
          title="GitHub Projects"
          description="These are all projects I did as a practice or because I felt a need to."
          projects={githubProjects}
          backgroundClass="blue"
          spacerClass="spacer layer1"
          style={{ paddingTop: "100px" }}
        />

        <Section
          id="kaggle"
          title="Kaggle Projects"
          description="All machine learning projects I did."
          projects={p5Projects}
          backgroundClass="dark"
          spacerClass="spacer layer2"
        />

        <Section
          id="javascript"
          title="JavaScript mini-projects"
          description="A collection of small projects built using the p5 library."
          projects={p5Projects}
          backgroundClass="red"
        />
      </main>
      <footer>
        <p>Created by Stanisław Stankiewicz</p>
      </footer>
    </>
  );
}

function Section({
  id,
  title,
  description,
  projects,
  backgroundClass,
  spacerClass,
  style = {},
}) {
  return (
    <section id={id} className={backgroundClass} style={style}>
      <header className="sub-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <Cards content={projects} iconsClass={backgroundClass} />
      <div className={`spacer ${spacerClass}`}></div>
    </section>
  );
}
