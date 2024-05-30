import "./App.css";
import Cards from "./components/Cards.js";
import Header from "./components/Header.js";
import { githubProjects, kaggleProjects, p5Projects } from "./projects.js";

import { ReactComponent as GithubIcon } from "./components/icons/github.svg";
import { ReactComponent as MailIcon } from "./components/icons/mail.svg";
import { ReactComponent as LinkedinIcon } from "./components/icons/linkedin.svg";
import { ReactComponent as KaggleIcon } from "./components/icons/kaggle.svg";
import { ReactComponent as LeetcodeIcon } from "./components/icons/leetcode.svg";

export default function App() {
  return (
    <>
      <Header
        className="main-header"
        sections={["About me", "GitHub", "Kaggle", "JavaScript"]}
      />
      <main>
        <section id="aboutme" className="welcome-page violet">
          <header className="sub-header">
            <h1>Hello</h1>
            <p>
              My name is Stanisław Stankiewicz and I am a computer science
              student. I am passionate about programming and I love to learn new
              things. I am interested in machine learning, computer graphics,
              and web development. I am always looking for new challenges and
              opportunities to grow. Feel free to contact me if you have any
              questions or suggestions.
            </p>
            <div className="contact">
              <h2>Contact</h2>
              <ul className="contactList">
                <ContactItem
                  link="mailto:s.stankievitz@gmail.com"
                  Icon={MailIcon}
                  text="s.stankievitz@gmail.com"
                />
                <ContactItem
                  link="https://github.com/StanislawStankiewicz"
                  Icon={GithubIcon}
                  text="GitHub"
                />
                <ContactItem
                  link="https://www.kaggle.com/stanisawstankiewicz"
                  Icon={KaggleIcon}
                  text="Kaggle"
                />
                <ContactItem
                  link="https://www.linkedin.com/in/stanisław-stankiewicz-30b56b308/"
                  Icon={LinkedinIcon}
                  text="LinkedIn"
                />
                <ContactItem
                  link="https://leetcode.com/u/user2299F/"
                  Icon={LeetcodeIcon}
                  text="Leetcode"
                />
              </ul>
            </div>
          </header>
          <div className="spacer layer1"></div>
        </section>

        <Showcase
          id="github"
          title="GitHub Projects"
          description="These are all projects I did as a practice or because I felt a need to."
          projects={githubProjects}
          backgroundClass="blue"
          spacerClass="spacer layer2"
        />

        <Showcase
          id="kaggle"
          title="Kaggle Projects"
          description="All machine learning projects I did."
          projects={kaggleProjects}
          backgroundClass="dark"
          spacerClass="spacer layer3"
        />

        <Showcase
          id="javascript"
          title="JavaScript mini-projects"
          description="A collection of small projects built using the p5 library."
          projects={p5Projects}
          backgroundClass="red"
        />
      </main>
      <footer>
        <p>Created by Stanisław Stankiewicz 2024</p>
      </footer>
    </>
  );
}

function Showcase({
  id,
  title,
  description,
  projects,
  backgroundClass,
  spacerClass,
}) {
  return (
    <section id={id} className={backgroundClass}>
      <header className="sub-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      {projects && <Cards content={projects} iconsClass={backgroundClass} />}
      <div className={`spacer ${spacerClass}`}></div>
    </section>
  );
}

function ContactItem({ link, Icon, text }) {
  text = text.replace(/\//g, "/\u200B");
  text = text.replace(/@/g, "@\u200B");
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contactItem"
    >
      <Icon className="icon" />
      {text}
    </a>
  );
}
