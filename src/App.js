import "./App.css";
import Cards from "./components/Cards.js";
import { p5Projects, githubProjects } from "./projects.js";

export default function App() {
  return (
    <>
      <header className="main-header">
        <nav>
          <p>About me</p>
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Kaggle</p>
          <p>JavaScript</p>
        </nav>
      </header>
      <main>
        <section className="blue" style={{ paddingTop: "30px" }}>
          <header className="sub-header">
            <h1>GitHub Projects</h1>
            <p>
              These are all projects I did as a practice or because I felt a
              need to.
            </p>
          </header>
          <Cards content={githubProjects} iconsClass="blue" />
          <div className="spacer layer1"></div>
        </section>

        <section className="dark">
          <header className="sub-header">
            <h1>Kaggle Projects</h1>
            <p>All machine learning projects I did.</p>
          </header>
          <Cards content={p5Projects} iconsClass="dark" />
          <div className="spacer layer2"></div>
        </section>

        <section className="red">
          <header className="sub-header">
            <h1>JavaScript mini-projects</h1>
            <p>A collection of small projects built using the p5 library.</p>
          </header>
          <Cards content={p5Projects} iconsClass="red" />
        </section>
      </main>
      <footer>
        <p>Created by Stanisław Stankiewicz</p>
      </footer>
    </>
  );
}
