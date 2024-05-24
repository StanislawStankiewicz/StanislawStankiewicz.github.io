import "./App.css";
import Cards from "./components/Cards.js";
import { ReactComponent as ReactIcon } from "./components/icons/react.svg";
import { ReactComponent as JSIcon } from "./components/icons/js.svg";
import { ReactComponent as P5Icon } from "./components/icons/p5.svg";

import gameOfLifeImage from "./components/images/game-of-life.png";
import fallingSandImage from "./components/images/falling-sand.png";
import fourierSeriesImage from "./components/images/fourier-series.png";
import rayTracingImage from "./components/images/raytracing.png";
import rtRenderingImage from "./components/images/rt-rendering.png";
import raymarchingImage from "./components/images/raymarching.png";

const p5Projects = {
  gameOfLife: {
    title: "Game of Life",
    description:
      "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
    image: gameOfLifeImage,
    link: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",
    icons: [P5Icon, JSIcon],
  },
  fallingSand: {
    title: "Falling Sand",
    description:
      "A falling sand simulation. Drag the mouse to draw elements and watch them interact. Press Shift to remove the sand.",
    image: fallingSandImage,
    link: "https://example.com",
    icons: [P5Icon, JSIcon],
  },
  fourierSeries: {
    title: "Fourier Series",
    description:
      "A Fourier series is an expansion of a periodic function into a sum of trigonometric functions. The Fourier series is an example of a trigonometric series.",
    image: fourierSeriesImage,
    link: "https://example.com",
    icons: [P5Icon, JSIcon],
  },
  rayTracing: {
    title: "2D Raytracing",
    description:
      "Ray tracing is a computer graphics technique used to generate highly realistic images by simulating the way light interacts with objects.",
    image: rayTracingImage,
    link: "https://example.com",
    icons: [P5Icon, JSIcon],
  },
  rtRender: {
    title: "2D RT - Rendering",
    description: "Description of yet another project",
    image: rtRenderingImage,
    link: "https://example.com",
    icons: [P5Icon, JSIcon],
  },
  rayMarching: {
    title: "Raymarching",
    description:
      "Ray marching is a method where rays are traversed iteratively, effectively dividing each ray into smaller ray segments, sampling some function at each step.",
    image: raymarchingImage,
    link: "https://example.com",
    icons: [P5Icon, JSIcon],
  },
};

export default function App() {
  return (
    <>
      <main>
        <section className="blue">
          <header>
            <h1>GitHub Projects</h1>
            <p>A collection of small projects built using the p5 library.</p>
          </header>
          <Cards content={p5Projects} iconsClass="blue" />
        </section>

        <div className="spacer layer1"></div>

        <section className="dark">
          <header>
            <h1>Kaggle Projects</h1>
            <p>A collection of small projects built using the p5 library.</p>
          </header>
          <Cards content={p5Projects} iconsClass="dark" />
        </section>

        <div className="spacer layer2"></div>

        <section className="red">
          <header>
            <h1>JavaScript mini-projects</h1>
            <p>A collection of small projects built using the p5 library.</p>
          </header>
          <Cards content={p5Projects} iconsClass="red" />
        </section>
      </main>
      <footer>
        <p>Created by Stanisław Stankiewicz</p>
        <P5Icon style={{ width: "20px", height: "20px" }} />
      </footer>
    </>
  );
}
