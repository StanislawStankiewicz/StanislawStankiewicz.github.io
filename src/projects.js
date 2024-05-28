// github projects
import myWebsiteImage from "./components/images/website.png";
import blockshuffleImage from "./components/images/blockshuffle.png";
import textEditorImage from "./components/images/texteditor.png";
import twitchPointsListImage from "./components/images/twitchpoints.png";

import { ReactComponent as CSharpIcon } from "./components/icons/csharp.svg";
import { ReactComponent as JavaIcon } from "./components/icons/java.svg";
import { ReactComponent as PythonIcon } from "./components/icons/python.svg";

// kaggle projects
import digitRecognitionImage from "./components/images/digits.png";
import aidsInfectionImage from "./components/images/aids.png";
import titanicImage from "./components/images/titanic.png";
import thyroidImage from "./components/images/thyroid.png";

import { ReactComponent as TensorflowIcon } from "./components/icons/tensorflow.svg";

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

export const githubProjects = {
  myWebsite: {
    title: "My website",
    description:
      "A personal website built using React. The website is a portfolio of my projects and a place to practice web development.",
    image: myWebsiteImage,
    link: "/",
    icons: [ReactIcon, JSIcon, CSSIcon, HTMLIcon],
  },
  blockshuffle: {
    title: "GSBlockShuffle",
    description:
      "A user-friendly Minecraft plugin with customization options, where players need to find a specified block.",
    image: blockshuffleImage,
    link: "https://github.com/StanislawStankiewicz/GSBlockShuffle",
    icons: [JavaIcon],
  },
  textEditor: {
    title: "Text Editor",
    description:
      "A simple text editor built in C# using Windows Presentation Foundatioin (WPF). The editor supports basic text editing features.",
    image: textEditorImage,
    link: "https://github.com/StanislawStankiewicz/TextEditor",
    icons: [CSharpIcon],
  },
  twitchPointsList: {
    title: "Twitch Points List",
    description:
      "A simple python application that allows tracking your Twitch Points across multiple channels and plots the point history.",
    image: twitchPointsListImage,
    link: "https://github.com/StanislawStankiewicz/TwitchPointsTracker",
    icons: [PythonIcon],
  },
};

export const kaggleProjects = {
  digitRecognition: {
    title: "Digit Recognition",
    description:
      "This project involves creating a machine learning model to recognize handwritten digits. This is a classic problem in the field of machine learning, often used as an introduction to techniques such as neural networks.",
    image: digitRecognitionImage,
    link: "https://www.kaggle.com/code/stanisawstankiewicz/digitrecognition",
    icons: [TensorflowIcon],
  },
  AIDSInfection: {
    title: "AIDS Infection",
    description:
      "This project involves creating a machine learning model to predict the likelihood of HIV infection based on patient data. The goal is to identify patients who are at high risk of contracting the virus.",
    image: aidsInfectionImage,
    link: "https://www.kaggle.com/code/stanisawstankiewicz/aidsinfections",
    icons: [TensorflowIcon],
  },
  TitanicSurvivors: {
    title: "Titanic Survivors",
    description:
      "This project involves creating a machine learning model to predict the likelihood of survival on the Titanic. The goal is to identify factors that contributed to survival and to predict the likelihood of survival for passengers based on their characteristics.",
    image: titanicImage,
    link: "https://www.kaggle.com/code/stanisawstankiewicz/titanicsurvivors",
    icons: [TensorflowIcon],
  },
  ThyroidRecursion: {
    title: "Thyroid Recursion",
    description:
      "Thyroid disease is a common health problem that can affect anyone. This project involves creating a machine learning model to predict thyroid disease based on patient data.",
    image: thyroidImage,
    link: "https://www.kaggle.com/code/stanisawstankiewicz/thyroidrecursion",
    icons: [TensorflowIcon],
  },
};

export const p5Projects = {
  gameOfLife: {
    title: "Game of Life",
    description:
      "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
    image: gameOfLifeImage,
    link: "/jsprojects/pages/gameOfLife/gameOfLife.html",
    icons: [P5Icon, JSIcon],
  },
  fallingSand: {
    title: "Falling Sand",
    description:
      "A falling sand simulation. Drag the mouse to draw elements and watch them interact. Press Shift to remove the sand.",
    image: fallingSandImage,
    link: "/jsprojects/pages/fallingSand/fallingsand.html",
    icons: [P5Icon, JSIcon],
  },
  fourierSeries: {
    title: "Fourier Series",
    description:
      "A Fourier series is an expansion of a periodic function into a sum of trigonometric functions. The Fourier series is an example of a trigonometric series.",
    image: fourierSeriesImage,
    link: "/jsprojects/pages/fourier/fourier.html",
    icons: [P5Icon, JSIcon],
  },
  rayTracing: {
    title: "2D Raytracing",
    description:
      "Ray tracing is a computer graphics technique used to generate highly realistic images by simulating the way light interacts with objects.",
    image: rayTracingImage,
    link: "/jsprojects/pages/raycasting/raycasting.html",
    icons: [P5Icon, JSIcon],
  },
  rtRender: {
    title: "2D RT - Rendering",
    description:
      "A primitive rendering technique that draws rectangles based on the distance from the camera.",
    image: rtRenderingImage,
    link: "/jsprojects/pages/rayrendering/rayrendering.html",
    icons: [P5Icon, JSIcon],
  },
  rayMarching: {
    title: "Raymarching",
    description:
      "Ray marching is a method where rays are traversed iteratively, effectively dividing each ray into smaller ray segments, sampling some function at each step.",
    image: raymarchingImage,
    link: "/jsprojects/pages/raymarching/raymarching.html",
    icons: [P5Icon, JSIcon],
  },
};
