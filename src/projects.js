// p5 projects
import gameOfLifeImage from "./components/images/game-of-life.png";
import fallingSandImage from "./components/images/falling-sand.png";
import fourierSeriesImage from "./components/images/fourier-series.png";
import rayTracingImage from "./components/images/raytracing.png";
import rtRenderingImage from "./components/images/rt-rendering.png";
import raymarchingImage from "./components/images/raymarching.png";

import { ReactComponent as ReactIcon } from "./components/icons/react.svg";
import { ReactComponent as JSIcon } from "./components/icons/js.svg";
import { ReactComponent as P5Icon } from "./components/icons/p5.svg";
import { ReactComponent as HTMLIcon } from "./components/icons/html.svg";
import { ReactComponent as CSSIcon } from "./components/icons/css.svg";

// github projects
import myWebsiteImage from "./components/images/placeholder.png";

import { ReactComponent as CSharpIcon } from "./components/icons/csharp.svg";
import { ReactComponent as JavaIcon } from "./components/icons/java.svg";
import { ReactComponent as PythonIcon } from "./components/icons/python.svg";

// kaggle projects

import { ReactComponent as TensorflowIcon } from "./components/icons/tensorflow.svg";

export const p5Projects = {
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

export const githubProjects = {
  myWebsite: {
    title: "My website",
    description:
      "A personal website built using React. The website is a portfolio of my projects and a place to practice web development.",
    image: myWebsiteImage,
    link: "https://example.com",
    icons: [ReactIcon, JSIcon, CSSIcon, HTMLIcon],
  },
  blockshuffle: {
    title: "GSBlockShuffle",
    description:
      "A user-friendly Minecraft plugin with customization options, where players need to find a specified block.",
    image: myWebsiteImage,
    link: "https://example.com",
    icons: [JavaIcon],
  },
  textEditor: {
    title: "Text Editor",
    description:
      "A simple text editor built in C# using Windows Presentation Foundatioin (WPF). The editor supports basic text editing features.",
    image: myWebsiteImage,
    link: "https://example.com",
    icons: [CSharpIcon],
  },
  twitchPointsList: {
    title: "Twitch Points List",
    description:
      "A simple python application that allows tracking your Twitch Points across multiple channels and plots the point history.",
    image: myWebsiteImage,
    link: "https://example.com",
    icons: [PythonIcon],
  },
};
